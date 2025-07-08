import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 20, 
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
  },

  containerSelected: {
    backgroundColor: '#1C1C1E', 
    borderColor: '#1C1C1E',
  },
  iconWrapper: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1C1C1E',
  },
  labelSelected: {
    color: '#FFFFFF',
  },
});