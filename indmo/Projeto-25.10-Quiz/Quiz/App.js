import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View, Text } from 'react-native';

import Home from './src/pages/Home/index.js';
import pergunta01 from './src/pages/pergunta01/index.js';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={pergunta01} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}