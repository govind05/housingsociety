import * as actions from './actionTypes';

// On Login Successful
export const authSuccess = (token, userId) => {
  return{
    type: actions.AUTH_SUCCESS,
    token,
    userId
  }
}

//For logout 
export const authLogout = () => {
  return{
    type: actions.AUTH_LOGOUT
  }
}