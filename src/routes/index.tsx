import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Auth from '../screens/Auth';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
  </MainStack.Navigator>
);

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Auth" component={Auth} />
  </AuthStack.Navigator>
);
