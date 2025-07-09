import React from 'react';
import { View, Text} from 'react-native';
// import { Logo } from './Logo';
import { NavBar } from '../../components/NavBar';
import styles from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function Team() {

  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate('NewMember' as never);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style = {styles.title}>Equipe</Text>
        <Button label="Novo Membro" style={styles.newMemberButton} textStyle={styles.newMemberText} onPress={handlePress}/>
        
      </View>

      <NavBar />
    </View>
  );
}

