import './App.css';
import './Header';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51LFr2SSFjx8dcK4vZ0GZPlueuwKX8URkSiI2cZ4SRvLF9QjmzvwjHXc38sE7Oh8v11HfcRWo2rrFCMDEiARdvRP000pq3ed2fj');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will run only once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      
      if(authUser){
          //the user just logged in / the user was logged in
          dispatch({

            // DISPATCH shoots information about user into the data layer i.e, context api

            type: 'SET_USER',
            user: authUser
          })
      } else {
          //the user was logged out

          dispatch({
            type: 'SET_USER',
            user: null
          })
      }

    })
  } , [])
    return ( 
        //BEM
        <Router>
          <div className = "app" >   
            <Routes>
              <Route path='/login' element={<Login/>}/>
                
              <Route path='/checkout' element={<><Header/><Checkout/></>}/>

              <Route path='/' element={<><Header/><Home/></> }/> 

              <Route path='/payment' element={<>
              <Header/>
              <Elements stripe={promise}>
              <Payment/>
              </Elements>
              </>}/>

            </Routes>
          </div>
        </Router>
    );
}

export default App;