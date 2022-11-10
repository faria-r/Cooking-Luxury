import React from 'react';

const ReviewCard = ({reviewInfo}) => {
    const {name,photo,review,date,time,email} = reviewInfo;
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl border-2 border-rose-600 rounded-xl p-3">
        <div className="avatar ml-32">
          <div className="w-24 rounded-full">
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Email: {email}</p>
          <p>Review: {review}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
        </div>
      </div> 
        </div>
    );
};

export default ReviewCard;