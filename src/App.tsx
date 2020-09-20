import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar />
    </NavigationContainer>
  );
};

export default App;
