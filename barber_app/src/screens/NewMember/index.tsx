import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert, Pressable, Platform} from 'react-native';
import styles from './styles';
import FecharIcon from '../../assets/icons/ic_fechar.svg';
import  Input  from '../../components/Input';
import Button from '../../components/Button';
import EditIcon from '../../assets/icons/ic_editar.svg';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import DateInput from '../../components/DateInput';
import { doc, setDoc, getDocs } from "firebase/firestore";
import {db} from '../../services/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { Barbeiro } from '../../types/user';
import { Servico } from '../../types/services';
import { register } from '../../services/firebaseConfig';

export default function NewMember() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photoUri, setPhotoUri] = useState<string | null>('');
  const [dataIngresso, setDataIngresso] = useState('');
  const [dataSaida, setDataSaida] = useState('');
  const [servicosDisponiveis, setServicosDisponiveis] = useState<Servico[]>([]);
  const [servicosSelecionados, setServicosSelecionados] = useState<string[]>([]);
  const SENHA_DEFAULT = 123456;

  async function buscarServicos(): Promise<Servico[]> {
    const servicosCol = collection(db, "Servicos");
    const servicosSnapshot = await getDocs(servicosCol);
    const servicosList: Servico[] = servicosSnapshot.docs.map(doc => {
      return {
        ...(doc.data() as Servico),
        id: doc.id
      };
    });
    return servicosList;
  }
  
  useEffect(() => {
    async function carregarServicos() {
      const servicos = await buscarServicos();
      console.log(servicos);
      setServicosDisponiveis(servicos);
    }
  
    carregarServicos();
  }, []);

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
    // console.log(servicosSelecionados);
  };

  async function addMember(Barbeiro: Barbeiro){
    try{
      register(email,SENHA_DEFAULT)
      await addDoc(collection(db, "Barbeiro"), Barbeiro);
    }catch(err){
      console.log(err);
      
    }
    
  }
  
  const  handleAdicionarMembro = async () => {
    let novoBarbeiro: Barbeiro = {
      nome: name,
      email: email,
      telefone:phone,
      dataIngresso: dataIngresso,
      dataSaida: dataSaida,
      especialidades: servicosSelecionados,
    }
    if (!name.trim()){
      Alert.alert('Erro', 'O campo Nome é obrigatório.');
      return;
    }

    if (!email.trim()){
      Alert.alert('Erro', 'O campo Email é obrigatório.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
      Alert.alert('Erro', 'Por favor, insira um email válido.');
      return;
    }

    if (!phone.trim()){
      Alert.alert('Erro', 'O campo Telefone é obrigatório');
      return;
    }
    const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (!phoneRegex.test(phone)){
      Alert.alert('Erro', 'Por favor, insira um número de telefone válido');
      return;
    }

    //if (!dataIngresso){
      //Alert.alert('Erro', 'A data de Ingresso é obrigatória.');
      //return;
    //}

    if (servicosSelecionados.length === 0){
      Alert.alert('Erro', 'Por favor, selecione pelo menos uma especialidade.');
      return;
    }
    await addMember(novoBarbeiro);

    // console.log({name, email, phone, photoUri, dataIngresso, dataSaida});
    Alert.alert('Sucesso', 'Membro adicionado!', [
      {
        onPress: () => {
          handleReturnToTeam();
        }
      }
    ]);
  };

  const navigation = useNavigation<any>();

  const handleReturnToTeam = () => {

    navigation.navigate('Equipe' as never);
  };



  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
      
        {/* Cabeçalho */}
        <View style={styles.header}>
          <View style={styles.placeholder}/>
            <Text style={styles.title}>Adicionar Membro</Text>
            <TouchableOpacity onPress={handleReturnToTeam}>
              <FecharIcon width={24} height={24}/>
            </TouchableOpacity>
        </View>

        {/* Upload da imagem do perfil */}
        <View style={styles.profilePictureContainer}>
          <View style={styles.photoContainer}>
            {photoUri ? (
              <Image source={{uri: photoUri}} style={styles.profileImage}/>
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
          <Input label='Nome' value={name} onChangeText={setName} placeholder='Digite o nome'/>
          <Input label='Email' value={email} onChangeText={setEmail} keyboardType='email-address' placeholder='Digite o email'/>
          <Input label='Telefone' value={phone} onChangeText={setPhone} keyboardType='phone-pad' placeholder='(DD) 9XXXX-XXXX'/>
        </View>

        {/* Datas */}
        <View style={styles.dateContainer}> 
            <View style={{marginLeft: 2, marginRight:21}}>
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
          <Button label='Adicionar' onPress={handleAdicionarMembro} style={styles.addMemberButton} textStyle={styles.textButton} />
        </View>

        
      </ScrollView>
    </View>
    
    
  );
}