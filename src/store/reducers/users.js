import * as actions from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  token: null,
  userId: null,
}

// To Change the Store for successful login.
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    userId: action.userId
  })
}
// To Change the Store for successful logout.
const authLogut = (state, action) => {
  return updateObject(state, {
    token: null,
    userId: null
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_SUCCESS: return authSuccess(state, action);
    case actions.AUTH_LOGOUT: return authLogut(state, action);
    default: return state;
  }
}

export default reducer;