import React from 'react';
import { View, Text } from 'react-native';
import CardContainer from '../CardContainer'; // O CardContainer que você já tinha
import { styles } from './styles';

// Definindo o formato dos dados que o card espera receber
type ServiceData = {
  nome: string;
  cliente: string;
  preco: number;
  data: string;
};

type Props = {
  // A prop 'data' conterá um objeto com as informações do serviço
  data: ServiceData;
};

const ServiceItemCard = ({ data }: Props) => {
  return (
    // 1. Usando seu CardContainer como base para cada item
    <CardContainer>
      <View style={styles.itemContent}>
        {/* Coluna da Esquerda */}
        <View>
          <Text style={styles.itemNomeServico}>{data.nome}</Text>
          <Text style={styles.itemCliente}>{data.cliente}</Text>
        </View>

        {/* Coluna da Direita */}
        <View style={styles.itemColunaDireita}>
          <Text style={styles.itemPreco}>{`R$ ${data.preco.toFixed(2).replace('.', ',')}`}</Text>
          <Text style={styles.itemData}>{data.data}</Text>
        </View>
      </View>
    </CardContainer>
  );
};

export default ServiceItemCard;