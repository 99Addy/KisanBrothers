import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''/>

            <div className="home_row">
            <Product id="12321341" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer withK-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg" price='29.99' rating={4}/>
            
            <Product id='49538094' title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer withK-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} reating={4}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"/>
            </div>
    
            <div className="home_row">
            <Product id='49538094' title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer withK-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} reating={4}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"/>
            <Product id='49538094' title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer withK-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} reating={4}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"/>
            <Product id='49538094' title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer withK-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} reating={4}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"/>
            </div>
    
            <div className="home_row">
            <Product id='49538094' title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer withK-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} reating={4}
            image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"/>
            </div>
        </div> 
    </div>
  )
}

export default Home
