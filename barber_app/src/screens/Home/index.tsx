import React from 'react';
import { ScrollView, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import {CardComissoes} from '../../components/CardIcon';
import {CardPeriodo} from '../../components/CardPeriodo';
import { NavBar } from '../../components/NavBar';
import ServiceItemCard from '../../components/ServiceItemCard';
import { styles } from './styles';
import DinheiroIcon from '../../assets/icons/ic_dinheiro.svg';
const DADOS_SERVICOS = [
  { id: '1', nome: 'Coloração', cliente: 'Carlos Oliveira', preco: 70.00, data: '02/05/2025 17:15' },
  { id: '2', nome: 'Corte', cliente: 'Carlos Oliveira', preco: 35.00, data: '02/05/2025 13:00' },
  { id: '3', nome: 'Corte', cliente: 'Carlos Oliveira', preco: 35.00, data: '02/05/2025 10:30' },
  { id: '4', nome: 'Coloração', cliente: 'Carlos Oliveira', preco: 70.00, data: '01/05/2025 16:00' },
]; // isso tem que ser retirado e substituido pelo banco de dados

export default function Home() {
  return (
   <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image 
          source={require('../../assets/images/img_logo.png')}
          style={styles.logo}
        />

        <Text style={styles.headerTitle}>Barbearia</Text>
      
         <CardPeriodo 
         //deveria passar aqui de parametro:
         //nome da opcao (opcao ou periodo)
         //opcoes de marcar (funcionarios, ou periodo)
         //label como foi feito abaixo
         //icon
         //value como foi feito abaixo
         />
         <CardPeriodo />
         <CardPeriodo />
         <CardComissoes 
          label="Funcionários"
          value="5" //count do banco de dados
          icon={DinheiroIcon}
          iconColor='#61b265'
        />
        <CardComissoes 
          label="Serviços"
          value="5" //count do banco de dados
          icon={DinheiroIcon}
          iconColor='#1C1C1E'
        />
        <Text style={styles.tituloSecao}>Serviços Recentes</Text>
        {DADOS_SERVICOS.map((servico) => (
          <ServiceItemCard key={servico.id} data={servico} />
        ))}
        <TouchableOpacity>
          <Text style={styles.verTodos}>Ver todos →</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}