import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Category from '../pages/Category/Category';
import Page2 from '../pages/Page2/Page2';

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Category />} exact />
      <Route path="/2" element={<Page2 />} exact />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
