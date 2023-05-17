import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault(); //prevent refreshing

        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) =>{
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //if successfully created
                console.log(auth);
                if(auth){
                    navigate('/');
                } 
            })
            .catch(error => alert(error.message))
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='login'>
      <Link to='/'>
        <img src='https://germainmaureau.com/app/uploads/2020/05/Amazon-logo.png' className='login_logo'/>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati dolore modi doloremque voluptatibus minus molestiae, dicta error laudantium nulla dolorum, vitae nam! Optio minus ab veritatis sapiente earum at tenetur hic vitae.
        </p>
        
        <button className='login_registerButton' onClick={register} >Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
