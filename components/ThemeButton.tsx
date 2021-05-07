import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useThemeStyle from '../hooks/useThemeStyle';
import MyButton, { Props, styles } from './Button'


export const ThemeButton: React.FC<Props> = props => {
    const theme = useThemeStyle();
    return (
        <MyButton
            style={[styles.button, theme.buttonBackgroundColor]}
            textStyle={theme.textColor}
            {...props}
        />
    )
}


export default ThemeButton;