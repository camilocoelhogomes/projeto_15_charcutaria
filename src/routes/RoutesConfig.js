import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Page2 from '../pages/Page2/Page2';

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/2" element={<Page2 />} exact />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
