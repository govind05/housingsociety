export const updateObject = (oldState, updatedProperties) => {
  return {
    ...oldState,
    ...updatedProperties
  }
}

export const logoutHandler = (onLogout, toLoginPage) => {
  localStorage.removeItem('token');
  onLogout();
  toLoginPage('/');
}