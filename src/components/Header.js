import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import logo from '../assets/logo.svg';

const Header = () => (
  <Body>
    <Options>
      <img src={logo} alt="logo" />
      <h1>Defumados</h1>
      <h1>Geléias</h1>
      <h1>Molhos</h1>
    </Options>
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
  background-color: #b30b0b;
  padding: 0 70px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  
  h1{
    color: #000;
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
`;

const UserIcon = styled(AiOutlineUser)`
  font-size: 30px;
`;
