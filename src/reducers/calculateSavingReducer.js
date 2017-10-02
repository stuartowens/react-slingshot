import { CALCULATE_SAVINGS } from '../constants/actionTypes.js';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function calculateSavingsReducer(state = initialState.currentSavings, action) {
  let newState;
  switch(action.type) {
    case CALCULATE_SAVINGS:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.currentSavings = newState;

    return newState;
  }
}
