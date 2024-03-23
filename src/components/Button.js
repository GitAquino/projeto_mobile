import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import stylesComponents from './Styles';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={stylesComponents.button} onPress={onPress}>
      <Text style={stylesComponents.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
