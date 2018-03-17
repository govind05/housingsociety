import * as actions from './actionTypes';

export const authSuccess = (token, userId) => {
  return{
    type: actions.AUTH_SUCCESS,
    token,
    userId
  }
}

export const authLogout = () => {
  return{
    type: actions.AUTH_LOGOUT
  }
}