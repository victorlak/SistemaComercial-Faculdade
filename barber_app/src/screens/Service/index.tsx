import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';
// import { Logo } from './Logo';
import { NavBar } from '../../components/NavBar';
import ServiceAvailable from '../../components/ServiceAvailable';
import { SafeAreaView, ScrollView } from 'react-native';
import {PerfisUsuario} from '../../types/utils/ProfilesUserTypes';
import { db } from '../../services/firebaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';


type Servico = {
  id: string;
  nome: string;
  preco: string;
  comissao: string;
  descricao: string;
  duracao: string;
};


export default function Service() {
   
  const [servicosDisponiveis, setServicosDisponiveis] = useState<Servico[]>();

  async function buscarServicos(): Promise<Servico[]> {
    const servicosCol = collection(db, "Servicos");
    const servicosSnapshot = await getDocs(servicosCol);
    const servicosList: Servico[] = servicosSnapshot.docs.map(doc => {
      return {
        ...(doc.data() as Servico),
        id: doc.id
      };
    });
    return servicosList;
  }
    useEffect(() => {
    async function carregarServicos() {
      const servicos: Servico[] = await buscarServicos();
      console.log(servicos);
      setServicosDisponiveis(servicos);
    }
  
    carregarServicos();
  }, []);
  console.log(servicosDisponiveis);
  
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scroll}>
        
        {servicosDisponiveis?.map((item, index) => (
          <ServiceAvailable key={item.id} servico={item} />
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