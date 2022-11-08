import { ErrorResponse } from '@remix-run/router';
import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setServices(data)
        })
    },[])
    return (
        <div className='grid grid-cols-2 w-3/4 mx-auto gap-4'>
        {
            services.map(service => 
            <ServicesCard 
            key={service._id}
            service={service}
            ></ServicesCard>)
        }

        </div>
    );
};

export default Services;