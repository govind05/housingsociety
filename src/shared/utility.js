// To update the object and main immutability.
export const updateObject = (oldState, updatedProperties) => {
  return {
    ...oldState,
    ...updatedProperties
  }
}

//To handle logout and redirect to login page.
export const logoutHandler = (onLogout, toLoginPage) => {
  localStorage.removeItem('token');
  onLogout();
  toLoginPage('/');
}