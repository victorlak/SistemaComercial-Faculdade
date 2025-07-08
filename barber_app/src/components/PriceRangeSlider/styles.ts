import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    // Garante que os números não "pulem" de largura ao mudar
    fontVariant: ['tabular-nums'],
  },
  sliderContainer: {
    height: 20,
    justifyContent: 'center',
    // Metade da largura do handle, para que ele não saia da tela
    marginHorizontal: 9,
  },
  fullTrack: {
    height: 4,
    backgroundColor: '#E2E8F0', // Cinza claro para a faixa completa
    borderRadius: 2,
    width: '100%',
  },
  activeTrack: {
    height: 4,
    backgroundColor: '#4A5568', // Cinza escuro para a faixa ativa
    borderRadius: 2,
    position: 'absolute',
  },
  handle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#4A5568',
    position: 'absolute',
    top: '50%',
    // Centraliza o handle perfeitamente na faixa
    transform: [{ translateY: -9 }, { translateX: -9 }],
  },
});
