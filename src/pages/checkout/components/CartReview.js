import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserContext from '../../../store/UserContext';
import ProductItem from './ProductItem';

const CartReview = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.cart === false) {
      navigate('/');
    }
    console.log(user.cart);
  }, []);

  return (
    <StyledCartReview>
      <h1>Total</h1>
      <div className="line">
        <h4>Quantidade de Produtos:</h4>
        <h4>{user.cart.length}</h4>
      </div>
      {user.cart.map((item) => <ProductItem product={item} />)}
      <div className="line">
        <h4>Valor Total</h4>
        <h4>{user.cart.reduce((acc, curr) => acc + Number(curr.price), 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
      </div>
    </StyledCartReview>
  );
};

export default CartReview;

const StyledCartReview = styled.div`
    background-color: #F1F2F3;
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 756px;
    padding: 40px;
    gap: 20px;
    .line{
        display: flex;
        justify-content: space-between;
    }
`;
