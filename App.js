

import  React from 'react';
import { NavigationContainer, HeaderBackButton } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Todo from './Todo';
import Timer from './Timer';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Todo'  screenOptions={{cardStyle: {transparentCard: true },}} > 
      <Stack.Screen name="Todo" component={Todo} options={{headerShown:false}}/>
      <Stack.Screen name="Timer" component={Timer} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


