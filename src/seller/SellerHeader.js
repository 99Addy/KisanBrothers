import { useEffect, useState } from 'react';
import './SellerHeader.css';
import { Account } from 'appwrite';
import { client } from '../appwrite-initialize';

const account = new Account(client)

function SellerHeader(){
    const [user, setUser] = useState(null);

    useEffect(() => {
      // Fetch user data and update the state
      account.get()
        .then(function(response) {
          setUser(response);
          console.log("The logged user is", response);
        })
       .catch(function(error) {
          console.log("The logging error is", error);
        });
    }, []);

    return(
        <div className='header'>
            <img className='header_logo'
            src='https://cloud.appwrite.io/v1/storage/buckets/Dawai-storage/files/KB_logo2/view?project=KisanBrothers&mode=admin'/>

            <div className='header_options'>
                <div className="header_stocks_option">Your stocks</div>

                <div className="header_dawai_adding_option">Add new Dawai</div>
            </div>

            <div className="header_seller_name">Welcome, {user ? user['name'] : ''}</div>
        </div>
    );
}

export default SellerHeader;