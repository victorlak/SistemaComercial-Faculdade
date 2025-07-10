import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Linking, ActivityIndicator, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import styles from './styles';

interface UserData {
  nome: string;
  email: string;
  telefone: string;
  dataIngresso: string;
  nomeBarbearia: string;
  enderecoBarbearia: string;
}

const ProfileData: React.FC = () => {
  const userId = 'id'; // Substitua
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  /*
  const fetchUserData = async () => {
    try {
      const userRef = doc(db, 'usuarios', userId);
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
  };

  const handleEdit = () => {
    // ação de edição

  };

  const handleEmailPress = () => {
    if (userData?.email) {
      Linking.openURL(`mailto:${userData.email}`);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#1a1a77" />;
  }

  if (!userData) {
    return <Text style={{ color: 'red' }}>Erro ao carregar dados do usuário.</Text>;
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

        <View style={styles.item}>
          <Text style={styles.label}>Nome da Barbearia</Text>
          <Text style={styles.value}>{userData.nomeBarbearia}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Endereço da Barbearia</Text>
          <Text style={styles.value}>{userData.enderecoBarbearia}</Text>
        </View>
      </View>
    </View>
  );
  */
   return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Informações Pessoais</Text>
        <TouchableOpacity style={styles.editButton}>
          <MaterialIcons name="edit" size={16} color="#1a1a77" />
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>Nome completo</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Email</Text>
          <Text style={[styles.value, styles.link]} >
            email@email.com
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>(xx)xxxxx-xxxx</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Ingresso</Text>
          <Text style={styles.value}>dd/mm/aaaa</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Nome da Barbearia</Text>
          <Text style={styles.value}>barbearia</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Endereço da Barbearia</Text>
          <Text style={styles.value}>endereco</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileData;
