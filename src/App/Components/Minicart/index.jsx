import React, { useState, useEffect } from 'react';
import './style.scss';

function Minicart({ minicartItems }) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (minicartItems.length > 0) {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, [minicartItems]);

  return (
    <div>
      {showMessage && (
        <div className='message'>
          <ul className='minicart'>
            Minicart:
            {minicartItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default Minicart;
