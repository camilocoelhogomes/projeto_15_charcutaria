import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { showProducts } from '../../services/API/server';

const Category = ({ category }) => {
  const navigate = useNavigate();
  const [changeArrowCat1, setChangeArrowCat1] = useState(false);
  const [changeArrowCat2, setChangeArrowCat2] = useState(false);
  const [changeArrowCat3, setChangeArrowCat3] = useState(false);
  const [filter, setFilter] = useState('recent');
  const [products, setProducts] = useState([]);

  function listProducts() {
    const query = `?page=${category}`;
    const sort = `&orderBy=${filter}`;

    const req = showProducts(query, sort);
    req.then((res) => {
      setProducts(res.data);
    });
    // eslint-disable-next-line no-alert
    req.catch(() => alert('Ocorreu um erro no servidor ao tentar obter os produtos. Tente novamente.'));
  }

  useEffect(() => {
    listProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, filter]);

  function goTo(path) {
    navigate(path);
  }

  function selectedCategory(option) {
    if (option === 1) {
      setChangeArrowCat1(true);
      setChangeArrowCat2(false);
      setChangeArrowCat3(false);
      goTo('/category/smoked');
    } else if (option === 2) {
      setChangeArrowCat2(true);
      setChangeArrowCat1(false);
      setChangeArrowCat3(false);
      goTo('/category/jams');
    } else {
      setChangeArrowCat3(true);
      setChangeArrowCat1(false);
      setChangeArrowCat2(false);
      goTo('/category/sauces');
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
            <div>
              <h2>Ordenado por</h2>
              <Select onChange={(e) => setFilter(e.target.value)}>
                <option value="recent">Mais recentes</option>
                <option value="lowest">Menor preço</option>
                <option value="biggest">Maior preço</option>
              </Select>
            </div>
            <h2>
              {products.length}
              {' '}
              produtos encontrados
            </h2>
          </Sort>
          <Product>
            {products.map((p) => (
              <Content key={p.id}>
                <img src={p.img} alt={p.name} />
                <Info>{p.name}</Info>
                <Price>
                  R$
                  {p.price}
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

  div{
    display: flex;
  }

  h2{
    font-size: 18px;
    color: #000;
    margin-right: 10px;
  }
`;

const Select = styled.select`
  height: 35px;
  background: #f2d3cb;
  color: gray;
  border: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
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
      width: 95%;
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
  margin-left: 7px;
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 20px;
  margin: 6px 0;
  align-self: flex-start;
  margin-left: 7px;
  font-weight: bold;
`;
