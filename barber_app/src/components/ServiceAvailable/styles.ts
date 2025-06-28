import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  allComponent: {
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  col: {
    flex: 1, // Divide igualmente entre as colunas
    backgroundColor: '#ddd',
    padding: 10,

  },
  styleDescricao: {
    marginTop: 10
  },
  textoClaro: {
    color: 'grey',
    fontFamily: 'Poppins-Bold'
  },
  styleTempoComissao: {
    marginTop: 10,
  },
  styleTituloServico: {
    fontWeight: 'bold'
  },
  stylePreco:{
    fontWeight: 'bold',
    fontSize:18,
    color: '#4F4F4F'
  },
  styleButton:{
    marginTop:20
  }

});