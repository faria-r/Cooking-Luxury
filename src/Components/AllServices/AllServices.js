import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllServices = () => {
  const allservices = useLoaderData();
  console.log(allservices);
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
