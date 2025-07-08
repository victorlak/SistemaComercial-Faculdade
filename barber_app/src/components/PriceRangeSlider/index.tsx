import React, { useRef } from 'react';
import { View, Text, PanResponder } from 'react-native';

// Importando os estilos do arquivo separado
import { styles } from './styles';

type Props = {
  range: { min: number; max: number };
  totalMin: number;
  totalMax: number;
  onRangeChange: (newRange: { min: number; max: number }) => void;
};

export default function PriceRangeSlider({ range, totalMin, totalMax, onRangeChange }: Props) {
  const sliderLayoutRef = useRef({ x: 0, width: 0 });

  // --- Lógica de cálculo ---
  const getPercentage = (value: number) => {
    if (totalMax === totalMin) return 0;
    return ((value - totalMin) / (totalMax - totalMin)) * 100;
  };

  const getValueFromPosition = (position: number) => {
    const percentage = (position / sliderLayoutRef.current.width) * 100;
    const value = totalMin + ((totalMax - totalMin) * percentage) / 100;
    return Math.max(totalMin, Math.min(totalMax, value));
  };

  // --- Lógica dos Gestos (PanResponder) ---
  const minPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const newX = gestureState.moveX - sliderLayoutRef.current.x;
        const newValue = getValueFromPosition(newX);
        if (newValue <= range.max) {
          onRangeChange({ ...range, min: newValue });
        }
      },
    })
  ).current;

  const maxPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const newX = gestureState.moveX - sliderLayoutRef.current.x;
        const newValue = getValueFromPosition(newX);
        if (newValue >= range.min) {
          onRangeChange({ ...range, max: newValue });
        }
      },
    })
  ).current;

  // --- Cálculo das posições para o estilo ---
  const minPositionPercent = getPercentage(range.min);
  const maxPositionPercent = getPercentage(range.max);
  const activeTrackWidth = maxPositionPercent - minPositionPercent;

  return (
    <View>
      <Text style={styles.label}>
        R$ {Math.round(range.min)} - R$ {Math.round(range.max)}
      </Text>
      <View style={styles.sliderContainer}>
        <View
          style={styles.fullTrack}
          onLayout={(event) => {
            const { x, width } = event.nativeEvent.layout;
            sliderLayoutRef.current = { x, width };
          }}
        />
        <View
          style={[
            styles.activeTrack,
            {
              left: `${minPositionPercent}%`,
              width: `${activeTrackWidth}%`,
            },
          ]}
        />
        <View
          {...minPanResponder.panHandlers}
          style={[styles.handle, { left: `${minPositionPercent}%` }]}
        />
        <View
          {...maxPanResponder.panHandlers}
          style={[styles.handle, { left: `${maxPositionPercent}%` }]}
        />
      </View>
    </View>
  );
}
