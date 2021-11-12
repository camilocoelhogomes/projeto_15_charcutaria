import React from 'react';
import styled from 'styled-components';

const Product = () => (
  <>
    <Header />
    <Body>
      <Image>
        <img src="https://images.tcdn.com.br/img/img_prod/829376/bacon_artesanal_f_a_em_peca_250g_15_1_3e234c42d3aea5c9b3646d56d0b0ccf5.jpg" alt="bacon" />
      </Image>
      <Data>
        <h1>asdasd</h1>
      </Data>
    </Body>
  </>
);

export default Product;

const Header = styled.div`
    height: 150px;
    background-color: #000;
`;

const Body = styled.div`
    height: 100vh;
    display: flex;
    margin: 0 auto;
    background-color: #cecece;
    padding: 0 80px;
`;

const Image = styled.div`
    height: 100vh;
    background-color: yellow;
    width: 40%;
    display: flex;
    justify-content: center;
    padding-top: 40px;

    img{
      height: 300px;
      width: 300px;
    }
`;

const Data = styled.div`
    height: 100vh;
    background-color: red;
    width: 80%;
    padding-top: 40px;
    padding-left: 40px;
`;
