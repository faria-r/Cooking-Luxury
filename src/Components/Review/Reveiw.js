import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Reveiw = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar ml-32">
          <div className="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className='text-center'>
         {
          user?.uid?
           <>
           <Link to='/reviewform'>
         <button className="btn bg-rose-700 w-48 text-center">Add Review</button>
         </Link>
           </> :
           <>
           <Link to='/login'>
         <button className="btn bg-rose-700 w-48 text-center">Please Login To Add Review</button>
         </Link>
           </>
         }
          </div>
    </div>
  );
};

export default Reveiw;
