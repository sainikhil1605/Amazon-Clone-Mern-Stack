import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Orders from './components/Orders/Orders';

function App() {
  const location = useLocation();
  const pathArray = ['/', '/checkout'];
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
