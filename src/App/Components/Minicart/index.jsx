import React, { useContext } from 'react';
import './style.scss';
import AppContext from '../../Context/AppContext';

function Minicart() {
  const { minicart } = useContext(AppContext);
  
  return  minicart.length > 0 && (
    <div className='message'>
      <ul className='minicart'>
        Minicart:
        {minicart.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Minicart;
