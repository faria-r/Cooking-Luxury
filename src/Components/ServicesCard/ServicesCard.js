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
      <div className="w-full border border-rose-500 rounded-2xl shadow-lg shadow-rose-600 lg:h-[80vh] mx-auto lg:px-4 py-2 bg-base-200">
   
        <div className="flex-col justify-around items-center">
          <div>
          <PhotoView src={picture}>
            <img src={picture} alt="" className="w-3/4 h-[32vh] mx-auto rounded-lg shadow-2xl" />
          </PhotoView>
          </div>
          <div className="">
          <h1 className="text-3xl mt-6 mb-4 font-mono font-bold">{name}</h1>
            <p className="pb-4">{about.slice(0, 100) + "..."}</p>
            <p className="py-2">Price: ${Price}</p>
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
