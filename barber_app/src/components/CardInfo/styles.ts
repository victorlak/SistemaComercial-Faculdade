import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentWrapper: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#333',
  },
  value: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#1C1C1E',
  },
  // ADICIONE ESTE NOVO ESTILO PARA A IMAGEM
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});