import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 52,
    // Deixando o campo de busca mais arredondado, como na imagem
    borderRadius: 26, 
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0', // Um cinza um pouco mais visível para a borda
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#1C1C1E',
  },
  filterButton: {
    marginLeft: 12,
    height: 52,
    width: 52,
    // Estilo para criar o botão circular com borda
    borderRadius: 26, // Metade da altura/largura para um círculo perfeito
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    // Para centralizar o ícone dentro do círculo
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIconImage: {
    width: 24,
    height: 24,
  },
});