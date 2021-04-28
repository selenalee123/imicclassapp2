import React from 'react';
import { View, TextInput, Text, TextInputProps, StyleSheet } from 'react-native';

export type Props = TextInputProps & {
  error?: string;
};
const TextField: React.FC<Props> = ({ error, ...rest }) => (
  <View>
    <TextInput {...rest} />
    {error ? <Text style={styles.error}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginHorizontal: 10,
  },
});

export default TextField;
