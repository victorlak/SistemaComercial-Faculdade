import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';
// import { Logo } from './Logo';
import { NavBar } from '../../components/NavBar';
import ServiceAvailable from '../../components/ServiceAvailable';
import { SafeAreaView, ScrollView } from 'react-native';


type Servico = {
  nome: string;
  preco: number;
  comissao: string;
  descricao: string;
  tempo: number;
};

const servicos: Servico[] = [
  {
    nome: 'Corte Masculino',
    preco: 25,
    comissao: '30%',
    descricao: 'Corte com tesoura ou máquina, acabamento incluso.',
    tempo: 30
  },
  {
    nome: 'Corte Feminino',
    preco: 35,
    comissao: '35%',
    descricao: 'Corte feminino com lavagem e escova básica.',
    tempo: 45
  },
  {
    nome: 'Barba',
    preco: 15,
    comissao: '25%',
    descricao: 'Modelagem de barba com toalha quente.',
    tempo: 20
  },
  {
    nome: 'Sobrancelha',
    preco: 10,
    comissao: '20%',
    descricao: 'Design de sobrancelha com pinça ou linha.',
    tempo: 15
  },
  {
    nome: 'Pé e Mão',
    preco: 30,
    comissao: '40%',
    descricao: 'Serviço de manicure e pedicure completo.',
    tempo: 50
  },
  {
    nome: 'Hidratação Capilar',
    preco: 45,
    comissao: '35%',
    descricao: 'Tratamento de hidratação profunda nos fios.',
    tempo: 50
  },
  {
    nome: 'Escova Modelada',
    preco: 40,
    comissao: '30%',
    descricao: 'Escova com modelagem de pontas ou cachos.',
    tempo: 60
  },
  {
    nome: 'Progressiva',
    preco: 120,
    comissao: '50%',
    descricao: 'Alisamento capilar com produto sem formol.',
    tempo: 120
  },
  {
    nome: 'Descoloração',
    preco: 90,
    comissao: '40%',
    descricao: 'Descoloração total ou parcial dos fios.',
    tempo: 90
  },
  {
    nome: 'Coloração',
    preco: 70,
    comissao: '35%',
    descricao: 'Aplicação de tintura em todo o cabelo.',
    tempo: 80
  },
  {
    nome: 'Mechas',
    preco: 110,
    comissao: '45%',
    descricao: 'Técnica de luzes ou balayage.',
    tempo: 100
  },
  {
    nome: 'Botox Capilar',
    preco: 100,
    comissao: '50%',
    descricao: 'Tratamento para redução de volume e brilho intenso.',
    tempo: 90
  },
  {
    nome: 'Platinado',
    preco: 150,
    comissao: '50%',
    descricao: 'Descoloração intensa até atingir o tom platinado.',
    tempo: 120
  },
  {
    nome: 'Penteado',
    preco: 60,
    comissao: '30%',
    descricao: 'Penteado para eventos ou ocasiões especiais.',
    tempo: 70
  },
  {
    nome: 'Maquiagem',
    preco: 80,
    comissao: '35%',
    descricao: 'Maquiagem profissional com produtos de qualidade.',
    tempo: 60
  }
];


export default function Service() {
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text>Serviços</Text>
        {servicos.map((item, index) => (
          <ServiceAvailable key={index} servico={item} />
        ))}
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  scroll: {
    paddingVertical: 16,
  },

});
