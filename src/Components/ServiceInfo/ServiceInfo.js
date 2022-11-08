import React from 'react';
import { Link } from 'react-router-dom';

const ServiceInfo = ({service}) => {
    const {_id,Price,picture,about,name} = service;
    return (
        <div key={service._id} service={service}>
        <div className="hero mt-16 w-3/4 mx-auto h-full p-2 bg-base-200">
          <div className="hero-content flex-col lg:flex-col">
            <img
              src={service.picture}
              alt=""
              className="w-96 h-64 rounded-lg shadow-2xl"
            />
            <div className="">
              <h1 className="text-3xl font-bold">{service.name}</h1>
              <p className="py-6">{service.about}</p>
              <p className="py-6">Price: ${service.Price}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceInfo;