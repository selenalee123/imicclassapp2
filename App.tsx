// import 'react-native-gesture-handler';
// import React, {
//   useCallback,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
// } from 'react';
// import {
//   Alert,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   useColorScheme,
//   Switch,
// } from 'react-native';
// // import { Provider as PaperProvider } from 'react-native-paper'
// import MyButton, { MyButton2 } from './components/Button';
// import TextField from './components/TextField';

// // import ThemeManager, { useTheme } from './src/themes';
// import {ThemeProvider} from './src/themes/ThemeProvider';
// import {
//   NavigationContainer,
//   DefaultTheme,
//   // DarkTheme,
//   // useTheme,
// } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const HomeScreen: React.FC<Props> = ({ navigation }) => {
//   // const theme = useTheme();
//   return (
//     // <ThemeManager>
//       <MyButton
//         style={[styles.button, styles.facebook]}
//         buttonText="Detail Screen"
//         onPress={() => {
//           navigation.navigate('DetailsScreen');
//         }}
//         textStyle={styles.highlight}
//       />
//     // </ThemeManager>
//   );
// };

// const DetailsScreen = ({ navigation }) => {
//   return (
//     // eslint-disable-next-line react-native/no-inline-styles
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// };

// const RandomScreen = ({ navigation }) => {

//   function changecolor(params:type) {

//   }
//   // const { colors } = useTheme();
//   return (
//     <ThemeProvider>
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Hello Navigation</Text>
//       <TouchableOpacity
//       onPress={() => {changecolor}}>
//         <Text>Button!</Text>
//       </TouchableOpacity>
//     </View>
//     </ThemeProvider>
//   );
// };

// import { StackScreenProps } from '@react-navigation/stack';
// import { Auth, AuthUserContext, AuthUserProvider } from './contexts/AuthUserProvider';

// type HomeProps = {
//   userId: string;
// };

// type RootStackParamList = {
//   Login: undefined;
//   Home: HomeProps | undefined;
//   DetailsScreen: { sort: 'latest' | 'top' } | undefined;
// };

// type Props = StackScreenProps<RootStackParamList, 'Login'>;
// const Stack = createStackNavigator();

// const LoginScreen: React.FC<Props> = ({ navigation }) => {
//   const auth = useContext<Auth>(AuthUserContext);
//   const [userName, setUserName] = useState<string>();
//   const [passWord, setPassWord] = useState<string>();
//   const [errorUserName, setErrorUserName] = useState<string>();
//   const [errorPassWord, setErrorPassWord] = useState<string>();

//   useEffect(() => {
//     console.log('init render');
//     Alert.alert('Chao mung ban da den voi Yolo system');
//   }, []);

//   useEffect(() => {
//     if (userName && userName?.length > 0) {
//       setErrorUserName(undefined);
//     }
//   }, [userName]);

//   useEffect(() => {
//     if (passWord && passWord?.length > 0) {
//       setErrorPassWord(undefined);
//     }
//   }, [passWord]);

//   const isValidLogin = useMemo<boolean>(() => {
//     if (userName && userName?.length > 0 && passWord && passWord?.length > 0) {
//       return true;
//     }
//     return false;
//   }, [userName, passWord]);

//   const loginButtonStyle = useMemo(
//     () => ({ backgroundColor: isValidLogin ? 'red' : 'gray' }),
//     [isValidLogin],
//   );

//   const loginClick = useCallback(() => {
//     Alert.alert(
//       `Xin chao ban ${userName} da dang nhap thanh cong vao Yolo system`,
//     );
//     auth?.setAuth?.(true);
//   }, [userName, auth]);

//   const validatePassWord = useCallback(() => {
//     if (!passWord || passWord?.length <= 0) {
//       setErrorPassWord('Ban phai nhap mat khau');
//     } else {
//       setErrorPassWord(undefined);
//     }
//   }, [passWord]);

//   const validateUserName = useCallback(() => {
//     if (!userName || userName?.length <= 0) {
//       setErrorUserName('Ban phai nhap ten dang nhap');
//     } else {
//       setErrorUserName(undefined);
//     }
//   }, [userName]);

//   console.log('render');
//   return (
//     <SafeAreaView>
//       <ScrollView
//         keyboardDismissMode="on-drag"
//         contentContainerStyle={styles.root}>
//         <View style={styles.basicLogin}>
//           <Text style={styles.loginText}>Yolo System</Text>
//           <TextField
//             placeholder="Tên đăng nhập"
//             value={userName}
//             onChangeText={setUserName}
//             style={[styles.textInput, styles.userName]}
//             error={errorUserName}
//             onBlur={validateUserName}
//           />
//           <TextField
//             placeholder="Mật khẩu"
//             value={passWord}
//             onChangeText={setPassWord}
//             style={[styles.textInput, styles.passWord]}
//             error={errorPassWord}
//             onBlur={validatePassWord}
//             secureTextEntry
//           />
//           <MyButton
//             style={[styles.button, styles.loginButton, loginButtonStyle]}
//             buttonText="Login"
//             onPress={isValidLogin ? loginClick : undefined}
//             textStyle={styles.highlight}
//           />
//           <Text style={styles.loginText}>Or</Text>
//           {/* <MyButton
//             style={[styles.button, styles.facebook]}
//             buttonText="Facebook"
//             onPress={() => {
//               Alert.alert('Pressed Facebook');
//             }}
//             textStyle={styles.highlight}
//           />
//           <MyButton2
//             style={{...styles.button, ...styles.google}}
//             buttonText="Google"
//             onPress={() => {
//               Alert.alert('Pressed Google');
//             }}R
//             textStyle={styles.highlight}
//           /> */}
//           <MyButton2
//             style={{ ...styles.button, ...styles.google }}
//             buttonText="GO to screen"
//             onPress={() => navigation.navigate('RandomScreen')}
//             textStyle={styles.highlight}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//   },
//   highlight: {
//     fontWeight: '700',
//     textAlign: 'center',
//     color: 'black',
//   },
//   loginText: {
//     fontWeight: '700',
//     fontSize: 50,
//     color: 'green',
//     fontFamily: 'Arial',
//     width: '100%',
//     textAlign: 'center',
//   },
//   button: {
//     padding: 10,
//     marginHorizontal: 10,
//     borderRadius: 20,
//   },
//   facebook: {
//     marginTop: 10,
//     backgroundColor: 'green',
//   },
//   google: {
//     marginTop: 10,
//     backgroundColor: 'red',
//   },
//   loginButton: {
//     marginTop: 10,
//     backgroundColor: 'purple',
//   },
//   textInput: {
//     borderRadius: 10,
//     borderColor: 'gray',
//     borderWidth: 0.5,
//     padding: 10,
//     marginHorizontal: 10,
//   },
//   userName: {
//     marginTop: 10,
//   },
//   passWord: {
//     marginTop: 10,
//   },
//   basicLogin: {
//     borderRadius: 10,
//     borderColor: 'gray',
//     borderWidth: 0.5,
//     paddingVertical: 10,
//   },
// });

// const AppStack = () => {
//   const auth = useContext<Auth>(AuthUserContext);
//   const loginStack = useMemo(
//     () => (
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="RandomScreen" component={RandomScreen} />
//       </Stack.Navigator>
//     ),
//     [],
//   );
//   const homeStack = useMemo(
//     () => (
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         {/* <Stack.Screen name="DetailsScreen" component={DetailsScreen} /> */}
//       </Stack.Navigator>
//     ),
//     [],
//   );
//   return (
//     // <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
//     <NavigationContainer>
//     {auth.isAuth ? homeStack : loginStack}
//     </NavigationContainer>
//   );
// };

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     accent: 'yellow',
//   },
// };

// const App = () => {
// //   const Container = styled.View`
// //   flex: 1;
// //   /* add this */
// //   background: ${props => props.theme.backgroundAlt};
// //   align-items: center;
// //   justify-content: center;
// // `

// //   const Title = styled.Text`
// //   font-size: 24;
// //   /* add this */
// //   color: ${props => props.theme.text};
// // `
//   return (
//     <AuthUserProvider>
//       <AppStack />
//     </AuthUserProvider>
//   );
// };

// export default App;

import 'react-native-gesture-handler';
import React from 'react';
import {AuthUserProvider} from './contexts/AuthUserProvider';
import {ThemeProvider} from './contexts/ThemeProvider';
import {AppStack} from './stacks/RootNavigation';
import BottomTabNavigator from './stacks/BottomTabNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <AuthUserProvider>
        <AppStack />
      </AuthUserProvider>
    </ThemeProvider>
  );
};

export default App;


