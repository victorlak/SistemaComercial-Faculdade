import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import CardContainer from '../CardContainer'; // Reutilizando nosso container!

type Props = {
  label: string;
  value: string;
  icon: string; // O ícone será um simples caractere de texto por enquanto
};

const Card = ({ label, value, icon }: Props) => {
  return (
    <CardContainer>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.icon}>{icon}</Text>
        </View>
        <Text style={styles.value}>{value}</Text>
      </View>
    </CardContainer>
  );
};

export default Card;