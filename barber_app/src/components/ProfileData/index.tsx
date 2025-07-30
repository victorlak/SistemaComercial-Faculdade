import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Linking, ActivityIndicator, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import styles from './styles';
import { buscarLocalStorage } from '../../screens/Login/Storage';

interface UserData {
  nome: string;
  email: string;
  telefone: string;
  dataIngresso: string;
  //nomeBarbearia: string;
  //enderecoBarbearia: string;
}

const ProfileData: React.FC = () => {
  const [perfil, setPerfil] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function getInitialData() {
      const userProfile = await buscarLocalStorage('perfil');
      const userIdStored = await buscarLocalStorage('id_logado');
      setPerfil(userProfile);
      setUserId(userIdStored);
    }
    getInitialData();
  }, []);


  useEffect(() => {
    async function fetchUserData() {
      if (!userId || !perfil) return;

      // Define a coleção correta com base no perfil
      const collectionName = perfil === 'ADM' ? 'Adm' : perfil === 'BARBEIRO' ? 'Barbeiro' : '';

      if (!collectionName) {
        Alert.alert('Erro', 'Perfil inválido.');
        setLoading(false);
        return;
      }

      try {
        const userRef = doc(db, collectionName, userId);
        const snapshot = await getDoc(userRef);
        if (snapshot.exists()) {
          setUserData(snapshot.data() as UserData);
        } else {
          Alert.alert('Erro', 'Usuário não encontrado.');
        }
      } catch (error) {
        Alert.alert('Erro', 'Erro ao buscar dados do usuário.');
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [userId, perfil]);

  const handleEdit = () => {
    Alert.alert('Editar perfil', 'Funcionalidade em desenvolvimento.');
  };

  const handleEmailPress = () => {
    if (userData?.email) {
      Linking.openURL(`mailto:${userData.email}`);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#1a1a77" />
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={{ padding: 16 }}>
        <Text style={{ color: 'red', fontSize: 16 }}>Erro ao carregar dados do usuário.</Text>
      </View>
    );
  }
  
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Informações Pessoais</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <MaterialIcons name="edit" size={16} color="#1a1a77" />
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>{userData.nome}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Email</Text>
          <Text style={[styles.value, styles.link]} onPress={handleEmailPress}>
            {userData.email}
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>{userData.telefone}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Ingresso</Text>
          <Text style={styles.value}>{userData.dataIngresso}</Text>
        </View>
        {/*
        <View style={styles.item}>
          <Text style={styles.label}>Nome da Barbearia</Text>
          <Text style={styles.value}>{userData.nomeBarbearia}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Endereço da Barbearia</Text>
          <Text style={styles.value}>{userData.enderecoBarbearia}</Text>
        </View>*/}
      </View>
    </View>
  );
  
};

export default ProfileData;
