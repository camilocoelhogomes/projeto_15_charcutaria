import React from 'react';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import FrontCover from '../../components/FrontCover';

const HomePage = () => (
  <>
    <Header />
    <Cover>
      <FrontCover />
    </Cover>
    <Footer />
  </>
);

export default HomePage;

const Cover = styled.div`
    margin: 30px auto;
    width: 868px;
    height: 398px;
`;
