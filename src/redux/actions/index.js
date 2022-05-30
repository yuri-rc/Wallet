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

export const ADD_CURRENCIES = 'ADD_CURRENCIES';

export const addCurrencies = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const removeItem = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});

export const fetchAPI = () => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const request = await fetch(URL);
  const requestJson = await request.json();
  dispatch(addCurrencies(requestJson));
};
