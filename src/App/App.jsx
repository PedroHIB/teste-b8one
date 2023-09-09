import './style/global.scss'
import React from 'react';
import productsData from './products.json';
import Card from "./Components/Card"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Minicart from './Components/Minicart';
import WishListList from './Components/WishList-List';

export const App = () => {  
  const sliderOptions = {
    pagination: true,
    padding: { left: 4, right: 4 },
    perPage: 3,
    perMove: 1,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      575: {
        perPage: 1,
        arrows: false,
      },
    },
  } 
  
   return (
    <>
      <WishListList/>
      <Minicart/>
      <Splide aria-label="Products" options={sliderOptions}>
        { productsData.map(({id, name, value, image}, index) => (
          <SplideSlide className="App"  key={index}>
            <Card id={id} name={name} value={value} image={image}/>
          </SplideSlide>
        ))}     
      </Splide>
    </>
  )  
}

export default App;
