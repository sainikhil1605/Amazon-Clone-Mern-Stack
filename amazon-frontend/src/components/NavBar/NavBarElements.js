import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  max-height: 200px;
  display: flex;
  @media (max-width: 780px) {
    flex-direction: column;
  }
  flex-direction: row;
  background-color: #131921;
  justify-content: space-evenly;
  position: sticky;
  top: 0;
  z-index: 100;
`;
const LogoSearchContainer = styled.div`
  display: flex;
  @media (max-width: 780px) {
    flex-direction: column;
  }
  flex-direction: row;
  width: 100%;
  align-items: center;
`;
const Logo = styled.img`
  width: 100%;
  height: 20px;
  object-fit: contain;
  margin: 20px 0px 10px 0px;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const SearchBar = styled.input`
  width: 100%;
  flex: 1;
  padding: 7px 10px 10px 0;
  border: none;
  margin: auto;
`;
const Searchicon = styled(SearchIcon)`
  background-color: #cd9042;
  height: 20px;
  margin: auto;
  font-size: 2.1rem !important;
`;
const SearchBarContainer = styled.div`
  display: flex;
  margin: 0px 10px 0px 10px;
  flex: 1;
  flex-direction: row;
`;
const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: auto;
  margin-left: 10px;
  margin-right: 10px;
`;
const NavItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavUpperSpan = styled.span`
  font-size: 10px;
`;
const NavLowerSpan = styled.span`
  font-weight: 800;
  font-size: 13px;
`;
const BasketIconContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;
const BasketIcon = styled(ShoppingBasketIcon)`
  color: white;
  flex: 1;
  margin-right: 10px;
`;
export {
  BasketIcon,
  BasketIconContainer,
  NavLink,
  NavLinkContainer,
  NavItem,
  NavUpperSpan,
  NavLowerSpan,
  SearchBar,
  SearchBarContainer,
  Searchicon,
  FlexContainer,
  NavContainer,
  Logo,
  LogoSearchContainer,
};
