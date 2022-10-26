import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View, Text } from 'react-native';

import Home from './src/pages/Home/index.js';
import pergunta01 from './src/pages/pergunta01/index.js';
import pergunta02 from './src/pages/pergunta02/index.js';
import pergunta03 from './src/pages/pergunta03/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={pergunta01} />
        <Stack.Screen name="Quiz2" component={pergunta02} />
        <Stack.Screen name="Quiz3" component={pergunta03} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}