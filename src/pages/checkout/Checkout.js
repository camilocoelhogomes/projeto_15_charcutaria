import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';

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
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
    </StyledSCheckout>
  );
};

export default Checkout;

const StyledSCheckout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .outlet{
    padding: 0 20px;
  }
`;
