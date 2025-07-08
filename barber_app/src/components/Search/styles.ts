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
    borderRadius: 26, 
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF', // Cor padrão
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Adicione este novo estilo para o botão ativo
  filterButtonActive: {
    backgroundColor: '#E0E0E0', // Cor cinza para quando o filtro estiver ativo
    borderColor: '#D1D1D6', // Borda um pouco mais escura para combinar
  },
  filterIconImage: {
    width: 24,
    height: 24,
  },
});
