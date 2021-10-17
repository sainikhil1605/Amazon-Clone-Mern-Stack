import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search"
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
export const NavContainer = styled.nav`
height:60px;
display:flex;
flex-direction: row;
background-color: #131921;
justify-content: space-evenly;
position:sticky;
top:0;
z-index: 100;
`
export const Logo = styled.img`
width: 120px;
object-fit: contain;
margin:10px 10px 10px 10px;
`
export const SearchBar = styled.input`

width: 100%;
flex:1;
padding: 7px 10px 10px 0;
border:none;
margin:auto;
`
export const Searchicon = styled(SearchIcon)`
background-color:#cd9042;
height: 20px;
margin:auto;
font-size:2.1rem !important;
`
export const SearchBarContainer = styled.div`
display: flex;
flex:1;
flex-direction: row;
`
export const NavLinkContainer = styled.div`

display:flex;
flex-direction: row;

`
export const NavLink = styled(Link)`
text-decoration: none;
color:white;
margin:auto;
margin-left: 10px;
margin-right: 10px;
`
export const NavItem = styled.div`
display: flex;
flex-direction: column;
`
export const NavUpperSpan = styled.span`
font-size: 10px;
`
export const NavLowerSpan = styled.span`
font-weight: 800;
font-size: 13px;
`
export const BasketIconContainer = styled.div`
display: flex;
flex:1;
flex-direction: row;

align-items: center;
justify-content: center;
justify-items: center;
`
export const BasketIcon = styled(ShoppingBasketIcon)`
color:white;
flex:1;
margin-right:10px;
`