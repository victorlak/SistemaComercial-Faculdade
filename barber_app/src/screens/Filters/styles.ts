import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 8,
  },
  inputWrapper: {
    marginTop: 8,
    marginBottom: 24,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  sliderWrapper: {
    marginVertical: 24,
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  priceRangeText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 24,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
