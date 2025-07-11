import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
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

type MemberFilter = 'all' | 'active' | 'inactive';

export default function Team() {
  const [barbeirosDoFirebase, setBarbeirosDoFirebase] = useState<Barbeiro[]>([]);
  const [barbeirosParaExibicao, setBarbeirosParaExibicao] = useState<Barbeiro[]>([]);
  const [currentFilter, setCurrentFilter] = useState<MemberFilter>('active');

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
    const unsubscribe = navigation.addListener('focus', () => {
      carregarDados();
    });
    return unsubscribe;
  }, [navigation]);

  const [filteredBarbeiros, setFilteredBarbeiros] = useState<Barbeiro[]>([]);

  useEffect(() => {
    let filtered = barbeirosParaExibicao;
    if (currentFilter === 'active') {
      filtered = barbeirosParaExibicao.filter(membro => membro.ativo === true);
    } else if (currentFilter === 'inactive') {
      filtered = barbeirosParaExibicao.filter(membro => membro.ativo === false);
    }
    setFilteredBarbeiros(filtered);
  }, [barbeirosParaExibicao, currentFilter]);

  const handlePress = () => {
    navigation.navigate('NewMember' as never);
  };

  const handleEditMember = (membroParaEditar: Barbeiro) => {
    navigation.navigate('NewMember', { memberToEdit: membroParaEditar });
  };

  const handleToggleMemberStatus = async (memberId: string, memberName: string, currentStatus: boolean) => {
    const newStatus = !currentStatus;
    const actionText = newStatus ? 'habilitar' : 'desativar';
    const statusText = newStatus ? 'ativo(a)' : 'inativo(a)';

    // Alert.alert(
    //   `Confirmar ${actionText}`,
    //   `Tem certeza que deseja ${actionText} ${memberName}? O membro ficará ${statusText}.`,
    //   [
    //     {
    //       text: "Cancelar",
    //       style: "cancel"
    //     },
    //     {
    //       text: actionText.charAt(0).toUpperCase() + actionText.slice(1),
    //       onPress: async () => {
    //         try {
    //           const barbeiroRef = doc(db, "Barbeiro", memberId);
    //           await updateDoc(barbeiroRef, { ativo: newStatus });
    //           Alert.alert("Sucesso", `${memberName} foi ${actionText} com sucesso e agora está ${statusText}!`);
    //           carregarDados();
    //         } catch (error) {
    //           console.error(`Erro ao ${actionText} membro:`, error);
    //           Alert.alert("Erro", `Não foi possível ${actionText} ${memberName}. Tente novamente.`);
    //         }
    //       }
    //     }
    //   ]
    // );

    try {
      const barbeiroRef = doc(db, "Barbeiro", memberId);
      await updateDoc(barbeiroRef, { ativo: newStatus });
      carregarDados(); 
    } catch (error) {
      console.error(`Erro ao ${actionText} membro:`, error);
      Alert.alert("Erro", `Não foi possível ${actionText} ${memberName}. Tente novamente.`);
    }

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Equipe</Text>
          <Button label="Novo Membro" style={styles.newMemberButton} textStyle={styles.newMemberText} onPress={handlePress} />
        </View>

        {/* Botoes de Filtro */}
        <View style={styles.filterContainer}>
          <Button
            style={[styles.filterButton, currentFilter === 'active' && styles.filterButtonActive]}
            label='Ativos'
            textStyle={[styles.filterButtonText, currentFilter === 'active' && styles.filterButtonTextActive]}
            onPress={() => setCurrentFilter('active')}
          />
          <Button
            style={[styles.filterButton, currentFilter === 'inactive' && styles.filterButtonActive]}
            label='Inativos'
            textStyle={[styles.filterButtonText, currentFilter === 'inactive' && styles.filterButtonTextActive]}
            onPress={() => setCurrentFilter('inactive')}
          />
          <Button
            style={[styles.filterButton, currentFilter === 'all' && styles.filterButtonActive]}
            label='Todos'
            textStyle={[styles.filterButtonText, currentFilter === 'all' && styles.filterButtonTextActive]}
            onPress={() => setCurrentFilter('all')}
          />
        </View>

        <View style={styles.cardsContainer}>
          {filteredBarbeiros.map((membroExibicao) => {
            const membroOriginal = barbeirosDoFirebase.find(b => b.id === membroExibicao.id);
            return (
              <CardUpdate
                key={membroExibicao.id}
                label={membroExibicao.nome}
                email={membroExibicao.email}
                specialties={membroExibicao.especialidades}
                phone={membroExibicao.telefone}
                dateSince={membroExibicao.dataIngresso}
                isActive={membroExibicao.ativo}
                onEdit={() => {

                  if (membroOriginal) {
                    handleEditMember(membroOriginal);
                  } else {
                    console.warn(`Barbeiro com ID ${membroExibicao.id} não encontrado nos dados brutos para edição.`);
                    Alert.alert("Erro", "Não foi possível carregar os detalhes do membro para edição.");
                  }
                }}
                onToggleStatus={() => handleToggleMemberStatus(membroExibicao.id!, membroExibicao.nome, membroExibicao.ativo)}
                style={styles.cardUpdateStyle}
              />
            );
          })}
          {filteredBarbeiros.length === 0 && (
            <Text style={styles.noMembersText}>Nenhum membro encontrado neste filtro.</Text>
          )}
        </View>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}