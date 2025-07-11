import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert, Pressable, Platform } from 'react-native';
import styles from './styles';
import FecharIcon from '../../assets/icons/ic_fechar.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import EditIcon from '../../assets/icons/ic_editar.svg';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import DateInput from '../../components/DateInput';
import { doc, setDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../services/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { Barbeiro } from '../../types/user';
import { Servico } from '../../types/services';
import { register } from '../../services/firebaseConfig';
import { RootStackParamList } from '../../routes/types';

type NewMemberScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'NewMember'>;
type NewMemberScreenRouteProp = RouteProp<RootStackParamList, 'NewMember'>;

export default function NewMember() {
  const navigation = useNavigation<NewMemberScreenNavigationProp>();
  const route = useRoute<NewMemberScreenRouteProp>();
  const { memberToEdit } = route.params || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photoUri, setPhotoUri] = useState<string | null>('');
  const [dataIngresso, setDataIngresso] = useState('');
  const [dataSaida, setDataSaida] = useState('');
  const [servicosDisponiveis, setServicosDisponiveis] = useState<Servico[]>([]);
  const [servicosSelecionados, setServicosSelecionados] = useState<string[]>([]);
  const SENHA_DEFAULT = 123456;

  useEffect(() => {
    async function initializeForm() {
      const servicos = await buscarServicos();
      setServicosDisponiveis(servicos);

    if (memberToEdit) {
      setName(memberToEdit.nome || '');
      setEmail(memberToEdit.email || '');
      setPhone(memberToEdit.telefone || '');
      //setPhotoUri(memberToEdit.foto || ''); 
      setDataIngresso(memberToEdit.dataIngresso || '');
      setDataSaida(memberToEdit.dataSaida || '');
      setServicosSelecionados(memberToEdit.especialidades || []);
    } else{
      setName('');
        setEmail('');
        setPhone('');
        setPhotoUri(null);
        setDataIngresso('');
        setDataSaida('');
        setServicosSelecionados([]);
    }
  }

  initializeForm();
}, [memberToEdit]);

  async function buscarServicos(): Promise<Servico[]> {
    const servicosCol = collection(db, "Servicos");
    const servicosSnapshot = await getDocs(servicosCol);
    const servicosList: Servico[] = servicosSnapshot.docs.map(doc => {
      return {
        ...(doc.data() as Omit<Servico, 'id'>),
        id: doc.id
      };
    });
    return servicosList;
  }

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  //Serve para saber quais botoes da especialidade foram marcados ou nao
  const handleToggleService = (serviceId: string) => {
    setServicosSelecionados(prevSelected => {
      if (prevSelected.includes(serviceId)) {
        return prevSelected.filter(id => id !== serviceId);
      } else {
        return [...prevSelected, serviceId];
      }

    });
  };

  async function addMember(newBarbeiroData: Omit<Barbeiro, 'id'>) {
    try {
      await register(newBarbeiroData.email, SENHA_DEFAULT);
      await addDoc(collection(db, "Barbeiro"), newBarbeiroData);
    } catch (err: any) {
      console.error("Erro ao adicionar membro ou criar usuário:", err);
      if (err.code === 'auth/email-already-in-use'){
        Alert.alert("Erro de Cadastro", "Este email já está em uso por outra conta.");
      } else {
        Alert.alert("Erro", "Não foi possível adicionar o membro. Tente novamente.");
      }
      throw err;
    }
  }

  async function updateMember(id: string, updatedBarbeiro: Omit<Barbeiro, 'id'>) {
    const barbeiroRef = doc(db, "Barbeiro", id);
    await updateDoc(barbeiroRef, updatedBarbeiro);
  }

  const handleAdicionarMembro = async () => {
    let novoBarbeiro: Omit<Barbeiro, 'id'> = {
      nome: name,
      email: email,
      telefone: phone,
      dataIngresso: dataIngresso,
      dataSaida: dataSaida,
      especialidades: servicosSelecionados,
      servicosRealizados: [],
      ativo: true

    }

    if (!name.trim()) {
      Alert.alert('Erro', 'O campo Nome é obrigatório.');
      return;
    }

    if (!email.trim()) {
      Alert.alert('Erro', 'O campo Email é obrigatório.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }

    if (!phone.trim()) {
      Alert.alert('Erro', 'O campo Telefone é obrigatório');
      return;
    }
    const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (!phoneRegex.test(phone)) {
      Alert.alert('Erro', 'Por favor, insira um número de telefone válido');
      return;
    }

    //if (!dataIngresso){
    //Alert.alert('Erro', 'A data de Ingresso é obrigatória.');
    //return;
    //}

    if (servicosSelecionados.length === 0) {
      Alert.alert('Erro', 'Por favor, selecione pelo menos uma especialidade.');
      return;
    }

    try {
      if (memberToEdit && memberToEdit.id) {
        const updateData = {...novoBarbeiro, ativo: memberToEdit.ativo}
        await updateMember(memberToEdit.id, updateData);
        Alert.alert('Sucesso', 'Membro atualizado com sucesso!');
      } else {
        await addMember(novoBarbeiro as Barbeiro);
        Alert.alert('Sucesso', 'Membro adicionado com sucesso!');
      }
      handleReturnToTeam();

    } catch (error) {
      console.error("Erro ao salvar membro:", error);
      Alert.alert('Erro', 'Ocorreu um erro inesperado ao salvar o membro. Tente novamente.');
    }
  };


  const handleReturnToTeam = () => {
    navigation.navigate('Equipe');
  };


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>

        {/* Cabeçalho */}
        <View style={styles.header}>
          <View style={styles.placeholder} />
          <Text style={styles.title}>{memberToEdit ? 'Editar Membro' : 'Adicionar Membro'}</Text>
          <TouchableOpacity onPress={handleReturnToTeam}>
            <FecharIcon width={24} height={24} />
          </TouchableOpacity>
        </View>

        {/* Upload da imagem do perfil */}
        <View style={styles.profilePictureContainer}>
          <View style={styles.photoContainer}>
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.profileImage} />
            ) : (
              <View style={styles.photoPlaceholder} />
            )}

            <Button style={styles.editButton} onPress={handleChoosePhoto}>
              <EditIcon width={17} height={17} fill="#FFF" />
            </Button>
          </View >
        </View>


        {/* Inputs */}
        <View style={styles.input}>
          <Input label='Nome' value={name} onChangeText={setName} placeholder='Digite o nome' />
          <Input label='Email' value={email} onChangeText={setEmail} keyboardType='email-address' placeholder='Digite o email' />
          <Input label='Telefone' value={phone} onChangeText={setPhone} keyboardType='phone-pad' placeholder='(DD) 9XXXX-XXXX' />
        </View>

        {/* Datas */}
        <View style={styles.dateContainer}>
          <View style={{ marginLeft: 2, marginRight: 21 }}>
            <DateInput
              label='Ingresso'
              value={dataIngresso}
              onDateChange={setDataIngresso}
            />
          </View>
          <View>
            <DateInput
              label='Saída'
              value={dataSaida}
              onDateChange={setDataSaida}
            />
          </View>
        </View>

        {/* Especialidades */}
        <View style={styles.especialidadesContainer}>
          <Text style={styles.textEspecialidade}>Especialidade</Text>
          <View style={styles.especialidadeButtonsContainer}>
            {servicosDisponiveis.map(service => (
              <Button
                key={service.id}
                label={service.nome}
                style={[
                  styles.specialtyButton,
                  servicosSelecionados.includes(service.id) ? styles.selectedSpecialtyButton : null,
                ]}
                textStyle={[
                  styles.specialtyButtonText,
                  servicosSelecionados.includes(service.id) ? styles.selectedSpecialtyButtonText : null,
                ]}
                onPress={() => handleToggleService(service.id)}
              />
            ))}
          </View>
        </View>

        <View>
          <Button
            label={memberToEdit ? 'Atualizar' : 'Adicionar'}
            onPress={handleAdicionarMembro}
            style={styles.addMemberButton}
            textStyle={styles.textButton}
          />
        </View>

      </ScrollView>
    </View>


  );
}