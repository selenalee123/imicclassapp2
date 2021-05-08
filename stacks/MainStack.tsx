
import {createStackNavigator} from '@react-navigation/stack';
import React, {ReactNode} from 'react';
import {DetailsScreen} from '../screens/DetailsScreen';
import {HomeScreen} from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BottomTabNavigator from './BottomTabNavigator'
// import {NavigationContainer} from '@react-navigation/native';

interface LoginStackProps {
  children: ReactNode;
}




const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator">
       <Stack.Screen name="Notification" component={BottomTabNavigator} />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

      {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
};
export default MainStack;



