import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

const Home = () => (
  <>
    <Header />
    <Body>
      <Banner>
        dfhdh
      </Banner>
      <Products>
        <Content>
          <img alt="qaefaf" />
          <Info>dfhgdfh</Info>
          <Price>
            R$
          </Price>
        </Content>
      </Products>
    </Body>
  </>
);

export default Home;

const Body = styled.div`
    width: 100vw;
`;

const Banner = styled.div`
    height: 350px;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #1a1919;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);

    h1{
        font-size: 30px;
        color: #FFF;
        font-weight: bold;
    }
`;

const Products = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
`;

const Content = styled.div`
    height: 400px;
    width: 300px;
    margin: 10px; 
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
