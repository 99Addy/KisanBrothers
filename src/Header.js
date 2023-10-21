import React, { useEffect } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
// import { auth } from './firebase';
import { client } from './appwrite-initialize';
import { Account } from 'appwrite';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const account = new Account(client);

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    // useEffect(() => {
    //     const storedUserData = localStorage.getItem('userData');
    
    //     if (storedUserData) {
    //       const userData = JSON.parse(storedUserData);
          
    //       // Use the user data in your component
    //       console.log('User data from local storage:', userData);
    //     }
    //   }, []);
    
    const handleAuthentication = () => {
        if(user) {
            account.deleteSession('current');
            console.log("Logout successfull");
            dispatch({
                type: 'SET_USER',
                user: null
              })
        }
    }

  return (
    <div className='header'>
        
        <Link to='/'>
            <img className='header_logo'
            src='https://cloud.appwrite.io/v1/storage/buckets/Dawai-storage/files/KB_logo2/view?project=KisanBrothers&mode=admin'/>
        </Link>

        <div className='header_search'>
            <input className='header_searchInput' type='text'/>
            <SearchIcon className='header_searchIcon'/>
        </div>


        <div className='header_nav'>
           <Link to={!user && '/login'}>
            <div  onClick={handleAuthentication} className='header_option'>
                <span className='header_optionLine1'>
                    {user  ? storedUserData.providerUid  : 'Hello Guest'}
                </span>

                <span className='header_optionLine2'>
                    {user ? 'Sign Out' : 'Sign In'}
                </span>
            </div>
           </Link>
            <div className='header_option'>
                <span className='header_optionLine1'>
                    Returns
                </span>

                <span className='header_optionLine2'>
                    & Orders
                </span>                
            </div>
            
            <div className='header_option'>
                <span className='header_optionLine1'>
                    Your
                </span>

                <span className='header_optionLine2'>
                    Prime
                </span> 
            </div> 

            <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>    
                    <span className='header_optionLine2 header_basketCount'>{basket.length}</span>
                </div> 
            </Link>                      
        </div>

    </div>

  )
}

export default Header
