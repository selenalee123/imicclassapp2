import React, { useState } from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import TextField from '../components/TextField'
import ThemeButton from '../components/ThemeButton'
import useThemeStyle from '../hooks/useThemeStyle'
import { RootState, useTypedDispatch } from '../redux/store'
import {
    selectValue,
    addTwoNumberAsync,
    subtractTwoNumberAsync,
    divideTwoNumberAsync,
    multiplyTwoNumberAsync
} from '../redux/calculatorSlice'
interface Props {

}

export const NotificationScreen = () => {
    const dispatch = useTypedDispatch()
    const count = useSelector(selectValue)
    const [a, setA] = useState('')
    const [b, setB] = useState('')
const theme = useThemeStyle();
    const { isLoading } = useSelector((state: RootState) => state.calculator)
    return (
        <View>
            <Text style={theme.textColor}>Calculation</Text>
            <Text style={theme.textColor}> Value:{count}</Text>
            {isLoading && <ActivityIndicator color="red" />}
            <View style={styles.inputContainer}>
                <TextField
                    style={styles.textInput}
                    value={a}
                    onChangeText={setA}
                    keyboardType="numeric"
                />
                <TextField
                    style={styles.textInput}
                    value={b}
                    onChangeText={setB}
                    keyboardType="numeric"
                />
            </View>
            <ThemeButton
                disable={isLoading}
                buttonText="Add"
            onPress={() => dispatch(addTwoNumberAsync(a,b))}
            />
            <ThemeButton
                disable={isLoading}
                buttonText="Substract"
                onPress={() => dispatch(subtractTwoNumberAsync(a,b))}

            />
            <ThemeButton
                disable={isLoading}
                buttonText="Multiply"
                onPress={() => dispatch(multiplyTwoNumberAsync(a,b))}

            />
            <ThemeButton
                disable={isLoading}
                buttonText="Divide"
                onPress={() => dispatch(divideTwoNumberAsync(a,b))}

            />

        </View>
    )
}


const styles = StyleSheet.create({})
