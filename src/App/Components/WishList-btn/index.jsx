import React, { useState, useContext } from 'react'
import "./style.scss"
import AppContext from '../../Context/AppContext';

function WishList({ id }) {
    const [hover, setHover] = useState(false);
    const { wishList, setWishList } = useContext(AppContext);

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

    const arrayContainsValue = (arr, value) => {
        return arr.includes(value);
    }
  
    const addItem = () => {
        if(!arrayContainsValue(wishList, id)) {
            setWishList([...wishList, id])
        } 
    }

    return (
        <button className='wish-list' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={addItem}>            
            <img src={`/assets/wishList-${ 
                hover ? (arrayContainsValue(wishList, id) ? 'hover-active' : 'hover-default') : 
                ( arrayContainsValue(wishList, id) ? 'active' : 'default' ) 
            }.svg`} alt="Lista de Desejos" />           
        </button>
    )
}

export default WishList