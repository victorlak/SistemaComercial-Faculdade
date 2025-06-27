import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF'
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 2
  },
  activeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF'
  },
  inactiveText: {
    fontSize: 16,
    color: '#999'
  }
});

export default styles;