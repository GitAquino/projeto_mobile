import React from 'react';
import { View, Text, Button } from 'react-native';

const TelaHome = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Home</Text>
      <Button
        title="Abrir Drawer"
        onPress={() => navigation && navigation.openDrawer()}
      />
    </View>
  );
};

export default TelaHome;
