export const LOGIN_USER = 'LOGIN_USER';

export const addUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const CODE_SELECTIORS = 'CODE_SELECTIORS';

export const requestCodeSelectiors = (payload) => ({
  type: CODE_SELECTIORS,
  payload,
});

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeItem = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});
