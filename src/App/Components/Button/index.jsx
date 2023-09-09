import React, { useContext } from 'react';
import './button.scss';
import AppContext from '../../Context/AppContext';

function AddButton({ id }) {
  const { minicart, setMinicart } = useContext(AppContext);

  const arrayContainsValue = (arr, value) => {
    return arr.includes(value);
  }

  const addItem = () => {
    if(!arrayContainsValue(minicart, id)) {
      setMinicart([...minicart, id]);
    } 
  };

  return arrayContainsValue(minicart, id) ? (
    <button className='add-button added' onClick={addItem}>
      <img src="/assets/check.svg" alt="Produto adicionado" />
      ADICIONADO
    </button> 
    ) : (
    <button className='add-button' onClick={addItem}>
      ADICIONAR
    </button>
  );
}

export default AddButton;
