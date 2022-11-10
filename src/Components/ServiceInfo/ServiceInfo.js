import React from 'react';
import { Link} from 'react-router-dom';
import { PhotoView } from "react-photo-view";
import useTitle from '../../HOOks/useTitle';

const ServiceInfo = ({service}) => {
  useTitle('Services')
    const {_id,Price,picture,about,name} = service;
    return (
        <div>
        <div className="hero mt-16 w-3/4 mx-auto h-full p-2 bg-base-200">
          <div className="hero-content flex-col lg:flex-col">
          <PhotoView src={picture}>
            <img src={picture} alt=""  className="w-96 h-64 rounded-lg shadow-2xl" />
          </PhotoView>
            <div className="">
              <h1 className="text-3xl font-bold">{name}</h1>
              <p className="py-6">{about}</p>
              <p className="py-6">Price: ${Price}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceInfo;