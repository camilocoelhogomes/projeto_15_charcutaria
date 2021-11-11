import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import {
  Body, Menu, ProductCategory, Option, Products, Product, Sort, Select, Content, Info, Price,
} from '../../assets/css/CategoryStyle';
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
    if (category === 'smoked') setChangeArrowCat1(true);
    else if (category === 'jams') setChangeArrowCat2(true);
    else if (category === 'sauces') setChangeArrowCat3(true);

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
              <h2>Ordenar por</h2>
              <Select onChange={(e) => setFilter(e.target.value)}>
                <option value="recent">mais recentes</option>
                <option value="lowest">menor preço</option>
                <option value="biggest">maior preço</option>
              </Select>
            </div>
            <h2>
              {products.length}
              {' '}
              {products.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
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
