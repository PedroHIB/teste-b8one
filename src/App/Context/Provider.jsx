import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [minicart, setMinicart] = useState([]);
  const [wishList, setWishList] = useState([]);

  const value = {
    minicart,
    setMinicart,
    wishList, 
    setWishList
  };

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
