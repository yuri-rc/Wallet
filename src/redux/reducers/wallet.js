import {
  ADD_CURRENCIES,
  ADD_EXPENSE,
  REMOVE_ITEM,
  QUICK_ACCESS,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [
    { value: 13.30, description: 'Supermercado' },
    { value: 20.50, description: 'Supermercado' },
    { value: 100.45, description: 'Supermercado' },
  ],
  quickAccess: [],
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
    case QUICK_ACCESS:
      return {
        ...state,
        quickAccess: action.payload,
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
