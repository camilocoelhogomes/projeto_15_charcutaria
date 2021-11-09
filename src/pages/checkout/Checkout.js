import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Checkout = () => (
  <StyledSCheckout>
    <Outlet />
  </StyledSCheckout>
);

export default Checkout;

const StyledSCheckout = styled.div`
  display: flex;

`;
