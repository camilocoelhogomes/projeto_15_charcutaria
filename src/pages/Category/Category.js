import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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

const Category = () => {
  const [changeArrowCat1, setChangeArrowCat1] = useState(false);
  const [changeArrowCat2, setChangeArrowCat2] = useState(false);
  const [changeArrowCat3, setChangeArrowCat3] = useState(false);

  function selectedCategory(option) {
    if (option === 1) {
      setChangeArrowCat1(!changeArrowCat1);
      setChangeArrowCat2(false);
      setChangeArrowCat3(false);
    } else if (option === 2) {
      setChangeArrowCat2(!changeArrowCat2);
      setChangeArrowCat1(false);
      setChangeArrowCat3(false);
    } else {
      setChangeArrowCat3(!changeArrowCat3);
      setChangeArrowCat1(false);
      setChangeArrowCat2(false);
    }
  }

  return (
    <>
      <Header />
      <Body>
        <Menu>
          <h1>Categorias</h1>
          <ProductCategory onClick={() => selectedCategory(1)}>
            <Option select={changeArrowCat1}>Defumados</Option>
            {!changeArrowCat1 ? (
              <IoIosArrowForward size="22px" />
            ) : (
              <IoIosArrowDown size="22px" />
            )}
          </ProductCategory>
          <ProductCategory onClick={() => selectedCategory(2)}>
            <Option select={changeArrowCat2}>Geléias</Option>
            {!changeArrowCat2 ? (
              <IoIosArrowForward size="22px" />
            ) : (
              <IoIosArrowDown size="22px" />
            )}
          </ProductCategory>
          <ProductCategory onClick={() => selectedCategory(3)}>
            <Option select={changeArrowCat3}>Molhos</Option>
            {!changeArrowCat3 ? (
              <IoIosArrowForward size="22px" />
            ) : (
              <IoIosArrowDown size="22px" />
            )}
          </ProductCategory>
        </Menu>
        <Products>
          <Sort>
            <h2>Ordenado por</h2>
            <h2>
              {product.length}
              {' '}
              produtos encontrados
            </h2>
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
      <Footer />
    </>
  );
};

export default Category;

const Body = styled.div`
  display: flex;
`;

const Menu = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 28px;
    margin-bottom: 25px;
    color: #000;
  }
`;

const ProductCategory = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  cursor: pointer;
`;

const Option = styled.p`
  font-size: 20px;
  margin-bottom: 18px;
  margin-right: 30px;
  color:  ${(props) => (props.select === true ? '#b30b0b' : '#000')};
`;

const Products = styled.div`
  width: 80%;
`;

const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`;

const Sort = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;

  h2{
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
