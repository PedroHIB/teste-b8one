import React, { useContext } from 'react';
import './style.scss';
import AppContext from '../../Context/AppContext';

function WishListList() {
  const { wishList } = useContext(AppContext);
  
  return  wishList.length > 0 && (
    <div className='wishlist-list'>
      WishList:
      <ul>
        {wishList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default WishListList;
