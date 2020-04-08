/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const App = () => {


  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homescreen" component={HomeScreen}/>
        <Stack.Screen name="login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};
export default App;


