// TelaDeCadastro.js
import React, { useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import backgroundImg from '../assets/fundo.jpg';
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from '../components/Icon';
import StyleCadastro from '../styles/StyleCadastro';
import stylesComponents from '../components/Styles';

const TelaDeCadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const realizarCadastro = () => {
    if (senha === confirmarSenha) {
      console.log('Cadastro criado com sucesso!');
      navigation.navigate('Login');
    } else {
      console.log('As senhas não coincidem.');
    }
  };

  return (
    <View style={StyleCadastro.container}>
      <ImageBackground source={backgroundImg} style={StyleCadastro.background}>
        <View style={StyleCadastro.overlay}>
          <View style={StyleCadastro.loginContainer}>
            <Icon name="user-circle" size={105} style={stylesComponents.iconUser} />
            <View style={StyleCadastro.form}>
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
                />
              </View>
              <View style={stylesComponents.inputContainer}>
                <Icon name="lock" size={23} style={[stylesComponents.icon, stylesComponents.iconSenha]} />
                <Input
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                  placeholder="Confirmar Senha"
                  secureTextEntry
                />
              </View>
              <Button title="Cadastrar" onPress={realizarCadastro} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TelaDeCadastro;
