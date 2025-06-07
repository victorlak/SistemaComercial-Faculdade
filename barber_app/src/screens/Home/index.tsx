import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
// Importando os componentes oficiais
import Card1 from '../../components/Card';
import Card2 from '../../components/Card2';
import { styles } from './styles';

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerTitle}>Barbearia</Text>
        
        {/* Usando o novo Card1 e passando os dados para ele */}
        <Card1 
          label="Total de Comissões Recebidas"
          value="R$ 10.560,00"
          icon="$"
        />

        <Card2 />
        
        {/* Aqui viria a sua lista de "Serviços Recentes" */}

      </ScrollView>
    </SafeAreaView>
  );
}