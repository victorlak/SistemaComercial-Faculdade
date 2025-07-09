import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import styles from './styles'
import { useState } from "react"
import { auth, db, login, register } from "../../services/firebaseConfig";
import React from "react"
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"

export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [mensagemRecuperacao, setMensagemRecuperacao] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    setErro('');
    setMensagemRecuperacao('');
    
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate('Painel');
    } catch (err: any) {
      switch (err.code) {
        case 'auth/user-not-found':
          setErro("Usuário não encontrado.");
          break;
        case 'auth/wrong-password':
          setErro("Senha incorreta.");
          break;
        case 'auth/invalid-email':
          setErro("Email inválido.");
          break;
        case 'auth/user-disabled':
          setErro("Esta conta foi desativada.");
          break;
        case 'auth/too-many-requests':
          setErro("Muitas tentativas de login.");
          break;
        default:
          setErro("Ocorreu um erro ao fazer o login.");
      }
    }
  };

  const handleRecuperacaoSenha = async () => {
    setErro('');
    setMensagemRecuperacao('');
    
    try {
      await sendPasswordResetEmail(auth, email);
      setMensagemRecuperacao('Você será notificado via email para redefinir sua senha.');
    } catch (err: any) {
      setMensagemRecuperacao('Erro ao enviar email de recuperação. Verifique seu email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      {/* Campo de Email */}
      <View>
        <Input
          onChangeText={setEmail}
          value={email}
          placeholder="Seu Email"
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Campo de Senha com botão de visibilidade */}
      <View>
        <Input
          onChangeText={setSenha}
          value={senha}
          placeholder="Sua Senha"
          label="Senha"
          secureTextEntry={!mostrarSenha}
          autoCapitalize="none"
          rightIcon={
            <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
              <Text>{mostrarSenha ? 'Ocultar' : 'Mostrar'}</Text>
            </TouchableOpacity>
          }
        />
      </View>

      {/* Mensagens de erro e recuperação */}
      <View style={{ marginTop: 10 }}>
        {erro && (
          <Text style={[styles.errorText, { color: '#ca2c17' }]}>
            {erro}
          </Text>
        )}
        {mensagemRecuperacao && (
          <Text style={styles.recuperacaoText}>
            {mensagemRecuperacao}
          </Text>
        )}
      </View>

      {/* Botão de Entrar */}
      <View style={styles.buttonContainer}>
        <Button onPress={handleLogin} label="Entrar" style={styles.buttonEntrar}/>
      </View>

      {/* Link de recuperação de senha */}
      <TouchableOpacity 
        style={styles.forgotPasswordLink}
        onPress={handleRecuperacaoSenha}
      >
        <Text style={styles.forgotPasswordText}>
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>
    </View>
  )
}