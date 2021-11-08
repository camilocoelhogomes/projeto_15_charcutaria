import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import logo from '../assets/logo.svg';

const Header = () => (
  <Body>
    <Logo><img src={logo} alt="logo" /></Logo>
    <Icons>
      <UserIcon />
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
  background-color: #FFF;
`;

const Logo = styled.h1`
  font-size: 50px;
  color: #000;
  cursor: pointer;
  font-family: 'Nova Flat';

  img{
    width: 150px;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-right: 20px;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 30px;
  margin-left: 25px;
`;

const UserIcon = styled(AiOutlineUser)`
  font-size: 30px;
`;
