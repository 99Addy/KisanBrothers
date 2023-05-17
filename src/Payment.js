import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { Link, useNavigate} from 'react-router-dom';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';


function Payment() {
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [{user, basket} , dispatch] = useStateValue();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);

    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        //useEffect runs everytime the basket changes

        const getClientSecret = async () => {
                // we wait to get axios which is a request a post or get
                 const response = await axios({
                     method: 'post',
                     url:`/payments/create?total=${getBasketTotal(basket) *100}`
                 });
                 setClientSecret(response.data.clientSecret);
                 console.log(clientSecret)
        }

        getClientSecret();
    } , [basket]) 

    console.log('THE SECRET KEY IS >>>', clientSecret)

    const handleSubmit = async (event) => {

        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false)

            navigate('/orders')
        })
    }

    const handleChange = event => {
        //Listen for changes in the card element
        //and display any error if there are any error

        setDisabled(event.empty); 
        setError(event.error ? event.error.message: "");
    }

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout(<Link to='/checkout'>{basket.length} items</Link>)
            </h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123, Tagore</p>
                    <p>Sironj M.P.</p>
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item => (
                        <CheckoutProduct
                          id = {item.id}
                          title = {item.title}
                          image = {item.image}
                          price = {item.price}
                          rating = {item.rating}/>
                    ))}
                </div>
            </div>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    <form onSubmit={ handleSubmit }>
                        <CardElement onChange={handleChange}/>

                        <div className="payment_priceContainer">
                          <CurrencyFormat
                            renderText={(value) =>(
                                <h3>
                                    Order Total:{value}
                                </h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)} //value as prop homework
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'} /> 

                            <button disabled={processing || disabled || succeeded}>
                                <span >{processing ?  <p>Processing</p>: 'Buy Now'}</span>

                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Payment
