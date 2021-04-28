import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthUserContext} from '../contexts/AuthUserProvider';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';
import LoginStack from './LoginStack';
import MainStack from './MainStack';
import BottomTabNavigator from './BottomTabNavigator';


type HomeProps = {
  userId: number;
};
type DetailsProps = {
  id: number;
};
type RootStackParamList = {
  Login: undefined;
  Home: HomeProps | undefined;
  DetailsScreen: DetailsProps | undefined;
  SettingsScreen: undefined;
  NotificationScreen: undefined;


};

type S = keyof RootStackParamList;
export type MainStackScreenProps<RouteName extends S> = StackScreenProps<
  RootStackParamList,
  RouteName
>;

export const AppStack = () => {
  const auth = useContext(AuthUserContext);
  return (
    <NavigationContainer>
      {auth.isAuth ? <MainStack /> : <LoginStack />}

    </NavigationContainer>
  );
};
