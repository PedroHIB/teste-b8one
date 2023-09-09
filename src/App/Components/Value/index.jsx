import React from 'react'
import './style.scss'
import formatCurrency from '../../Utils/formatCurrency';

function  Value({finalValue}) {
    const discount =  finalValue - ((finalValue * 7.64) / 100);

    return (
        <div className='value'>
            <p className='old-value'>
                {formatCurrency(finalValue, 'BRL')}
            </p>
            <p className='new-value'>
                {formatCurrency(discount, 'BRL')}
            </p>
            <p className='amount-installments'>
                em até 
                <span>
                    {' '}10x de {formatCurrency((discount/10), 'BRL')}{' '}
                </span>
                sem juros
            </p>
        </div>
    )
}

export default Value