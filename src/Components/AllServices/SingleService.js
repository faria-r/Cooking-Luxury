import React from "react";
import { Link } from "react-router-dom";
import { PhotoView } from "react-photo-view";

const SingleService = ({ services }) => {
  const { name, _id, Price, picture, about } = services;
  return (
    <div>
      <div className="hero w-full h-full bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <PhotoView src={picture}>
            <img src={picture} alt="" className="w-96 h-64" />
          </PhotoView>
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="py-6">{about.slice(0, 300) + "..."}</p>
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

export default SingleService;
