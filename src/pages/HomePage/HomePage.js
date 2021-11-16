/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FrontCover from '../../components/FrontCover';
// import ProductContent from '../../components/ProductContent';
import { getHomePageProducts } from '../../services/API/server';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-console
  console.log(products);

  function homepage() {
    const req = getHomePageProducts();
    req.then((res) => setProducts(res.data.length));
  }

  useEffect(() => {
    homepage();
  }, []);

  return (
    <>
      <Header />
      <Cover>
        <FrontCover />
      </Cover>
      <Text>
        <h1>Categorias</h1>
      </Text>
      <Buttons>
        <Link to="/products/smoked">
          <Option>
            Defumados
          </Option>
        </Link>
        <Link to="/products/jams">
          <Option>
            Geléias
          </Option>
        </Link>
        <Link to="/products/sauces">
          <Option>
            Molhos
          </Option>
        </Link>
      </Buttons>
      <Text>
        <h1>Produtos em destaque</h1>
      </Text>
      <Highlights>
        {products.length ? products.map((p, index) => {
          <h1>{index}</h1>;
        }) : <></>}
      </Highlights>
      <Footer />
    </>
  );
};

export default HomePage;

const Cover = styled.div`
  margin: 30px auto;
  width: 868px;
  height: 398px;
`;

const Text = styled.div`
  margin: 50px auto 0 auto;
  display: flex;
  justify-content: center;
  width: 500px;
  height: 20px;
  background-color: #d9d9d9;
`;

const Highlights = styled.div`
  width: 80%;
  margin: 20px auto 0 auto; 
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  width: 80%;
  margin: 40px auto 60px auto; 
  display: flex;
  justify-content: space-around;
`;

const Option = styled.button`
  height: 90px;
  width: 300px;
  font-size: 20px;
  color: #FFF;
  font-family: 'RalewaySemiBold';
  border-radius: 5px;
  border-color: #b30b0b;
  background: linear-gradient(to bottom, #b30b0b 5%,#fca8a1 100%);
  box-shadow: inset 0px 1px 0px 0px #fff4f3;
  text-shadow: 0px 1px 0px #000;

  :hover{
    background: linear-gradient(to bottom, #fca8a1 5%, #b30b0b 100%);
  }

  :active{
    position: relative;
    top: 2px;
  }
`;
