import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Telas
import TelaDeLogin from '../pages/TelaDeLogin';
import TelaDeCadastro from '../pages/TelaDeCadastro';
import TelaHome from '../pages/TelaHome';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" /* Definindo qual tela será a inicial*/>
        <Stack.Screen
          name="Login"
          component={TelaDeLogin}
          options={{ headerShown: false }} //Removendo o cabeçalho do nome da pagina
        />
        <Stack.Screen
          name="Cadastro"
          component={TelaDeCadastro}
          options={{ headerShown: false }} //Removendo o cabeçalho do nome da pagina
        />
        <Stack.Screen
          name="TelaHome"
          component={TelaHome}
          options={{ headerShown: false }} //Removendo o cabeçalho do nome da pagina
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
