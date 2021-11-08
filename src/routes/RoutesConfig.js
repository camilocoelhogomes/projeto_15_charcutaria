import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Checkout from '../pages/checkout/Checkout';

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/checkout" element={<Checkout />} exact />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
