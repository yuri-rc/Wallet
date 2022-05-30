import {
  ADD_CURRENCIES,
  ADD_EXPENSE,
  REMOVE_ITEM,
} from '../actions';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        expenses: state.expenses.filter((q) => q.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
