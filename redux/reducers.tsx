import {combineReducers} from 'redux';
// import moviesReducer from './movieSlice';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
//   movies: moviesReducer,
  counter: counterReducer,
});

export default rootReducer;
