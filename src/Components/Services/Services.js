import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";


const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://practice-three-server.vercel.app/services')
        .then(res => res.json())
        .then(data =>{
            setServices(data)
        })
    },[])
    return (
       <PhotoProvider>
         <div className='grid grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto gap-4'>
        {
            services.map(service => 
            <ServicesCard 
            key={service._id}
            service={service}
            ></ServicesCard>)
        }

        </div>
       </PhotoProvider>
    );
};

export default Services;