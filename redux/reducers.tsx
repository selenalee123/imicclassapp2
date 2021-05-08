import { combineReducers } from 'redux';
import moviesReducer from './movieSlice';
import counterReducer from './counterSlice';
import calculatorReducer from './calculatorSlice';

const rootReducer = combineReducers({
    movies: moviesReducer,
  counter: counterReducer,
  calculator: calculatorReducer,

});

export default rootReducer;
