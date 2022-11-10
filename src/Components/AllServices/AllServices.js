import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../HOOks/useTitle";
import { AuthContext } from "../Context/AuthProvider";

const AllServices = () => {
  const {loading} = useContext(AuthContext);
  
  useTitle('Services')
  const allservices = useLoaderData();
  console.log(allservices);
  if(loading){
    return  <div className='text-center'>
            <progress className="progress text-center bg-rose-600 w-56"></progress>
        </div>
  }
  return (
    <PhotoProvider>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-16 w-3/4 mx-auto gap-4">
        {allservices.map((services) => (
          <SingleService key={services._id} services={services}></SingleService>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default AllServices;
