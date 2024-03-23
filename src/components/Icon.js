// Icon.js
import React from 'react';
import { View } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import stylesComponents from './Styles';

const Icon = ({ name, size, style }) => {
  return (
    <View>
      <IconFontAwesome name={name} size={size} style={[stylesComponents.icon, style]} />
    </View>
  );
};

export default Icon;
