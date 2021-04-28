import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export type Props = {
  style?: ViewStyle | ViewStyle[];
  buttonText: string;
  textStyle?: TextStyle;
  onPress?: () => void;
};

const MyButton: React.FC<Props> = ({
  style = styles.button,
  buttonText = '??',
  textStyle = styles.highlight,
  onPress,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  highlight: {
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
});

export default MyButton;

export {MyButton as MyButton2};
