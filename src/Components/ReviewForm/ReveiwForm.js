import React, { } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewDetails from "./ReviewDetails";
import Swal from 'sweetalert2';


const ReveiwForm = () => {
  const reviewItem = useLoaderData();
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
    console.log(name, email, photo, review);

    const reviews = {
      name,
      email,
      photo,
      review,
      service,
      id
    };
    fetch('http://localhost:5000/reviews',{
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
          )
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
