import React from 'react';

const ReviewCard = ({reviewInfo}) => {
    const {name,photo,review,date,time,email} = reviewInfo;
    return (
        <div>
           <div className="card lg:w-[25vw] lg:h-[65vh] mx-auto bg-base-100 shadow-xl border-2 border-rose-600 rounded-xl p-3">
        <div className="avatar">
          <div className="w-24 mx-auto rounded-full">
            <img src={photo} alt="" />
          </div>
        </div>
        <div className="card-body items-center text-center p-2">
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