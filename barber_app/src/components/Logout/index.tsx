import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../services/firebaseConfig'; 
import styles from './styles';
import { signOut } from 'firebase/auth';

const Logout: React.FC = () => {
  const navigation = useNavigation();
  const logout = () => signOut(auth);

  const confirmLogout = () => {
    Alert.alert(
      'Sair da conta',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', style: 'destructive', onPress: handleLogout },
      ],
      { cancelable: true }
    );
  };

  const handleLogout = async () => {
    try {
      await logout();
      Alert.alert('Obrigado por usar nossos serviços!!!');
      navigation.navigate('Splash');
    } catch (error) {
      console.error('Erro ao deslogar:', error);
      Alert.alert('Erro', 'Não foi possível sair da conta.');
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={confirmLogout}>
      <Text style={styles.buttonText}>Sair</Text>
    </TouchableOpacity>
  );
};

export default Logout;
