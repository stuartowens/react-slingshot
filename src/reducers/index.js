import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import calculateSavingsReducer from './calculateSavingsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  calculateSavingsReducer,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
