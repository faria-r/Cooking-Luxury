import React from 'react';
import Services from '../Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <h2 className='text-6xl text-rose-600 text-center my-4 font-semibold '>Services</h2>
           <div className='my-16'>
           <Services></Services>
           </div>
        </div>
    );
};

export default Home;