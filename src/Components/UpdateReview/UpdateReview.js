import React, {  } from "react";
import { useLoaderData } from "react-router-dom";
import UpdateForm from "./UpdateForm";

const UpdateReview = () => {
  const reviews = useLoaderData();
  console.log(reviews);
  return (
    <div>
      {reviews.map((review) => (
        <UpdateForm key={review._id} reviews={review}></UpdateForm>
      ))}
    </div>
  );
};

export default UpdateReview;
