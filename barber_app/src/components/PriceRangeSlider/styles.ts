import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
    fontVariant: ['tabular-nums'],
  },
  sliderContainer: {
    height: 20,
    justifyContent: 'center',
    marginHorizontal: 9,
  },
  fullTrack: {
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    width: '100%',
  },
  activeTrack: {
    height: 4,
    backgroundColor: '#000',
    borderRadius: 2,
    position: 'absolute',
  },
  handle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#000',
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -9 }, { translateX: -9 }],
  },
});
