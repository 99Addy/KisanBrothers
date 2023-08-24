import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from './Product';
import { fetchData } from './appwrite-db'
// const { fetchData } = require('./appwrite-db')

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  //Firebase code

  // async function fetchData() {
  //   try {
  //     const response = await fetch('http://localhost:5000/api'); // Replace '/api/data' with the actual API endpoint URL
  //     const arr = await response.json();
  //     setData(arr);
  //     console.log(arr[0]);

  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  async function fetch() {
    try {
      const response = await fetchData();
      setData(response);
      console.log('response: ', response);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''/>

            <div className="home_row">
              {data.slice(0,5).map((ele) => (
                <Product
                  id={ele['$id'] + 1}
                  title={ele['$id']}
                  image={ele['url']}
                  price={ele['mrp']}
                  quantity={ele['qty']}
                  unit={ele['unit']}
                />
              ))}
              </div>

            <div className="home_row">
              {data.slice(5,7).map((ele) => (
                  <Product
                    id={ele['$id'] + 1}
                    title={ele['$id']}
                    image={ele['url']}
                    price={ele['mrp']}
                    quantity={ele['qty']}
                    unit={ele['unit']}
                  />
                ))}
            </div>
    
            <div className="home_row">
              {data.slice(7,10).map((ele) => (
                    <Product
                      id={ele['$id'] + 1}
                      title={ele['$id']}
                      image={ele['url']}
                      price={ele['mrp']}
                      quantity={ele['qty']}
                      unit={ele['unit']}
                    />
                  ))}
            </div>
    
            <div className="home_row">
              {data.slice(10).map((ele) => (
                    <Product
                      id={ele['$id'] + 1}
                      title={ele['$id']}
                      image={ele['url']}
                      price={ele['mrp']}
                      quantity={ele['qty']}
                      unit={ele['unit']}
                    />
                  ))}
            </div>
        </div> 
    </div>
  )
}

export default Home
