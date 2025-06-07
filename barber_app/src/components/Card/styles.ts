import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentWrapper: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4, // ALTERADO: Reduzido de 6 para 4
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12, // ALTERADO: Reduzido de 13 para 12
    color: '#333',
  },
  icon: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#2E7D32',
  },
  value: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18, // ALTERADO: Reduzido de 24 para 18 (para igualar ao Card2)
    color: '#1C1C1E',
  },
});