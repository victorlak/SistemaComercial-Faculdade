import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import CardContainer from '../CardContainer';
import DinheiroIcon from '../../assets/icons/ic_dinheiro.svg';

type Props = {
  label: string;
  value: string;
};

const Card = ({ label, value }: Props) => {
  return (
    <CardContainer>
      <View style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.label}>{label}</Text>
          <DinheiroIcon width={24} height={24} fill="#61b265" />
        </View>
        <Text style={styles.value}>{value}</Text>
      </View>
    </CardContainer>
  );
};

export default Card;
