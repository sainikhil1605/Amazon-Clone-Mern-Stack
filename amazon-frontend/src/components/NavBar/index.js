import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo2.png';
import { Context } from '../Context/Provider';
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
  const [cart, dispatch] = React.useContext(Context);
  useEffect(() => {}, [cart]);
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
            <NavLowerSpan>
              {localStorage.getItem('name') || 'Sign In'}
            </NavLowerSpan>
          </NavItem>
        </NavLink>
        <NavLink to="/orders">
          <NavItem>
            <NavUpperSpan>Returns</NavUpperSpan>
            <NavLowerSpan>& Orders</NavLowerSpan>
          </NavItem>
        </NavLink>
        <NavLink to="/login">
          <NavItem>
            <NavUpperSpan>Your</NavUpperSpan>
            <NavLowerSpan>Prime</NavLowerSpan>
          </NavItem>
        </NavLink>
        <NavLink to="/checkout">
          <BasketIconContainer>
            <BasketIcon />
            <span>{JSON.parse(localStorage.getItem('cart')).length || 0}</span>
          </BasketIconContainer>
        </NavLink>
      </NavLinkContainer>
    </NavContainer>
  );
}

export default NavBar;
