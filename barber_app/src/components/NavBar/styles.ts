import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // O container principal do rodapé
  container: {
    position: 'absolute', // Fixa na tela
    bottom: 0,            // Alinhado na parte inferior
    left: 0,
    right: 0,
    height: 70, // Altura fixa para o rodapé
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Centraliza os itens verticalmente
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',

    // Sombra para Android
    elevation: 8,
    
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  // Cada item clicável da navegação
  navItem: {
    flex: 1,
    height: '100%', // Ocupa toda a altura do container
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o ícone e o texto
  },
  
  // Estilo APLICADO QUANDO O ITEM ESTÁ ATIVO
  active: {
    // Adiciona uma borda inferior para indicar o item ativo
    borderBottomWidth: 3,
    borderBottomColor: '#007AFF',
  },
  
  // Estilo do ícone
  icon: {
    width: 28,
    height: 28,
    marginBottom: 2,
  },
  
  // Estilo do texto quando o item está ATIVO
  activeText: {
    fontSize: 12, // Um pouco menor para caber melhor
    color: '#007AFF',
    fontWeight: '600',
  },
  
  // Estilo do texto quando o item está INATIVO
  inactiveText: {
    fontSize: 12,
    color: '#999',
  },
});

export default styles;