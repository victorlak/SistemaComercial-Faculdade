import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  deletedButton: {
   backgroundColor: 'transparent',
    borderColor: 'red',
    width: 'fit-content',
    borderRadius: 5,
    height: 30,
    borderWidth: 1,
    padding: 10, 
  },
  editButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    width: 'fit-content',
    height: 30,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10, 
  },
  textEditButton: {
    color: 'blue',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  textDeleteButton: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },

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
    borderTopColor: '#ddd',
    justifyContent: 'flex-start',
    gap: 10,
    borderTopWidth: 1,
    paddingTop: 10,
    marginTop: 10,
  }

});