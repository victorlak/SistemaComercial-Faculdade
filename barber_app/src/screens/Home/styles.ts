import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 10,
    paddingBottom: 100,
  },

  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginTop: 10,
  },

  headerTitle: {
    fontFamily: 'Poppins-Regular', 
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 15,
    color: '#1C1C1E',
  },
  
  tituloSecao: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#1C1C1E',
    marginTop: 24,
    marginBottom: 8,
    width: '100%',
    textAlign: 'left',
  },
  verTodos: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#444',
    textAlign: 'right',
    width: '100%',
    paddingVertical: 16,
  },
});