import React, { } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReviewDetails from "./ReviewDetails";
import Swal from 'sweetalert2';


const ReveiwForm = () => {
  const reviewItem = useLoaderData();
  const navigate = useNavigate();
  const  Swal = require('sweetalert2')
  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const service = form.serviceName.value;
    const id = form.id.value;
    const review = form.review.value;
    let Date = form.Date.value;
    const date = Date.slice(0,10);
    const time = Date.slice(11,16);
    console.log(name, email, photo, review,date,time);

    const reviews = {
      name,
      email,
      photo,
      review,
      service,
      date,
      time,
      id
    };
    fetch('https://practice-three-server.vercel.app/reviews',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(reviews)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.acknowledged){
          Swal.fire(
            'Yes!',
            'Review Added SuccessFully!',
            'success'
          );
          navigate('/myReviews')
        }
        form.reset();
       
    })
  };
  return (
    <div>
     {
        reviewItem.map(item => <ReviewDetails
        key={item._id}
        item={item}
        handleAddReview={handleAddReview}
        >
        </ReviewDetails>)
     }
    </div>
  );
};

export default ReveiwForm;
