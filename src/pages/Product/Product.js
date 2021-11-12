import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Product = () => (
  <>
    <Header />
    <Body>
      <Image>
        <img src="https://images.tcdn.com.br/img/img_prod/829376/bacon_artesanal_f_a_em_peca_250g_15_1_3e234c42d3aea5c9b3646d56d0b0ccf5.jpg" alt="bacon" />
      </Image>
      <Data>
        <h1>Bacon Artesanal em Pedaço 250g</h1>
        <h2>Marca: De Bacon a Vida Charcutaria</h2>
        <h2>Disponibilidade: Em estoque</h2>
        <h3>R$ 17,90</h3>
        <Quantity>
          <LessPlusButton>
            -
          </LessPlusButton>
          <h4>0</h4>
          <LessPlusButton>
            +
          </LessPlusButton>
        </Quantity>
      </Data>
    </Body>
    <Footer />
  </>
);

export default Product;

const Body = styled.div`
    height: 100vh;
    display: flex;
    margin: 0 auto;
    padding: 0 80px;
`;

const Image = styled.div`
    height: 100vh;
    width: 40%;
    display: flex;
    justify-content: center;
    padding-top: 40px;

    img{
      height: 350px;
      width: 350px;
      border: 3px solid #d9d9d9;
    }
`;

const Data = styled.div`
    height: 100vh;
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
`;

const Quantity = styled.div`
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 111px;
  height: 52px;
  margin-top: 20px;
`;

const LessPlusButton = styled.button`
  color: var(--c-text);
  font-size: 20px;
`;
