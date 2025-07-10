import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { NavBar } from '../../components/NavBar';
import Button from '../../components/Button';
import { CardUpdate } from '../../components/CardUpdate';
import { db } from '../../services/firebaseConfig';
import styles from './styles';
import { Barbeiro } from '../../types/user';
import { Servico } from '../../types/services';

export default function Team() {
  const [barbeirosCadastrados, setBarbeirosCadastrados] = useState<Barbeiro[]>([]);
  const navigation = useNavigation();
  
  async function buscarBarbeiros(): Promise<Barbeiro[]> {
    const colecaoBarbeiros = collection(db, "Barbeiro");
    const barbeirosSnapshot = await getDocs(colecaoBarbeiros);
    return barbeirosSnapshot.docs.map(doc => ({
      ...(doc.data() as Omit<Barbeiro, 'id'>),
      id: doc.id
    }));
  }
  
  async function buscarServicos(): Promise<Servico[]> {
    const servicosCol = collection(db, "Servicos");
    const servicosSnapshot = await getDocs(servicosCol);
    return servicosSnapshot.docs.map(doc => ({
      ...(doc.data() as Omit<Servico, 'id'>),
      id: doc.id
    }));
  }

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [barbeiros, servicos] = await Promise.all([
          buscarBarbeiros(),
          buscarServicos()
        ]);
        const servicosMap = new Map(servicos.map(s => [s.id, s.nome]));
        const barbeirosComNomesEspecialidade = barbeiros.map(barbeiro => ({
          ...barbeiro, 
          especialidades: barbeiro.especialidades.map(
            id => servicosMap.get(id) || id 
          )
        }));

        setBarbeirosCadastrados(barbeirosComNomesEspecialidade);
      } catch (error) {
        console.error("Erro ao carregar dados da equipe:", error);
      }
    };

    carregarDados();
  }, []); 

  const handlePress = () => {
    navigation.navigate('NewMember' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Equipe</Text>
          <Button label="Novo Membro" style={styles.newMemberButton} textStyle={styles.newMemberText} onPress={handlePress} />
        </View>

        <View style={styles.cardsContainer}>
          {barbeirosCadastrados.map((membro) => (
            <CardUpdate
              key={membro.id}
              label={membro.nome}
              email={membro.email}
              specialties={membro.especialidades}
              phone={membro.telefone}
              dateSince={membro.dataIngresso}
              onEdit={() => console.log(`Editar membro: ${membro.nome}`)}
              onRemove={() => console.log(`Remover membro: ${membro.nome}`)}
              style={styles.cardUpdateStyle}
            />
          ))}
        </View>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}