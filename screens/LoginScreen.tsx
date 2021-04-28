import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MyButton, { MyButton2 } from '../components/Button';
import TextField from '../components/TextField';
import { AuthUserContext } from '../contexts/AuthUserProvider';

export const LoginScreen = () => {
  const auth = useContext(AuthUserContext);
  const [userName, setUserName] = useState<string>();
  const [passWord, setPassWord] = useState<string>();
  const [errorUserName, setErrorUserName] = useState<string>();
  const [errorPassWord, setErrorPassWord] = useState<string>();

  const isValidField = useCallback((value?: string) => {
    return value ? value?.length > 0 : false;
  }, []);

  useEffect(() => {
    console.log('init render');
    Alert.alert('Info', 'Chao mung ban da den voi Yolo system');
  }, []);

  useEffect(() => {
    if (isValidField(userName)) {
      setErrorUserName(undefined);
    }
  }, [isValidField, userName]);

  useEffect(() => {
    if (isValidField(passWord)) {
      setErrorPassWord(undefined);
    }
  }, [isValidField, passWord]);

  const validPassWord = useCallback(() => {
    if (!isValidField(passWord)) {
      setErrorPassWord('Ban phai nhap mat khau');
      return false;
    } else {
      setErrorPassWord(undefined);
      return true;
    }
  }, [passWord, isValidField]);

  const validUserName = useCallback(() => {
    if (!isValidField(userName)) {
      setErrorUserName('Ban phai nhap ten dang nhap');
      return false;
    } else {
      setErrorUserName(undefined);
      return true;
    }
  }, [userName, isValidField]);

  const isValidLogin = useMemo<boolean>(() => {
    return isValidField(userName) && isValidField(passWord);
  }, [isValidField, passWord, userName]);

  const loginButtonStyle = useMemo(
    () => ({ backgroundColor: isValidLogin ? 'red' : 'gray' }),
    [isValidLogin],
  );

  const loginClick = useCallback(() => {
    const isValidUserName = validUserName();
    const isValidPassword = validPassWord();
    if (isValidUserName && isValidPassword) {
      Alert.alert(
        'Success',
        `Xin chao ban ${userName} da dang nhap thanh cong vao Yolo system`,
        [
          // {
          //   text: 'No',
          //   onPress: () => console.log('No'),
          //   style: 'cancel',
          // },
          {
            text: 'OK',
            onPress: () => {
              console.log('OK');
              auth.setAuth?.(true);
            },
          },
        ],
        {
          cancelable: true,
        },
      );
    }
  }, [validUserName, validPassWord, userName, auth]);

  console.log('render');
  return (
    <SafeAreaView>
      <ScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.root}>
        <View style={styles.basicLogin}>
          <Text style={styles.loginText}>Yolo System</Text>
          <TextField
            placeholder="Tên đăng nhập"
            value={userName}
            onChangeText={setUserName}
            style={[styles.textInput, styles.userName]}
            error={errorUserName}
            onBlur={validUserName}
          />
          <TextField
            placeholder="Mật khẩu"
            value={passWord}
            onChangeText={setPassWord}
            style={[styles.textInput, styles.passWord]}
            error={errorPassWord}
            onBlur={validPassWord}
            secureTextEntry
          />
          <MyButton
            style={[styles.button, styles.loginButton, loginButtonStyle]}
            buttonText="Login"
            onPress={loginClick}
            textStyle={styles.highlight}
          />
          <Text style={styles.loginText}>Or</Text>
          <MyButton
            style={[styles.button, styles.facebook]}
            buttonText="Facebook"
            onPress={() => {
              Alert.alert('Pressed Facebook');
            }}
            textStyle={styles.highlight}
          />
          <MyButton2
            style={{ ...styles.button, ...styles.google }}
            buttonText="Google"
            onPress={() => {
              Alert.alert('Pressed Google');
            }}
            textStyle={styles.highlight}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  highlight: {
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
  loginText: {
    fontWeight: '700',
    fontSize: 50,
    color: 'green',
    fontFamily: 'Arial',
    width: '100%',
    textAlign: 'center',
  },
  button: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  facebook: {
    marginTop: 10,
    backgroundColor: 'green',
  },
  google: {
    marginTop: 10,
    backgroundColor: 'red',
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: 'purple',
  },
  textInput: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10,
    marginHorizontal: 10,
  },
  userName: {
    marginTop: 10,
  },
  passWord: {
    marginTop: 10,
  },
  basicLogin: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingVertical: 10,
  },
});
