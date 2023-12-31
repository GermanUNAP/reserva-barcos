import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from '../pages/principal';
//import Home from '../pages/Home';
import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';


import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function NavigationStack() {

  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='Home'
      >
        <Stack.Screen name="Principal" component={Principal}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

