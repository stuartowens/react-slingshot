import { combineReducers } from 'redux';
import calculateSavingsReducer from './calculateSavingsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  calculateSavingsReducer,
  routing: routerReducer
});

export default rootReducer;
