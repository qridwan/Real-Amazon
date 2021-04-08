import React, { useContext } from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { auth } from "../Home/Firebase";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Header = ({ cart }) => {
  const [user, setUser] = useContext(UserContext);
  const getCount = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.product.quantity;
    });
    return count;
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img
            src="https://youarecurrent.com/wp-content/uploads/2014/08/Amazon-Logo-schwarz.jpg"
            alt="logo"
          />
        </Link>
      </HeaderLogo>
      <HeaderOptionAddress>
        <LocationOnIcon />
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your address.</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption onClick={signOut}>
          <OptionLineOne>Hello, {user.name}</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
          <Link to="/orders">
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>Orders</OptionLineTwo>
          </Link>
        </HeaderOption>

        <HeaderOptionCart>
          <Link style={{textDecoration: ' none'}} to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={getCount()} color="secondary">
                <ShoppingCartIcon color="secondary" />
              </StyledBadge>
            </IconButton>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  height: 60px;
  width: 100%;
  overflow: hidden;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: fixed;
  top: 0;
  z-index: 100;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;
const OptionLineOne = styled.div`
  font-size: 0.8rem;
  color: white;
`;
const OptionLineTwo = styled.div`
  font-weight: bold;
  font-size: 0.6rem;
  color: white;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  padding-left: 4px;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #ff8c08;
  }
`;

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #ff8c08;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
  cursor: pointer;
`;
const HeaderOptionCart = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    padding-right: 10px;
    justify-content: center;
    color: white;
    text-decoration: none;
  }
`;
const CartCount = styled.div`
  padding-left: 4px;
`;
