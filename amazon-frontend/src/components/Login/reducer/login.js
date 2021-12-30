const initialState = {
  isLoggedIn: localStorage.getItem('token') !== null,
  name: localStorage.getItem('name') || '',
};
const LoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', payload.token);
      localStorage.setItem('name', payload.name);
      return { ...state, isLoggedIn: true, name: payload.name };
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
export default LoginReducer;
