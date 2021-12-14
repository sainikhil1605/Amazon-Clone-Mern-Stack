import { MuiThemeProvider } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Orders from './components/Orders';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import { CartProvider } from './Context/Cart/Provider';
import { LoginProvider } from './Context/Login/Provider';
import muitheme from './themes';

function App() {
  const location = useLocation();
  useEffect(() => {}, []);
  const pathArray = ['/', '/checkout', '/orders'];
  return (
    <MuiThemeProvider theme={muitheme}>
      <ErrorBoundary>
        <LoginProvider>
          <CartProvider>
            {pathArray.indexOf(location.pathname) !== -1 ? <NavBar /> : null}

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
            </Switch>
          </CartProvider>
        </LoginProvider>
      </ErrorBoundary>
    </MuiThemeProvider>
  );
}

export default App;
