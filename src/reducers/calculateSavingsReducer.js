import { CALCULATE_SAVINGS } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function calculateSavingsReducer(state = initialState.fuelSavings, action) {
  let newState;
  switch(action.type) {
    case CALCULATE_SAVINGS:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;

    return newState;
    
    default:
      return state;
  }
}
