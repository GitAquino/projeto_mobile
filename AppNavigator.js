// Importações necessárias
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaDeLogin from './TelaDeLogin';
import TelaDeCadastro from './TelaDeCadastro';

// Criação de uma pilha de navegação
const Stack = createNativeStackNavigator();

// Componente funcional para renderizar a navegação
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaDeLogin} />
        <Stack.Screen name="Cadastro" component={TelaDeCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
