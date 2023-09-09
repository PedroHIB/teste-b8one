import './style.scss'
import React from 'react';
import AddButton from "../Button"
import Value from "../Value";
import TitleProduct from "../TitleProduct";
import ImageProduct from '../ImageProduct';
import WishList from '../WishList-btn';

function Card({id, name, value, image}) {
  return (
    <div className='card'>
      <div>
        <WishList id={id}/>
        <ImageProduct img={image}/>
      </div>

      <span className='txt-value'>
        <TitleProduct text={name}/>
        <Value finalValue={value}/>
      </span>
      <AddButton textDefault={"ADICIONAR"} id={id}/>
    </div>
  ) 
}

export default Card;
