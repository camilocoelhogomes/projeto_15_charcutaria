import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import logo from '../assets/logo.svg';

const Header = () => (
  <Body>
    <Options>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </Options>
    <Icons>
      <Link to="/sign-in">
        <UserIcon />
      </Link>
      <CartIcon />
    </Icons>
  </Body>
);

export default Header;

const Body = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 3;
  top: 0;
  left: 0;
  border: none;
  background-color: var(--c-red);
  padding: 0 70px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  
  h1{
    color: #FFF;
    font-size: 20px;
    margin-right: 15px;
  }

  img{
    width: 150px;
    margin-right: 30px;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-right: 20px;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 30px;
  margin-left: 25px;
  color: #FFF;
`;

const UserIcon = styled(AiOutlineUser)`
  font-size: 30px;
  color: #FFF;
`;
