import React from 'react';
import { Route, Switch } from 'react-router';
import { useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';

function App() {
  const location = useLocation();
  const pathArray = ['/', '/checkout'];
  return (
    <div className="App">
      {pathArray.indexOf(location.pathname) !== -1 ? <NavBar /> : null}
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
