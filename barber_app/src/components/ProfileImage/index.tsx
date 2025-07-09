import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import { storage } from '../../services/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';


const ProfileImage: React.FC = () => {
  const userId = "id"; // Substituir pelo caminho correto
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
      <Text style={styles.name}>Nome</Text>
      <Text style={styles.role}>Atuação</Text>
    </TouchableOpacity>
  );
};

export default ProfileImage;
