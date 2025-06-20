import React from 'react';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { styles } from './styles';
import CardContainer from '../CardContainer';

type Props = {
  label: string;
  value: string;
  icon: React.FC<SvgProps>;
  iconColor?: string;
};

//    Se iconColor não for passado, ele usará '#1C1C1E' como padrão.
export const CardInfo = ({ 
  label, 
  value, 
  icon: Icon, 
  iconColor = '#1C1C1E' 
}: Props) => {
  return (
    <CardContainer>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.label}>{label}</Text>
          <Icon width={24} height={24} fill={iconColor} />
        </View>
        <Text style={styles.value}>{value}</Text>
      </View>
    </CardContainer>
  );
};