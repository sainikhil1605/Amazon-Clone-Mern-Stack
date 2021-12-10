import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Orders from './components/Orders';
import muitheme from './themes';

function App() {
  const location = useLocation();
  const pathArray = ['/', '/checkout', '/orders'];
  return (
    <MuiThemeProvider theme={muitheme}>
      {pathArray.indexOf(location.pathname) !== -1 ? <NavBar /> : null}
      <Switch>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
