import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 28, // AUMENTADO: De 20 para 28 para afinar os cards
    paddingVertical: 10,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: '#1C1C1E',
  },
});