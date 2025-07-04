import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#595858',
      alignItems: 'center',
      height: '100%',
      
    },
      logo: {
          height: 171,
          width: 171
      },
      title: {
          fontSize: 43,
          fontFamily:'CormorantGaramond-VariableFont_wght'
      },
      subtitle: {
          marginTop: '30%',
          fontSize: 14,
          color: 'white',
          fontFamily: 'Poppins-Medium',
      },
      curve: {
          backgroundColor: 'white',
          width: '100%',
          height: '70%',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 180,
          borderBottomRightRadius: 180,
      },
});

export default styles