import React, { useRef, useEffect } from 'react';
import { View, Text, PanResponder } from 'react-native';
import { styles } from './styles';

type Props = {
  range: { min: number; max: number };
  totalMin: number;
  totalMax: number;
  onRangeChange: (newRange: { min: number; max: number }) => void;
};

export default function PriceRangeSlider({ range, totalMin, totalMax, onRangeChange }: Props) {
  const trackRef = useRef<View>(null);
  const sliderLayoutRef = useRef({ x: 0, width: 0 });

  const latestProps = useRef({ range, totalMin, totalMax, onRangeChange });
  useEffect(() => {
    latestProps.current = { range, totalMin, totalMax, onRangeChange };
  });

  const getPercentage = (value: number) => {
    if (totalMax === totalMin) return 0;
    const clampedValue = Math.max(totalMin, Math.min(value, totalMax));
    return ((clampedValue - totalMin) / (totalMax - totalMin)) * 100;
  };

  const getValueFromPosition = (position: number) => {
    const { totalMin: currentTotalMin, totalMax: currentTotalMax } = latestProps.current;
    if (sliderLayoutRef.current.width === 0) {
      return currentTotalMin;
    }
    const clampedPosition = Math.max(0, Math.min(position, sliderLayoutRef.current.width));
    const percentage = (clampedPosition / sliderLayoutRef.current.width) * 100;
    const value = currentTotalMin + ((currentTotalMax - currentTotalMin) * percentage) / 100;
    return value;
  };

  const createPanResponder = (isMinHandle: boolean) =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const { range: currentRange, onRangeChange: currentOnRangeChange } = latestProps.current;
        const relativeX = gestureState.moveX - sliderLayoutRef.current.x;
        const newValue = getValueFromPosition(relativeX);

        if (isMinHandle) {
          if (newValue <= currentRange.max) {
            currentOnRangeChange({ ...currentRange, min: newValue });
          }
        } else {
          if (newValue >= currentRange.min) {
            currentOnRangeChange({ ...currentRange, max: newValue });
          }
        }
      },
    });

  const minPanResponder = useRef(createPanResponder(true)).current;
  const maxPanResponder = useRef(createPanResponder(false)).current;

  const minPositionPercent = getPercentage(range.min);
  const maxPositionPercent = getPercentage(range.max);
  const activeTrackWidth = Math.max(0, maxPositionPercent - minPositionPercent);

  return (
    <View>
      <Text style={styles.label}>
        R$ {Math.round(range.min)} - R$ {Math.round(range.max)}
      </Text>
      <View style={styles.sliderContainer}>
        <View
          ref={trackRef}
          style={styles.fullTrack}
          onLayout={() => {
            trackRef.current?.measure((x, y, width, height, pageX, pageY) => {
              sliderLayoutRef.current = { x: pageX, width };
            });
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