import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactNode} from 'react';
import {LoginScreen} from '../screens/LoginScreen';

interface LoginStackProps {
  children: ReactNode;
}

const Stack = createStackNavigator();
const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LoginStack;
