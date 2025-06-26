import React from 'react';import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from './styles'
import { useNavigation } from "@react-navigation/native";
import { useEffect } from 'react';



export default function Index() {
  const navigation = useNavigation<any>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login', {}, { replace: true });//NAVIGATE LOGIN
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <>
        <View style={styles.container} >
            <View style = {styles.curve} >
                <Image style={styles.logo} source= {require("../../assets/images/img_logo.png")} />
                <Text style = {styles.title}>Barbearia</Text>
            </View>
            <View>
                <Text style={styles.subtitle}>Organização e estilo, no mesmo lugar.</Text>
            </View>
            
        </View>
    </>
  );
}