import { View, Text, StyleSheet } from "react-native"
import Button from "../../components/Button"
import { Input } from "../../components/Input"
import styles from './styles'
import { useState } from "react"
import { auth, db , login, register} from "../../services/firebaseConfig";
import React from "react"

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');



    const handleLogin = async () => {
        console.log("aouba");

        setErro('');
            try {
              await login(email, senha);
              console.log("entrou");
              
            } catch (err: any) {
                console.log("senha errada");
                
              setErro("Credenciais inválidas.");
            }
        };

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>

                <View >
                    <Input onChangeText={setEmail} value={email} placeholder="Seu Email" label="Email" />
                </View>

                <View >
                    <Input onChangeText={setSenha} value={senha} placeholder="Sua Senha" label="Senha" />
                </View>

                <View style={styles.button} >
                    <Button onPress={handleLogin} label="Entrar" />
                </View>

            </View>
        )
    }
