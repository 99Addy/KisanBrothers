import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {

  const navigate = useNavigate();
  const [{basket, user}, dispatch] = useStateValue();

  const handlePaymentClick = () => {
    if (user) {
      navigate('/payment');
    } else {
      navigate('/login');
      console.log("Create an account first")
      // Handle the case where the user is not logged in, e.g., show a login modal.
    }
  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) =>(
            <>
               <p>
                   Subtotal ({basket.length} items): <strong>{value}</strong>
               </p>
               <small className='subtotal_gift'>
                    <input type='checkbox'/>This order contains a gift
               </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //value as prop homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'} /> 

      <button onClick={handlePaymentClick}> Proceed to checkout </button>
    </div>
  )
}

export default Subtotal
