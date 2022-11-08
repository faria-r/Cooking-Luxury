import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Home/Shared/Footer';
import Header from '../../Components/Home/Shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;