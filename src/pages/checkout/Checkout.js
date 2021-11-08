import React from 'react';
import styled from 'styled-components';
import LogInButton from './components/logInButton';

const Checkout = () => (
  <StyledSCheckout>
    <LogInButton>ENTRE EM SUA CONTA</LogInButton>
    <p>Ou preencha os dados abaixo</p>
    <h2>1. Detalhes</h2>
  </StyledSCheckout>
);

export default Checkout;

const StyledSCheckout = styled.div`
  display: flex;

`;
