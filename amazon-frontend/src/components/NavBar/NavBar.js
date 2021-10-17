import React from 'react'
import { Logo, NavLink, BasketIcon, NavContainer, NavLinkContainer, SearchBar, SearchBarContainer, Searchicon, NavItem, NavUpperSpan, NavLowerSpan, BasketIconContainer } from './NavBarElements'
import logo from "../../logo2.png"
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <NavContainer>
            <Link to="/">
                <Logo src={logo} alt="Logo"></Logo>
            </Link>
            <SearchBarContainer>
                <SearchBar type="text" />
                <Searchicon />
            </SearchBarContainer>
            <NavLinkContainer>
                <NavLink to="/login">
                    <NavItem>
                        <NavUpperSpan>Hello,</NavUpperSpan>
                        <NavLowerSpan>Sign In</NavLowerSpan>
                    </NavItem>
                </NavLink>
                <NavLink to="/login">
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
                        <span>0</span>
                    </BasketIconContainer>
                </NavLink>
            </NavLinkContainer>
        </NavContainer>
    )
}

export default NavBar
