import React, { useContext, useMemo } from 'react';
import { Text, View } from 'react-native';
import { MainStackScreenProps } from '../stacks/RootNavigation';
import MyButton, { styles } from '../components/Button';
import { ThemeContext } from '../contexts/ThemeProvider';

export const HomeScreen: React.FC<MainStackScreenProps<'Home'>> = ({
  navigation,
  route,
}) => {
  const themeContext = useContext(ThemeContext);
  const countContext = useContext(ThemeContext);

  const buttonBackgroundColor = useMemo(
    () => ({
      backgroundColor: countContext?.theme.buttonColor,
    }),
    [countContext],
  );

  const textColor = useMemo(
    () => ({
      color: countContext?.theme.textColor,
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
      <Text style={textColor}>Home Screen</Text>
      {route?.params && (
        <Text style={textColor}>
          With received params : {route?.params?.userId}
        </Text>
      )}
      <MyButton
        style={[styles.button, buttonBackgroundColor]}
        textStyle={textColor}
        buttonText="Detail Screen"
        onPress={() => {
          navigation.navigate('DetailsScreen', {
            id: Math.floor(Math.random() * 100),
          });
        }}
      />

      <MyButton
        style={[styles.button, buttonBackgroundColor]}
        textStyle={textColor}
        buttonText="Change Theme"
        onPress={() => {
          themeContext?.setTheme?.({
            textColor: 'blue',
            buttonColor: 'white',
            primaryColor: 'green',
          });
        }}
      />

      <MyButton
        style={[styles.button, buttonBackgroundColor]}
        textStyle={textColor}
        buttonText="Reset"
        onPress={() => {
          themeContext?.setTheme?.({
            buttonColor: 'green',
            primaryColor: 'pink',
            textColor: '#fff',
          });
        }}
      />
    </View>
  );
};
