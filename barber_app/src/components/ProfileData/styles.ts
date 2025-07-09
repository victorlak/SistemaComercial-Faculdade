import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    marginVertical: 20,
    color: '#1C1C1E',
  },
  editButton: {
        backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1a1a77',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  editText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#1a1a77',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  item: {
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: 14,
    color: '#222',
  },
  link: {
    color: '#1a1a77',
    textDecorationLine: 'underline',
  },
});

export default styles;
