import React from 'react';
import './button.scss';

function AddButton({ textDefault, id, minicartItems, setMinicartItems }) {

  const addItem = () => {
    setMinicartItems([...minicartItems, id]);
    
    alert(`Produto adicionado ao carrinho: ${id}`);
  };

  return (
    <button className={`add-button ${minicartItems.length > 0 && 'added'}`} onClick={addItem}>
      {minicartItems.length > 0 && <img src="/Assets/check.svg" alt="Produto adicionado" />}
      {textDefault}
    </button>
  );
}

export default AddButton;
