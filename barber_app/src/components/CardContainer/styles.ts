import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12, // ALTERADO: Reduzido drasticamente de 16 para 12
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8.0,
    elevation: 8,
  },
});