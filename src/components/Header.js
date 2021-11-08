import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

const Header = () => (
  <Body>
    <Logo>Charcutaria</Logo>
    <RightMenu>
      <CartIcon />
      <UserIcon size="30px" />
    </RightMenu>
  </Body>
);

export default Header;

const Body = styled.div`
  height: 150px;
  width: 100vw;
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
  padding-left: calc(50% - 120px);
`;

const RightMenu = styled.div`
  display: flex;
  margin-right: 20px;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 30px;
`;

const UserIcon = styled(AiOutlineUser)`
  font-size: 30px;
  margin-left: 15px;
`;
