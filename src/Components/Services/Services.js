import React, { useContext, useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContext } from '../Context/AuthProvider';


const Services = () => {
 
    const [services,setServices] = useState([]);
    const {loading} = useContext(AuthContext)
    useEffect(()=>{
        fetch('https://practice-three-server.vercel.app/services')
        .then(res => res.json())
        .then(data =>{
            setServices(data)
        })
    },[]);
    if(loading){
        return <progress className="progress text-center bg-rose-600 w-56"></progress>
    }
    return (
       <PhotoProvider>
         <div className='grid grid-cols-1 lg:grid-cols-2  w-3/4 mx-auto gap-8'>
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