import React, { useContext, useEffect, useState } from "react";
import {} from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import ReviewRow from "./ReviewRow";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const notify = () => toast("Deleted SuccessFully");
  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, [user?.email]);

  const handleDeleteReview = (id)=>{
    fetch(`http://localhost:5000/delete/${id}`,{
       method:'DELETE', 
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.deletedCount>0){
        // notify();
        alert('Deleted SuccessFully!')
        const remaining = reviews.filter(review => review._id !== id);
        setReviews(remaining)
        }
    })
    console.log('deleted',id)

  }

  if (reviews.length > 0) {
    return(
        <div className="overflow-x-auto w-3/4 my-8 border border-rose-500 rounded-2xl mx-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Your Reviews</th>
              
            </tr>
          </thead>
          <tbody>
            {reviews.map((reviewInfo) => (
              <ReviewRow
              key={reviewInfo._id}
              reviewInfo={reviewInfo}
              handleDeleteReview={handleDeleteReview}
              ></ReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    );
   
  } else {
    return(  
     <div className="hero min-h-screen">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-rose-800  font-bold">No Reviews Were Added!</h1>
            </div>
          </div>
        </div>
    );
   
  }
};

export default MyReviews;