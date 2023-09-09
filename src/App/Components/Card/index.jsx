import './style.scss'
import React from 'react';
import AddButton from "../Button"
import Value from "../Value";
import TitleProduct from "../TitleProduct";
import ImageProduct from '../ImageProduct';
import WishList from '../WishList';

function Card({id, name, value, image, minicartItems, setMinicartItems}) {
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
      <AddButton textDefault={"ADICIONAR"} id={id} minicartItems={minicartItems} setMinicartItems={setMinicartItems}/>
    </div>
  ) 
}

export default Card;
