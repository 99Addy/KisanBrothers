import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SellerRegister.css';
import { client } from '../appwrite-initialize';
import { Account, ID } from 'appwrite';
import { useStateValue } from '../StateProvider';
import instance from '../axios';

function SellerRegister() {
    const navigate = useNavigate();

    const [{basket, user}, dispatch] = useStateValue();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const account = new Account(client);
    
    const register = e =>{
      e.preventDefault();
      // console.log("Email:",email.trim(), "\n pass:", password, "name:", name);
         account.create(
              ID.unique(),
              email,
              password,
              name
          )
          .then(function(response) {
            account.createEmailSession(
                email,
                password
            )
            .then(function(response) {

              instance.post('/seller_data', {
                'name' : name,
                'email' : email
              })
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.error(error);
              })

              account.updatePrefs({
                'type' : 'seller'
              })
              localStorage.setItem('userData', JSON.stringify(response));
              dispatch({
                type: 'SET_USER',
                user: response
              })
              navigate('/seller_stock');

            }, function(error) {
                console.log(error);
               })
              
          }, function(error) {
            console.log("error under email creation : ", error);
          });
    }


    return (
        <div className='login'>
          <Link to='/'>
            <img src='https://cloud.appwrite.io/v1/storage/buckets/Dawai-storage/files/KB_logo/view?project=KisanBrothers&mode=admin' className='login_logo'/>
          </Link>
    
          <div className='login_container'>
            <h1>Become a Seller on Kisan Brothers</h1>
    
            <form>
                <h5>Name</h5>
                <input type='text' value={name} onChange={e => setName(e.target.value)}/>

                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e =>  setEmail(e.target.value)}/>
    
                <h5>Password</h5>
                <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>
    
                <button type='submit' onClick={register} className='login_signInButton'>Create Seller Account</button>
            </form>
            <p>
              By continuing, you agree to Kisan Brothers's Conditions of Use and Privacy Notice.
            </p>

          </div>
        </div>
      )
}

export default SellerRegister