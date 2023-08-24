import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,price,image,quantity,unit,rating}) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
       dispatch({
         type: 'ADD_TO_BASKET',
         item: {
           id: id,
           title: title,
           image: image,
           price: price,
           qty: quantity,
           unit: unit,
           rating: rating
         },
       });
  }; 

  return (
    <div className='product'>
        <div className="product_info">
            <p><strong>{title.toUpperCase()}</strong></p>
            <p className="product_price">
                <large>₹ </large>
                <strong>{price}</strong>
            </p>
            <p className='product_qty'>
                <large>{quantity + " " + unit}</large>
            </p>
        </div>

        <img src={image} alt="" />

        <button onClick={addToBasket} >Add to Basket</button>
    </div>
  )
}

export default Product;
