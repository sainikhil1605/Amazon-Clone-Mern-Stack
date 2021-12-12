import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Cart/Provider';
import { LoginContext } from '../../Context/Login/Provider';
import logo from '../../logo2.png';
import {
  BasketIcon,
  BasketIconContainer,
  Logo,
  NavContainer,
  NavItem,
  NavLink,
  NavLinkContainer,
  NavLowerSpan,
  NavUpperSpan,
  SearchBar,
  SearchBarContainer,
  Searchicon,
} from './NavBarElements';

function NavBar() {
  const [cart, cartDispatch] = useContext(CartContext);
  const [loginState, dispatch] = useContext(LoginContext);
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    cartDispatch({ type: 'CLEAR_CART' });
  };
  useEffect(() => {}, [cart, loginState]);
  return (
    <NavContainer>
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
      <SearchBarContainer>
        <SearchBar type="text" />
        <Searchicon />
      </SearchBarContainer>
      <NavLinkContainer>
        <NavLink to="/login">
          <NavItem>
            <NavUpperSpan>Hello,</NavUpperSpan>
            <NavLowerSpan>{loginState.name || 'Sign In'}</NavLowerSpan>
          </NavItem>
        </NavLink>
        <NavLink to="/orders">
          <NavItem>
            <NavUpperSpan>Returns</NavUpperSpan>
            <NavLowerSpan>& Orders</NavLowerSpan>
          </NavItem>
        </NavLink>
        <NavLink to="/">
          <NavItem>
            <NavUpperSpan onClick={() => handleLogout()}>
              {loginState.isLoggedIn === true ? 'Log Out' : null}
            </NavUpperSpan>
          </NavItem>
        </NavLink>
        <NavLink to="/checkout">
          <BasketIconContainer>
            <BasketIcon />
            <span>{cart.length}</span>
          </BasketIconContainer>
        </NavLink>
      </NavLinkContainer>
    </NavContainer>
  );
}

export default NavBar;
