import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { collection, getDocs } from 'firebase/firestore';
import { NavBar } from '../../components/NavBar';
import Button from '../../components/Button';
import { CardUpdate } from '../../components/CardUpdate';
import { db } from '../../services/firebaseConfig';
import styles from './styles';
import { Barbeiro } from '../../types/user';
import { Servico } from '../../types/services';
import { RootStackParamList } from '../../routes/types';

type TeamScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Equipe'
>;

export default function Team() {
  const [barbeirosDoFirebase, setBarbeirosDoFirebase] = useState<Barbeiro[]>([]);
  const [barbeirosParaExibicao, setBarbeirosParaExibicao] = useState<Barbeiro[]>([]);

  const navigation = useNavigation<TeamScreenNavigationProp>();

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


  const carregarDados = async () => {
    try {
      const [barbeiros, servicos] = await Promise.all([
        buscarBarbeiros(),
        buscarServicos()
      ]);
      setBarbeirosDoFirebase(barbeiros);

      const servicosMap = new Map(servicos.map(s => [s.id, s.nome]));
      const barbeirosFormatadosParaExibicao = barbeiros.map(barbeiro => ({
        ...barbeiro,
        especialidades: barbeiro.especialidades.map(
          id => servicosMap.get(id) || id
        )
      }));
      setBarbeirosParaExibicao(barbeirosFormatadosParaExibicao);
    } catch (error) {
      console.error("Erro ao carregar dados da equipe:", error);
      Alert.alert("Erro", "Não foi possível carregar os dados da equipe. Tente novamente.");
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const handlePress = () => {
    navigation.navigate('NewMember' as never);
  };

  const handleEditMember = (membroParaEditar: Barbeiro) => {
    navigation.navigate('NewMember', { memberToEdit: membroParaEditar });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Equipe</Text>
          <Button label="Novo Membro" style={styles.newMemberButton} textStyle={styles.newMemberText} onPress={handlePress} />
        </View>

        <View style={styles.cardsContainer}>
          {barbeirosParaExibicao.map((membroExibicao) => {
            const membroOriginal = barbeirosDoFirebase.find(b => b.id === membroExibicao.id);
            return (
              <CardUpdate
                key={membroExibicao.id}
                label={membroExibicao.nome}
                email={membroExibicao.email}
                specialties={membroExibicao.especialidades}
                phone={membroExibicao.telefone}
                dateSince={membroExibicao.dataIngresso}
                onEdit={() => {

                  if (membroOriginal) {
                    handleEditMember(membroOriginal);
                  } else {
                    console.warn(`Barbeiro com ID ${membroExibicao.id} não encontrado nos dados brutos para edição.`);
                    Alert.alert("Erro", "Não foi possível carregar os detalhes do membro para edição.");
                  }
                }}
                onRemove={() => console.log(`Remover membro: ${membroExibicao.nome}`)}
                style={styles.cardUpdateStyle}
              />
            );
          })}
        </View>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}