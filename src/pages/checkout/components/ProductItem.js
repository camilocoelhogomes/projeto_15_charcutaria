import React from 'react';
import styled from 'styled-components';

const ProductItem = ({ product }) => (
  <StyledProductItem>
    <h2>{product.name}</h2>
    <h2>{Number(product.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h2>
  </StyledProductItem>
);

export default ProductItem;

const StyledProductItem = styled.div`
        display: flex;
        justify-content: space-between;
`;
