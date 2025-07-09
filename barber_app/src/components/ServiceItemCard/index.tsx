import React from 'react';
import { View, Text } from 'react-native';
import CardContainer from '../CardContainer';
import { styles } from './styles';

type ServiceData = {
  nome: string;
  cliente: string;
  preco: number;
  data: string;
};

type Props = {
  data: ServiceData;
};

const ServiceItemCard = ({ data }: Props) => {
  return (
    <CardContainer>
      <View style={styles.itemContent}>
        <View>
          <Text style={styles.itemNomeServico}>{data.nome}</Text>
          <Text style={styles.itemCliente}>{data.cliente}</Text>
        </View>
        <View style={styles.itemColunaDireita}>
          <Text style={styles.itemPreco}>{`R$ ${data.preco.toFixed(2).replace('.', ',')}`}</Text>
          <Text style={styles.itemData}>{data.data}</Text>
        </View>
      </View>
    </CardContainer>
  );
};

export default ServiceItemCard;