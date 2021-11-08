import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Page2 from '../pages/Page2/Page2';
import SignUp from '../pages/signUp/SignUp';

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/sign-up" element={<SignUp />} exact />
      <Route path="/2" element={<Page2 />} exact />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
