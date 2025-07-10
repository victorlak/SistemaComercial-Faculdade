import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
//import { auth } from '../../services/firebaseConfig';
import styles from './styles';

interface Props {
  onLogout?: () => void;
}

const Logout: React.FC<Props> = ({ onLogout }) => {
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
      await signOut(auth);
      onLogout?.();
    } catch (error) {
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
