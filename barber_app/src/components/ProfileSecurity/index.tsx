import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  onChangePassword: () => void;
  onSecuritySettings: () => void;
}

const SecurityOptionsCard: React.FC<Props> = ({ onChangePassword, onSecuritySettings }) => {
  return (
    <View>
      <Text style={styles.title}>Segurança</Text>
      <View style={styles.card}>
        <TouchableOpacity style={styles.option} onPress={onChangePassword}>
          <Text style={styles.optionText}>Alterar Senha</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.option} onPress={onSecuritySettings}>
          <Text style={styles.optionText}>Configurações de Segurança</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SecurityOptionsCard;
