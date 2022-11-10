import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../HOOks/useTitle';
import Offers from '../Offers/Offers';
import Order from '../Order/Order';
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
          <div className='text-center'>
         <Link to='/allservices'>
         <button className="btn bg-rose-700 w-48 text-center">See All!</button>
         </Link>
          </div>
          <div className='text-center'>
          <h2 className='text-6xl text-rose-600  my-8 font-semibold '>Offers</h2>
          <p><span className='text-2xl text-rose-600'>Faria's Cooking Luxury</span> Care About Beloved Customers.Book An Order and Get a <span className='text-xl text-rose-600'>Free Drinks</span>!</p>
          </div>
          <Offers></Offers>
          <div>
            <Order></Order>
          </div>
        </div>
    );
};

export default Home;