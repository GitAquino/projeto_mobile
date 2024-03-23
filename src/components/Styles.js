import { StyleSheet } from 'react-native';

const stylesComponents = StyleSheet.create({

  // CSS DOS INPUTS //
  input: {
    backgroundColor: 'rgba(255,255,255,0)',
    padding: 8,
    marginBottom: 2,
    marginLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '90%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  // CSS DOS BOTÕES //

  button: {
    backgroundColor: '#007bff',
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonEsqueciSenha: {
    marginTop: 25,
    textAlign: 'center',
    color: '#007bff',
  },
  buttonCadastro: {
    marginTop: 5,
    textAlign: 'center',
    color: '#007bff',
  },

// CSS DOS ICONS //

  icon: {
    marginBottom: 0,
  },
  iconEnvelope: {
    marginRight: 10,
  },
  iconSenha: {
    marginRight: 10,
  },
  iconUser: {
    marginTop: 20,
    marginLeft: 82,
    marginBottom: 35,
  },
});

export default stylesComponents;
