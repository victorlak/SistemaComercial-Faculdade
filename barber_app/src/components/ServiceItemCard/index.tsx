import React from 'react';
import { View, Text } from 'react-native';
import CardContainer from '../CardContainer';
import { styles } from './styles';

type ServiceData = {
  nomeServico: string;
  nomeBarbeiro: string;
  precoServico: number;
  data: string;
  hora: string;
};

type Props = {
  data: ServiceData;
};

const ServiceItemCard = ({ data }: Props) => {
  const precoFormatado = (data.precoServico || 0).toFixed(2).replace('.', ',');

  return (
    <CardContainer>
      <View style={styles.itemContent}>
        <View>
          <Text style={styles.itemNomeServico}>{data.nomeServico}</Text>
          <Text style={styles.itemCliente}>{data.nomeBarbeiro}</Text>
        </View>
        <View style={styles.itemColunaDireita}>
          <Text style={styles.itemPreco}>{`R$ ${precoFormatado}`}</Text>
          <Text style={styles.itemData}>{`${data.data} - ${data.hora}`}</Text>
        </View>
      </View>
    </CardContainer>
  );
};

export default ServiceItemCard;