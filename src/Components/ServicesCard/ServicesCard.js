import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PhotoView } from "react-photo-view";
import { AuthContext } from "../Context/AuthProvider";

const ServicesCard = ({ service }) => {
  const {loading} = useContext(AuthContext)
  const { _id, Price, picture, about, name } = service;
  if(loading){
    return  <div className='text-center'>
            <progress className="progress text-center bg-rose-600 w-56"></progress>
        </div>
  }
  return (
    <div>
      <div className="hero w-full lg:h-96 mx-auto lg:p-5 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <PhotoView src={picture}>
            <img src={picture} alt="" className="w-48 rounded-lg shadow-2xl" />
          </PhotoView>
          <div className="w-1/2">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="py-6">{about.slice(0, 100) + "..."}</p>
            <p className="py-6">Price: ${Price}</p>
            <Link to={`/details/${_id}`}>
              <button className="btn bg-rose-700">Veiw Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
