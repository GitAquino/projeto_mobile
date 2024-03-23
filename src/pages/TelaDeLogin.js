import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import backgroundImg from '../assets/fundo.jpg';
import Button from '../components/Button';
import Input from '../components/Input';
import StyleLogin from '../styles/StyleLogin';
import stylesComponents from '../components/Styles';

const TelaDeLogin = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const botaoRealizarLogin = () => {
    //lógica para autenticação
    console.log('Login realizado com sucesso!');
    navigation.navigate('TelaHome');
    Alert.alert('Login realizado com sucesso!', 'Redirecionando para tela inicial!');
  };

  const botaoCadastro = () => {
    navigation.navigate('Cadastro');
    console.log('Redirecionando para tela de cadastro!');
  };

  const botaoEsqueciSenha = () => {
    console.log('Esqueci minha senha');
  };

  return (
    <View style={StyleLogin.container}>
      <ImageBackground source={backgroundImg} style={StyleLogin.background}>
        <View style={StyleLogin.overlay}>
          <View style={StyleLogin.loginContainer}>
            <Icon name="user-circle" size={105} style={stylesComponents.iconUser} />
            <View style={StyleLogin.form}>
              <View style={stylesComponents.inputContainer}>
                <Icon name="envelope" size={17} style={[stylesComponents.icon, stylesComponents.iconEnvelope]} />
                <Input
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                  keyboardType="email-address"
                />
              </View>
              <View style={stylesComponents.inputContainer}>
                <Icon name="lock" size={23} style={[stylesComponents.icon, stylesComponents.iconSenha]} />
                <Input
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="Senha"
                  secureTextEntry
                  placeholderTextColor="#777"
                />
              </View>
              <Button title="Entrar" onPress={botaoRealizarLogin} />
              <TouchableOpacity onPress={botaoEsqueciSenha}>
                <Text style={stylesComponents.buttonEsqueciSenha}>Esqueci a senha</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={botaoCadastro}>
                <Text style={stylesComponents.buttonCadastro}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TelaDeLogin;
