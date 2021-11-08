import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

const product = [
  {
    name: 'Bacon',
    price: 59.90,
    image: 'https://images.tcdn.com.br/img/img_prod/829376/bacon_artesanal_f_a_em_peca_250g_15_1_3e234c42d3aea5c9b3646d56d0b0ccf5.jpg',
  },
  {
    name: 'Presunto',
    price: 39.90,
    image: 'https://abcemcasa.vteximg.com.br/arquivos/ids/306819-1000-1000/PRES-GOURMET-SEARA-KG-DEF.jpg?v=637445924818900000',
  },
  {
    name: 'Presunto',
    price: 39.90,
    image: 'https://abcemcasa.vteximg.com.br/arquivos/ids/306819-1000-1000/PRES-GOURMET-SEARA-KG-DEF.jpg?v=637445924818900000',
  },
  {
    name: 'Bacon',
    price: 59.90,
    image: 'https://images.tcdn.com.br/img/img_prod/829376/bacon_artesanal_f_a_em_peca_250g_15_1_3e234c42d3aea5c9b3646d56d0b0ccf5.jpg',
  },
  {
    name: 'Presunto',
    price: 39.90,
    image: 'https://abcemcasa.vteximg.com.br/arquivos/ids/306819-1000-1000/PRES-GOURMET-SEARA-KG-DEF.jpg?v=637445924818900000',
  },
  {
    name: 'Presunto',
    price: 39.90,
    image: 'https://abcemcasa.vteximg.com.br/arquivos/ids/306819-1000-1000/PRES-GOURMET-SEARA-KG-DEF.jpg?v=637445924818900000',
  },
];

const Home = () => (
  <>
    <Header />
    <Body>
      <Menu>
        <h1>Categorias</h1>
      </Menu>
      <Products>
        <Sort>
          <h1>Ordenado por</h1>
          <h1>
            {product.length}
            {' '}
            produtos encontrados
          </h1>
        </Sort>
        <Product>
          {product.map((p) => (
            <Content>
              <img src={p.image} alt={p.name} />
              <Info>{p.name}</Info>
              <Price>
                R$
                {p.price.toFixed(2)}
              </Price>
            </Content>
          ))}
        </Product>
      </Products>
    </Body>
  </>
);

export default Home;

const Body = styled.div`
  display: flex;
`;

const Menu = styled.div`
  background-color: #00FF;
  width: 20%;
  display: flex;
  justify-content: center;

  h1{
    font-size: 28px;
  }
`;

const Products = styled.div`
  width: 80%;
`;

const Product = styled.div`
  background-color: #cecece;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`;

const Sort = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;

  h1{
    font-size: 18px;
    color: #000;
  }
`;

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
      margin-bottom: 10px;  
  }
  :hover{
      border-radius: 8px;
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.4);
  }
`;

const Info = styled.p`
  font-size: 15px;
  margin: 6px 0;
  align-self: flex-start;
  margin-left: 2px;
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 20px;
  margin: 6px 0;
  align-self: flex-start;
  margin-left: 2px;
  font-weight: bold;
`;
