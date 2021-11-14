/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { showProductData } from '../../services/API/server';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  function productData() {
    const req = showProductData(id);
    req.then((res) => setProduct(res.data));
    // eslint-disable-next-line no-alert
    req.catch(() => alert('Ocorreu um erro ao tentar exibir os dados do produto. Tente novamente.'));
  }

  useEffect(() => {
    productData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Image>
          <img src={product.img} alt={product.name} />
        </Image>
        <Data>
          <h1>{product.name}</h1>
          <h2>Marca: De Bacon a Vida Charcutaria</h2>
          <h2>Disponibilidade: Em estoque</h2>
          <h3>
            R$
            {' '}
            {product.price}
          </h3>
          <div>
            <Quantity>
              <LessPlusButton>
                -
              </LessPlusButton>
              <h4>0</h4>
              <LessPlusButton>
                +
              </LessPlusButton>
            </Quantity>
            <AddToCart>
              ADICIONAR AO CARRINHO
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

const Quantity = styled.div`
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 111px;
  height: 52px;
`;

const LessPlusButton = styled.button`
  color: var(--c-text);
  font-size: 20px;
`;

const AddToCart = styled.button`
  background-color: var(--c-primary);
  width: 197px;
  height: 52px;
  margin-left: 24px;
  color: #FFF;
  font-size: 16px;
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
