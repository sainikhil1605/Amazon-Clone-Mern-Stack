
import { Route, Switch } from 'react-router';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useLocation } from "react-router-dom"
import Home from './components/Home/Home';
function App() {
  const location = useLocation()
  const pathArray = ["/", "/checkout"]
  return (
    <div className="App">
      {pathArray.indexOf(location.pathname) !== -1 ? <NavBar /> : null}
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
