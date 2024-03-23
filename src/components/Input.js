import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import stylesComponents from './Styles';

const Input = ({ value, onChangeText, placeholder, secureTextEntry = false, keyboardType = 'default' }) => {
  return (
    <TextInput
      style={stylesComponents.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

export default Input;
