import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';

interface CalculateState {
    value: number,
    isLoading: boolean;
}

interface CalculatorPayload {
    a: number;
    b: number;
}

const initialState: CalculateState = {
    value: 0,
    isLoading: false,
}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        startCalculator: state => {
            state.isLoading = true;
        },
        addTwoNumber: (state, action: PayloadAction<CalculatorPayload>) => {

            state.value = Number(action.payload.a) + Number(action.payload.b);
            state.isLoading = false;

        },
        subtractTwoNumber: (state, action: PayloadAction<CalculatorPayload>) => {
            state.value = action.payload.a - action.payload.b;
            state.isLoading = false;
        },
        multiplyTwoNumber: (state, action: PayloadAction<CalculatorPayload>) => {
            state.value = action.payload.a * action.payload.b;
            state.isLoading = false;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        divideTwoNumber: (state, action: PayloadAction<CalculatorPayload>) => {
            state.value = action.payload.a / action.payload.b;
            state.isLoading = false;
        },
    },
});

export const {
    startCalculator,
    addTwoNumber,
    subtractTwoNumber,
    multiplyTwoNumber,
    divideTwoNumber,
} = calculatorSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const addTwoNumberAsync = (a: number, b: number): AppThunk => dispatch => {
    dispatch(startCalculator());
    setTimeout(() => {
        dispatch(addTwoNumber({ a, b }));
    }, 1000);
};
export const subtractTwoNumberAsync = (a: number, b: number): AppThunk => dispatch => {
    dispatch(startCalculator());
    setTimeout(() => {
        dispatch(subtractTwoNumber({ a, b }));
    }, 1000);
};
export const divideTwoNumberAsync = (a: number, b: number): AppThunk => dispatch => {
    dispatch(startCalculator());
    setTimeout(() => {
        dispatch(divideTwoNumber({ a, b }));
    }, 1000);
};
export const multiplyTwoNumberAsync = (a: number, b: number): AppThunk => dispatch => {
    dispatch(startCalculator());
    setTimeout(() => {
        dispatch(multiplyTwoNumber({ a, b }));
    }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectValue = (state: RootState) => state.calculator.value;

export default calculatorSlice.reducer;