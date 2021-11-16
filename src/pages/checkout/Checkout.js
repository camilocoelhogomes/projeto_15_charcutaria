import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Checkout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('charcutaria')) {
      navigate('/checkout/shipping');
    } else {
      navigate('/checkout/sign-in');
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return (
    <StyledSCheckout>
      <Outlet />
    </StyledSCheckout>
  );
};

export default Checkout;

const StyledSCheckout = styled.div`
  display: flex;

`;
