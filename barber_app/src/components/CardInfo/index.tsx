import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles } from './styles';
import CardContainer from '../CardContainer';

type Props = {
  label: string;
  value: string;
  icon: React.FC<SvgProps> | ImageSourcePropType;
  iconColor?: string;
};

export const CardInfo = ({ 
  label, 
  value, 
  icon: Icon,
  iconColor = '#1C1C1E' 
}: Props) => {
  const isSvgComponent = typeof Icon === 'function';

  return (
    <CardContainer>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.label}>{label}</Text>
          {isSvgComponent ? (
            <Icon width={24} height={24} fill={iconColor} />
          ) : (
            <Image source={Icon as ImageSourcePropType} style={styles.iconImage} />
          )}
        </View>
        <Text style={styles.value}>{value}</Text>
      </View>
    </CardContainer>
  );
};