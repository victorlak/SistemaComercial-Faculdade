import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import styles from './styles'

export default function Index() {

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