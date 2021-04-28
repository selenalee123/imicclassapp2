import React, {useContext, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import MyButton, {styles} from '../components/Button';
import {ThemeContext} from '../contexts/ThemeProvider';
import {CountContext} from '../contexts/CountProvider';

import {MainStackScreenProps} from '../stacks/RootNavigation';

export const DetailsScreen: React.FC<MainStackScreenProps<'DetailsScreen'>> = ({
  navigation,
  route,
}) => {
  const themeContext = useContext(ThemeContext);
  const countContext = useContext(CountContext);
  const [count, setCount] = useState('0');

  const buttonBackgroundColor = useMemo(
    () => ({
      backgroundColor: themeContext?.theme.buttonColor,
    }),
    [themeContext],
  );

  const textColor = useMemo(
    () => ({
      color: themeContext?.theme.textColor,
    }),
    [themeContext],
  );

  const increase = useMemo(
    () => ({
      count: setCount(count + 1),
    }),
    [countContext],
  );
  const decrease = useMemo(
    () => ({
      count: setCount(count - 1),
    }),
    [countContext],
  );

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeContext?.theme?.primaryColor,
      }}>
      <Text style={textColor}>
        Details Screen with params: {route?.params?.id}
      </Text>
      <MyButton
        buttonText="Go other detail screen"
        onPress={() => {
          navigation.push('DetailsScreen', {
            id: Math.floor(Math.random() * 100),
          });
        }}
      />
      <MyButton
        style={[styles.button, buttonBackgroundColor]}
        textStyle={textColor}
        buttonText="Go Back Home screen with put back param"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: {userId: Math.floor(Math.random() * 100)},
          });
        }}
      />
      <MyButton
        style={[styles.button, buttonBackgroundColor]}
        textStyle={textColor}
        buttonText="Go Back Top screen"
        onPress={() => {
          navigation.popToTop();
        }}
      />

      <MyButton
        style={[styles.button, buttonBackgroundColor]}
        textStyle={textColor}
        buttonText="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <MyButton
        style={[styles.button, buttonBackgroundColor]}
        textStyle={textColor}
        buttonText="SettingsScreen"
        onPress={() => {
          navigation.navigate('Settings', {
            id: Math.floor(Math.random() * 100),
          });
        }}
      />
      <View>
        <Text>{count}</Text>
        <MyButton
          style={[styles.button, buttonBackgroundColor]}
          textStyle={textColor}
          buttonText="Increase"
          onPress={() => setCount(count + 1)}
        />
        <MyButton
          style={[styles.button, buttonBackgroundColor]}
          textStyle={textColor}
          buttonText="Decrease"
          onPress={() => setCount(count - 1)}
        />
        <MyButton
          style={[styles.button, buttonBackgroundColor]}
          textStyle={textColor}
          buttonText="Reset"
          onPress={() => setCount(0)}
        />
      </View>
    </View>
  );
};
