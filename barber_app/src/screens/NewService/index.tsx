import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

export default function NewService() {
  const [name, setName] = useState('');
  const [descricao, setDescricao] = useState('');
  const [duracao, setDuracao] = useState('');
  const [preco, setPreco] = useState('');
  const [comissao, setComissao] = useState('');

  type servico = {
    nome: string,
    descricao: string,
    duracao: string,
    preco: string,
    comissao: string
  }
  async function addService(){
    let newService: servico = {
      nome: name,
      descricao: descricao,
      duracao: duracao,
      preco: preco,
      comissao: comissao
    }
    addDoc(collection(db, "Servicos"), newService)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Serviço</Text>

      <View style={styles.field}>
        <Text style={styles.label}>Nome</Text>
        <Input 
        onChangeText={setName}
        value = {name}
        placeholder="Nome do serviço"
        autoCapitalize="none" />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Preço</Text>
         <Input 
        onChangeText={setPreco}
        value = {preco}
        placeholder="Informe o preço"
        autoCapitalize="none" />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Duração</Text>
         <Input 
        onChangeText={setDuracao}
        value = {duracao}
        placeholder="Informe o tempo médio"
        autoCapitalize="none" />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Descrição</Text>
         <Input 
        onChangeText={setDescricao}
        value = {descricao}
        placeholder="Faça uma breve observação"
        autoCapitalize="none" />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Comissão</Text> 
         <Input 
        onChangeText={setComissao}
        value = {comissao}
        placeholder="Valor de comissão"
        autoCapitalize="none" />
      </View>
      <Button onPress={addService} style={styles.addMemberButton} label="Adicionar"></Button>
    </View>
  );
}
//jhbouyiutv

const styles = StyleSheet.create({
  addMemberButton: {
        width: 117,
        height: 40,
        borderRadius: 22,
        alignSelf: 'center',
        marginLeft: 220,
        marginTop: 30,
        marginBottom: 30,
    },
  container: {
    padding: 16,
  },
  textInput: {
    display: 'flex',
    justifyContent:'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    display: 'flex',
    justifyContent:'center',
    marginBottom: 50
  },
  field: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 4,
    fontSize: 16
  }
});
