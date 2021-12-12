const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('name', action.payload.name);
      return { ...state, isLoggedIn: true, name: action.payload.name };
    case 'LOGIN_FAILURE':
      return { ...state, isLoggedIn: false, name: null };
    case 'LOGOUT':
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      localStorage.removeItem('cart');
      return { ...state, isLoggedIn: false, name: null };
    default:
      return state;
  }
};
export default Reducer;
