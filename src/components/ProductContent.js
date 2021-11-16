import React from 'react';
import styled from 'styled-components';

const ProductContent = ({
  id, img, name, price,
}) => (
  <Content key={id}>
    <img src={img} alt={name} />
    <Info>{name}</Info>
    <Price>
      { Number(price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
    </Price>
  </Content>
);

export default ProductContent;

const Content = styled.div`
  height: 400px;
  width: 300px;
  margin: 15px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  img{ 
      height: 300px;
      width: 95%;
      margin-bottom: 10px;
  }
  :hover{
      border-radius: 8px;
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);
  }
`;

const Info = styled.h3`
  margin: 6px 0 2px 0;
  align-self: flex-start;
  margin-left: 7px;
`;

const Price = styled.h2`
  margin-bottom: 6px;
  align-self: flex-start;
  margin-left: 7px;
`;
