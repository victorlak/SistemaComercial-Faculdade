import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = {
  children: ReactNode;
};

const CardContainer = ({ children }: Props) => {
  return (
    <View style={styles.cardContainer}>
      {children}
    </View>
  );
};

export default CardContainer;