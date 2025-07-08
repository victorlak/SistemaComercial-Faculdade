import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  itemColunaDireita: {
    alignItems: 'flex-end',
  },
  itemNomeServico: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  itemCliente: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
  },
  itemPreco: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#2E8B57',
    marginBottom: 4,
  },
  itemData: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
  },
  serviceItem: {
    width: '48%',
    marginBottom: 16,
  }
});