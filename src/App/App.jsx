import './style/global.scss'
import React, { useState } from 'react';
import products from './products.json';
import Card from "./Components/Card"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Minicart from './Components/Minicart';
import Provider from './Context/Provider';

export const App = () => {
  const [minicartItems, setMinicartItems] = useState([]);
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
    <Provider>
      <Minicart minicartItems={minicartItems}/>
      <Splide aria-label="Products" options={sliderOptions}>
        { products.map(({id, name, value, image}, index) => (
          <SplideSlide className="App">
            <span key={index}>
              <Card id={id} name={name} value={value} image={image} minicartItems={minicartItems} setMinicartItems={setMinicartItems}/>
            </span>
          </SplideSlide>
        ))}     
      </Splide>
    </Provider>
  )  
}

export default App;
