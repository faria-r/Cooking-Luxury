import React, { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

import Reveiw from "../Review/Reveiw";
import ServiceInfo from "../ServiceInfo/ServiceInfo";


const ServiceDetails = () => {
  const {loading} = useContext(AuthContext)
  const services = useLoaderData();
  if(loading){
    return  <progress className="progress bg-rose-600 w-56"></progress>
}
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
