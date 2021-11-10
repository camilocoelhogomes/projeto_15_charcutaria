import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Category from '../pages/Category/Category';

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/category/smoked" element={<Category category="smoked" />} exact />
      <Route path="/category/jams" element={<Category category="jams" />} exact />
      <Route path="/category/sauces" element={<Category category="sauces" />} exact />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
