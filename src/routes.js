import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import Home from './pages/Home'
import Talk from './pages/Talk'

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Talk" component={Talk} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}