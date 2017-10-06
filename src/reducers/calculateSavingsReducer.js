import { CALCULATE_SAVINGS } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import savingsCalculator from '../utils/savingsCalculator'

export default function calculateSavingsReducer(state = initialState.expenses, action) {
  let newState;
  switch(action.type) {
    case CALCULATE_SAVINGS:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.dailyExpense = savingsCalculator().calculateDailyExpenses(newState)
      newState.weeklyExpenses = savingsCalculator().calculateWeeklyExpenses(newState.dailyExpense)

    return newState;

    default:
      return state;
  }
}
