import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 16,
  },
  profileContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#1a1a77',
    borderRadius: 20,
    padding: 6,
  },
  name: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  role: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});

export default styles;
