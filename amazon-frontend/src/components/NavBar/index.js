import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../logo2.png';
import {
  BasketIcon,
  BasketIconContainer,
  Logo,
  LogoSearchContainer,
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
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const loginState = useSelector((state) => state.login);
  const [search, setSearch] = useState('');
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    dispatch({ type: 'CLEAR_CART' });
  };
  useEffect(() => {}, [cart, loginState]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_SEARCH', payload: search });
  };

  return (
    <NavContainer>
      <LogoSearchContainer>
        <Link to="/">
          <Logo src={logo} alt="Logo" />
        </Link>
        <form onSubmit={handleSearch} style={{ width: '100%' }}>
          <SearchBarContainer>
            <SearchBar
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Searchicon type="submit" onClick={(e) => handleSearch(e)} />
          </SearchBarContainer>
        </form>
      </LogoSearchContainer>
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

        {loginState.isLoggedIn ? (
          <NavLink to="/">
            <NavItem>
              <NavUpperSpan onClick={() => handleLogout()}>
                Log Out
              </NavUpperSpan>
            </NavItem>
          </NavLink>
        ) : null}
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
