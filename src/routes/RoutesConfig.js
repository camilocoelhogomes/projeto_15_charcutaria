/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Category from '../pages/Category/Category';
import Checkout from '../pages/checkout/Checkout';
import ConfirmOrder from '../pages/checkout/pages/ConfirmOrder';
import Shipping from '../pages/checkout/pages/Shipping';
import SignInCheckout from '../pages/checkout/pages/SIgnInCheckout';
import SignUpCheckout from '../pages/checkout/pages/SignUpCheckout';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import HomePage from '../pages/HomePage/HomePage';
import Product from '../pages/Product/Product';
import UserContext from '../store/UserContext';

const RoutesConfig = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('charcutaria')) {
      const localUser = JSON.parse(localStorage.getItem('charcutaria'));
      setUser(localUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/sign-in" exact element={<SignIn />} />
        <Route path="/category/smoked" element={<Category category="smoked" />} exact />
        <Route path="/category/jams" element={<Category category="jams" />} exact />
        <Route path="/category/sauces" element={<Category category="sauces" />} exact />
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/checkout" element={<Checkout />} exact>
          <Route path="/checkout/sign-up" exact element={<SignUpCheckout />} />
          <Route path="/checkout/sign-in" exact element={<SignInCheckout />} />
          <Route path="/checkout/shipping" exact element={<Shipping />} />
          <Route path="/checkout/confirm" exact element={<ConfirmOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesConfig;
