import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import NotificationScreen from '../screens/NotificationScreen';
// import SettingsScreen from '../screens/SettingsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppParamList } from './AppParamList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from './../screens/HomeScreen';
import { MovieScreenRanking } from './../screens/MovieScreenRanking';
import  {MoviePopular}  from './../screens/MoviePopular';
import  {NotificationScreen}  from './../screens/NotificationScreen';
import  {MovieScreenRedux}  from './../screens/MovieRedux/MovieScreenRedux';


import {CounterScreenRedux}from '../screens/Counter/CounterScreenRedux'






const Tab = createBottomTabNavigator<MainStackParamList>();
const styles = StyleSheet.create({
  tabBarIcon: {
    alignItems: 'stretch',
  },
});

const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: 'red',
  showLabel: true,
  style: styles.tabBarIcon,
};


export default function BottomTabNavigator() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'Notification') {
            iconName = focused
              ? 'notifications-outline'
              : 'notifications-outline';
          } else if (route.name === 'CounterScreenRedux') {
            iconName = focused ? 'settings-outline' : 'settings';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home'
          }else if (route.name === 'MoviePopular') {
            iconName = focused ? 'trending-up-outline' : 'trending-up-outline'
          }else if (route.name === 'MovieRanking') {
            iconName = focused ? 'flame-outline' : 'flame-outline'
          }

          <ion-icon name=""></ion-icon>
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CounterScreenRedux" component={CounterScreenRedux} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="MovieRanking" component={MovieScreenRanking} />
      <Tab.Screen name="MoviePopular" component={MoviePopular} />
      <Tab.Screen name="MovieScreenRedux" component={MovieScreenRedux} />




    </Tab.Navigator>
    // </NavigationContainer>
  );
}
