import React from 'react';
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


export default function NewMember() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [phone, setPhone] = useState('');
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [dataIngresso, setDataIngresso] = useState('');
  const [dataSaida, setDataSaida] = useState('');

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

  const handleAdicionarMembro = () => {
    if (!dataIngresso){
      Alert.alert('Erro', 'A data de Ingresso é obrigatória.');
      return;
    }

    console.log({name, email, occupation, phone, photoUri, dataIngresso, dataSaida});
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
              <EditIcon width={17} height={17} fill="#FFF" alignSelf='center'/>
            </Button>
          </View >
        </View>

        
          {/* Inputs */}
          <View style={styles.input}>
            <Input label='Nome' value={name} onChangeText={setName}/>
            <Input label='Email' value={email} onChangeText={setEmail} keyboardType='email-address'/>
            <Input label='Ocupação' value={occupation} onChangeText={setOccupation}/>
            <Input label='Telefone' value={phone} onChangeText={setPhone} keyboardType='phone-pad'/>
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

        
        <View>
          <Button label='Adicionar' onPress={handleAdicionarMembro} style={styles.addMemberButton} textStyle={styles.textButton} />
        </View>

        
      </ScrollView>
    </View>
    
    
  );
}