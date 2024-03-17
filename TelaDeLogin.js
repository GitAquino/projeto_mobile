// Importações necessárias do React e React Native
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Componente funcional da tela de login
const TelaDeLogin = ({navigation}) => {
  // Estados para armazenar os valores dos campos de email e senha, e o status de login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função para lidar com o envio do formulário
  const handleSubmit = () => {
    // Simulação de autenticação bem-sucedida (substitua por lógica real de autenticação)
    // Neste exemplo, apenas definimos isLoggedIn como true
    setIsLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        {isLoggedIn && (
          <Text style={styles.successMessage}>Logado com sucesso!</Text>
        )}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.register}>Cadastre-se</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos CSS para a tela de login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    textAlign: 'center',
    color: '#007bff',
  },
  register: {
    marginTop: 10,
    textAlign: 'center',
    color: '#007bff',
  },
  successMessage: {
    marginTop: 10,
    textAlign: 'center',
    color: 'green',
  },
});

export default TelaDeLogin;
