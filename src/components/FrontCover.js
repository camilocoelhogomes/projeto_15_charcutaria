/* eslint-disable no-console */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/img/1.png';
import img2 from '../assets/img/2.png';
import img3 from '../assets/img/3.png';
import img4 from '../assets/img/4.png';

const FrontCover = () => (
  <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
    <div>
      <img alt="Capa" src={img1} />
    </div>
    <div>
      <img alt="Defumados" src={img2} />
    </div>
    <div>
      <img alt="Geléias" src={img3} />
    </div>
    <div>
      <img alt="Molhos" src={img4} />
    </div>
  </Carousel>
);

export default FrontCover;
