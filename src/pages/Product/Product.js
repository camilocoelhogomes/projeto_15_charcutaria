/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Product = () => (
  <>
    <Header />
    <Content>
      <Image>
        <img src="https://images.tcdn.com.br/img/img_prod/829376/bacon_artesanal_f_a_em_peca_250g_15_1_3e234c42d3aea5c9b3646d56d0b0ccf5.jpg" alt="bacon" />
      </Image>
      <Data>
        <h1>Bacon Artesanal em Pedaço 250g</h1>
        <h2>Marca: De Bacon a Vida Charcutaria</h2>
        <h2>Disponibilidade: Em estoque</h2>
        <h3>R$ 17,90</h3>
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
        O Bacon Granulado Artesanal F.A. é o produto mais especial da nossa linha. Feito com um processo totalmente artesanal, desde a seleção da matéria prima, passando por 8 dias em cura, e depois defumado naturalmente com lenha de macieira por até 8 horas. O granulado é preparado após o processo do bacon, onde para conseguir 1kg do produto é necessário pelo menos 7kgs de Bacon em Manta!
      </Text>
    </Description>
    <Footer />
  </>
);

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
