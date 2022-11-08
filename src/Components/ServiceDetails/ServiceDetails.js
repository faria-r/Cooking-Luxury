import React, { } from "react";
import {  useLoaderData } from "react-router-dom";

import Reveiw from "../Review/Reveiw";
import ServiceInfo from "../ServiceInfo/ServiceInfo";


const ServiceDetails = () => {
  const services = useLoaderData();
 
  return (
    <div>
      {
        services.map(service => <ServiceInfo
        key={service._id}
        service={service}
        ></ServiceInfo>)
      }
     
      <div>
        <h2 className="text-6xl text-rose-600 text-center my-8 font-semibold ">
          Reviews
        </h2>
        {
        services.map(service => <Reveiw
        key={service._id}
        service={service}
        ></Reveiw>)
      }
      </div>
     
     
    </div>
  );
};

export default ServiceDetails;
