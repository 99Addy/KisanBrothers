import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { auth } from './firebase';
import './Login.css';
import { client } from './appwrite-initialize';
import { Account, ID } from 'appwrite';
import { useStateValue } from './StateProvider';

function Login() {
    const navigate = useNavigate();

    const [{basket, user}, dispatch] = useStateValue();

    // const signIn = e => {
    //     e.preventDefault(); //prevent refreshing

    //     auth
    //         .signInWithEmailAndPassword(email,password)
    //         .then((auth) =>{
    //             navigate('/')
    //         })
    //         .catch(error => alert(error.message))
    // }

    // const register = e => {
    //     e.preventDefault();

    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             //if successfully created
    //             console.log(auth);
    //             if(auth){
    //                 navigate('/');
    //             } 
    //         })
    //         .catch(error => alert(error.message))
    // }

    const account = new Account(client);

    const signIn = e => {
      e.preventDefault(); //prevent refreshing

      account.createEmailSession(
        email,
        password
      )
      .then(function(response) {
        console.log("The login is",response);
        dispatch({

        // DISPATCH shoots information about user into the data layer i.e, context api
  
          type: 'SET_USER',
          user: response
        })
        navigate('/')
      }, function(error) {
        console.log(error);
      });
  }

    const register = e => {
        // e.preventDefault();

        account.create(
          ID.unique(),
          email,
          password
        )
        .then(function(response) {
          console.log(response);
        }, function(error) {
          console.log(error);
        });
    }

    const seller_login = e => {
      
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='login'>
      <Link to='/'>
        <img src='https://cloud.appwrite.io/v1/storage/buckets/Dawai-storage/files/KB_logo/view?project=KisanBrothers&mode=admin' className='login_logo'/>
      </Link>

      <div className='login_container'>
        <h1>Sign-in</h1>

        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e =>  setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password'  value={password} onChange={e => setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
        </form>
        <p>
          By continuing, you agree to Kisan Brothers's Conditions of Use and Privacy Notice.
        </p>
        
        <button className='login_registerButton' onClick={register} >Create your Account</button>

        <button type='submit' className='seller_signInButton' onClick={seller_login}>Seller Sign In</button>
      </div>
    </div>
  )
}

export default Login
