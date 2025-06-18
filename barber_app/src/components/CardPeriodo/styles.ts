import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'relative',
  },
  periodSelector: {
    marginBottom: 2,
  },
  periodSelectorInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  periodText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#333',
  },
  arrowIconExpanded: {
    transform: [{ rotate: '180deg' }],
  },
  commissionContent: {
    alignItems: 'flex-start',
  },
  commissionLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#8A8A8E',
    marginBottom: 0,
  },
  commissionValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#1C1C1E',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 6,
    zIndex: 1000,
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12.0,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  checkmark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    width: 13,
    color: '#333',
  },
  optionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#333',
  },
});