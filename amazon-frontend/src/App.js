import { MuiThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Checkout from './components/Checkout';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Orders from './components/Orders';
import PrivateRoute from './components/PrivateRoute';
import ProductDetails from './components/ProductDetails';
import SignUp from './components/SignUp';
import muitheme from './themes';
import store from './utils/store';

function App() {
  const location = useLocation();
  useEffect(() => {}, []);
  const pathArray = ['/signUp', '/login'];
  return (
    <MuiThemeProvider theme={muitheme}>
      <Provider store={store}>
        {pathArray.indexOf(location.pathname) === -1 ? <NavBar /> : null}
        <ErrorBoundary>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            draggable
            style={{ width: '50%' }}
            limit={2}
          />
          <Switch>
            <Route exact path="/signUp">
              <SignUp />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute exact path="/orders">
              <Orders />
            </PrivateRoute>
            <Route exact path="/product/:id">
              <ProductDetails />
            </Route>
          </Switch>
        </ErrorBoundary>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
