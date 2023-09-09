import React, {useState} from 'react'
import "./style.scss"

function WishList() {
    const [hover, setHover] = useState(false);
    const [addWishList, setAddWishList] = useState(false)

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };

  
    const addItem = () => {
        setAddWishList(!addWishList)
    }

    return (
        <button className='wish-list' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={addItem}>            
            <img src={`/Assets/wishList-${ 
                hover ? (addWishList ? 'hover-active' : 'hover-default') : 
                (addWishList ? 'active' : 'default') 
            }.svg`} alt="Lista de Desejos" />           
        </button>
    )
}

export default WishList