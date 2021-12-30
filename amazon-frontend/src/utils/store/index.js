import { combineReducers, createStore } from 'redux';
import CartReducer from '../../components/Checkout/reducer/cart';
import SearchReducer from '../../components/Home/reducer/search';
import LoginReducer from '../../components/Login/reducer/login';

const rootReducer = combineReducers({
  cart: CartReducer,
  login: LoginReducer,
  search: SearchReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
