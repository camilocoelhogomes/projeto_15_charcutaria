import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Checkout from '../pages/checkout/Checkout';
import ConfirmOrder from '../pages/checkout/pages/ConfirmOrder';
import Shipping from '../pages/checkout/pages/Shipping';
import SignInCheckout from '../pages/checkout/pages/SIgnInCheckout';
import SignUpCheckout from '../pages/checkout/pages/SignUpCheckout';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import Product from '../pages/Product/Product';

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/checkout" element={<Checkout />} exact>
        <Route path="/checkout/sign-up" exact element={<SignUpCheckout />} />
        <Route path="/checkout/sign-in" exact element={<SignInCheckout />} />
        <Route path="/checkout/shipping" exact element={<Shipping />} />
        <Route path="/checkout/confirm" exact element={<ConfirmOrder />} />
      </Route>
      <Route path="/sign-up" exact element={<SignUp />} />
      <Route path="/sign-in" exact element={<SignIn />} />
      <Route path="/product/:id" exact element={<Product />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
