import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { db, storage } from '../../services/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import { buscarLocalStorage } from '../../screens/Login/Storage';
import { doc, getDoc } from 'firebase/firestore';

interface UserData {
  nome: string;
  email: string;
  telefone: string;
  dataIngresso: string;
  dataSaida: string;
  //nomeBarbearia: string;
  //enderecoBarbearia: string;
}

const ProfileImage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [perfil, setPerfil] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [atuacao, setAtuacao] = useState('');


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
        setAtuacao(collectionName)

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

  const loadImage = async () => {
    try {
      const imageRef = ref(storage, `profileImages/${userId}.jpg`);
      const url = await getDownloadURL(imageRef);
      setImageUrl(url);
    } catch {
      setImageUrl('https://via.placeholder.com/100'); // Padrão
    }
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled && result.assets[0]?.uri) {
      await uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri: string) => {
    try {
      setLoading(true);
      const blob = await (await fetch(uri)).blob();
      const imageRef = ref(storage, `profileImages/${userId}.jpg`);
      await uploadBytes(imageRef, blob);
      const url = await getDownloadURL(imageRef);
      setImageUrl(url);
      Alert.alert('Sucesso', 'Imagem de perfil atualizada!');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao atualizar imagem de perfil.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImage();
  }, []);

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
    <TouchableOpacity style={styles.card} onPress={handlePickImage} activeOpacity={0.8}>
      <View style={styles.profileContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#1a1a77" />
        ) : (
          <Image source={{ uri: imageUrl ?? '' }} style={styles.profileImage} />
        )}
        <View style={styles.editIcon}>
          <MaterialIcons name="edit" size={18} color="#fff" />
        </View>
      </View>
      <Text style={styles.name}>{userData.nome}</Text>
      <Text style={styles.role}>{atuacao}</Text>
    </TouchableOpacity>
  );
};

export default ProfileImage;
