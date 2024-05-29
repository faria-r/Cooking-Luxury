import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Home/Shared/Footer';
import Header from '../../Components/Home/Shared/Header';

const Main = () => {
    return (
        <div>
            <div className='relative'>
            <Header></Header>
            </div>
           <div>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;