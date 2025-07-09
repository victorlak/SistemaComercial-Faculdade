import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  title: {
    fontSize: 40,
    marginTop: 171,
    fontFamily: "Poppins-Regular",
  },
  button: {
    marginTop: '10%'
  },
  buttonEntrar: {
    width: 332,
    height: 41,
  },
  inputContainer: {
    width: '80%',
    marginTop: 20
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: "Poppins-Regular"
  },
  forgotPasswordLink: {
    marginTop: 10,
    alignItems: 'flex-end'
  },
  forgotPasswordText: {
    color: '#007AFF',
    fontSize: 14,
    textDecorationLine: 'underline'
  },
  recuperacaoText: {
    color: '#2ecc71',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5
  },
  errorText: {
    color: '#ca2c17',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5
  }
});

export default styles;