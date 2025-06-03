import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#595858',
    alignItems: 'center',
    height: '100%',
    fontFamily: 'Cormorant Garamond'
  },
    logo: {
        height: 171,
        width: 171
    },
    title: {
        fontSize: 43
    },
    subtitle: {
        marginTop: '30%',
        fontSize: 16,
        color: 'white'
    },
    curve: {
        backgroundColor: 'white',
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 180,
        borderBottomRightRadius: 180,
    }
    
});
