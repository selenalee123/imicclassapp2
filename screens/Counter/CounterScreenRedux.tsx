import React from 'react'
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import ThemeButton from '../../components/ThemeButton'
import useThemeStyle from '../../hooks/useThemeStyle'
import {
    decrement,
    increment,
    incrementAsync,
    incrementByAmount,
    reset,
    selectCount,
} from '../../redux/counterSlice';
import { RootState, useTypeDispatch } from '../../redux/store';


interface CounterScreenReduxProps {

}

export const CounterScreenRedux: React.FunctionComponent<CounterScreenReduxProps> = (props) => {
    const dispatch = useTypeDispatch();
    const count = useSelector(selectCount);
    const { isLoading } = useSelector((state: RootState) => state.counter);
    const theme = useThemeStyle();

    return (
        <View style={theme.backgroundStyle}>
          <Text style={theme.textColor}>Counter Screen</Text>
          <Text style={theme.textColor}>{count}</Text>
          <ThemeButton
            buttonText="Increment"
            onPress={() => dispatch(increment())}
          />
          <ThemeButton
            buttonText="Decrement"
            onPress={() => dispatch(decrement())}
          />
          <ThemeButton
            buttonText="IncrementByAmount"
            onPress={() => dispatch(incrementByAmount(10))}
          />
          <ThemeButton
            buttonText={
              isLoading ? 'IncrementByAmountAsync...' : 'IncrementByAmountAsync'
            }
            onPress={() => !isLoading && dispatch(incrementAsync(10))}
          />
          <ThemeButton buttonText="Reset" onPress={() => dispatch(reset())} />
        </View>
      );
    };

export default CounterScreenRedux


