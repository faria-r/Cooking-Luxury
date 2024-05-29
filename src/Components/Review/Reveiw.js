import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import ReviewCard from "./ReviewCard";

const Reveiw = ({service}) => {
  const {_id} = service;
  const { user } = useContext(AuthContext);
  const [reviews,setReviews] = useState([]);
  useEffect(()=>{
    fetch(`https://practice-three-server.vercel.app/review/${_id}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      setReviews(data)
    })
  },[])
  return (
    <div>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-8 w-[90vw] mx-auto">
     {
        reviews.map(reviewInfo => <ReviewCard
        key={reviewInfo._id}
        reviewInfo={reviewInfo}
        ></ReviewCard>)
      }
     </div>
      <div className='text-center'>
         {
          user?.uid?
           <>
           <Link to={`/reviewform/${_id}`}>
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
