/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { showProductData } from '../../services/API/server';
import UserContext from '../../store/UserContext';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const { user, updateUser } = useContext(UserContext);

  function productData() {
    const req = showProductData(id);
    req.then((res) => {
      setProduct(res.data);
      if (res.data.stock === 0) setDisabled(true);
    });
    // eslint-disable-next-line no-alert
    req.catch(() => alert('Ocorreu um erro ao tentar exibir os dados do produto. Tente novamente.'));
  }

  useEffect(() => {
    productData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addToCart() {
    const newUser = { ...user };
    if (newUser.cart) {
      newUser.cart.push(product);
    }
    updateUser({ input: 'cart', value: newUser.cart });
  }

  return (
    <>
      <Header />
      <Content>
        <Image>
          <img src={product.img} alt={product.name} />
        </Image>
        <Data>
          <h1>{product.name}</h1>
          <h2>
            Marca:
            {' '}
            {product.brand_name}
          </h2>
          <h2>
            Disponibilidade:
            {' '}
            {product.stock === 0 ? 'Esgotado' : 'Em estoque'}
          </h2>
          <h3>
            R$
            {' '}
            {product.price}
          </h3>
          <div>
            <AddToCart disabled={disabled} onClick={() => addToCart()}>
              {disabled ? 'INDISPONÍVEL' : 'ADICIONAR AO CARRINHO'}
            </AddToCart>
          </div>
        </Data>
      </Content>
      <Description>
        <h2>Descrição</h2>
        <div />
        <Text>
          {product.description}
        </Text>
      </Description>
      <Footer />
    </>
  );
};

export default Product;

const Content = styled.div`
    display: flex;
    padding: 0 150px;
`;

const Image = styled.div`
    width: 40%;
    display: flex;
    padding-top: 40px;

    img{
      height: 350px;
      width: 350px;
      border: 3px solid #d9d9d9;
    }
`;

const Data = styled.div`
    width: 80%;
    padding-top: 40px;
    padding-left: 40px;

    h1{
      color: var(--c-red);
    }

    h2{
      font-size: 18px;
    }

    h3{
      margin: 50px 0;
      font-size: 35px;
    }

    div{
      display: flex;
      align-items: center;
    }
`;

const AddToCart = styled.button`
  background-color: ${(props) => (props.disabled ? 'var(--c-dark-variant)' : 'var(--c-primary)')};
  width: 197px;
  height: 52px;
  color: #FFF;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')};
`;

const Description = styled.div`
  margin-top: 50px;
  padding: 0 150px;

  div{
    border: 1px solid #d9d9d9;
  }
`;

const Text = styled.h2`
  margin-top: 8px;
  font-size: 16px;
`;
