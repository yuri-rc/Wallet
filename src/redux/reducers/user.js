import { LOGIN_USER } from '../actions';

const INITIAL_STATE = {
  name: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default reducer;
