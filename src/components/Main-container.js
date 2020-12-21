import React from 'react';
import Slider from 'react-slick';
import Hero from './Hero-container';
import { imgdata } from './img-data';
import './Main-container.css';
import ImageSlider from './Slider';

function Main() {
  return (
    <div className='Main-container'>
      <Hero slides={imgdata}></Hero>
      

      

    </div>
  );
}

export default Main;
