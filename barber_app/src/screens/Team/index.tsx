import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
// import { Logo } from './Logo';
import { NavBar } from '../../components/NavBar';
import styles from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { CardUpdate } from '../../components/CardUpdate';
export default function Team() {

  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate('NewMember' as never);
  }

  const DADOS_MEMBROS = [
    { id: '1', nome: 'João Silva', email: 'joao@example.com', especialides: ['Corte Masculino', 'Barba'], telefone: '(32) 98765-4321', data: 'Desde 14/01/2022' },
    { id: '2', nome: 'Carlos Oliveira', email: 'carlos@example.com', especialides: ['Corte Masculino', 'Coloração'], telefone: '(32) 98765-4321', data: 'Desde 14/01/2022' },
    { id: '3', nome: 'Pedro Santos', email: 'pedro@example.com', especialides: ['Corte Masculino', 'Barba'], telefone: '(32) 98765-4321', data: 'Desde 14/01/2022' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.header}>
          <Text style={styles.title}>Equipe</Text>
          <Button label="Novo Membro" style={styles.newMemberButton} textStyle={styles.newMemberText} onPress={handlePress} />
        </View>

        <View style={styles.cardsContainer}>
          {DADOS_MEMBROS.map((membro) => (
            <CardUpdate
              key={membro.id}
              label={membro.nome}
              email={membro.email}
              specialties={membro.especialides}
              phone={membro.telefone}
              dateSince={membro.data}
              onEdit={() => console.log(`Editar membro: ${membro.nome}`)}
              onRemove={() => console.log(`Remover membro: ${membro.nome}`)}
              style={styles.cardUpdateStyle}
            />
          ))}
        </View>

      </ScrollView>
      <NavBar />
    </SafeAreaView>



  );
}