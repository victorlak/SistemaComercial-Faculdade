import React from 'react';
// ADICIONE 'Image' NA LISTA DE IMPORTS
import { ScrollView, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';

// Importando os componentes
import Card1 from '../../components/CardComissoes';
import Card2 from '../../components/CardPeriodo';
import { NavBar } from '../../components/NavBar';
import ServiceItemCard from '../../components/ServiceItemCard';
import { styles } from './styles';

// Dados de exemplo
const DADOS_SERVICOS = [
  { id: '1', nome: 'Coloração', cliente: 'Carlos Oliveira', preco: 70.00, data: '02/05/2025 17:15' },
  { id: '2', nome: 'Corte', cliente: 'Carlos Oliveira', preco: 35.00, data: '02/05/2025 13:00' },
  { id: '3', nome: 'Corte', cliente: 'Carlos Oliveira', preco: 35.00, data: '02/05/2025 10:30' },
  { id: '4', nome: 'Coloração', cliente: 'Carlos Oliveira', preco: 70.00, data: '01/05/2025 16:00' },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* --- IMAGEM DA LOGO ADICIONADA AQUI --- */}
        <Image 
          source={require('../../assets/images/img_logo.png')} // <-- Verifique se o caminho está correto
          style={styles.logo}
        />

        <Text style={styles.headerTitle}>Barbearia</Text>
        
        {/* O resto do código continua igual... */}
        <Card1 
          label="Total de Comissões Recebidas"
          value="R$ 10.560,00"
        />
        <Card2 />
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