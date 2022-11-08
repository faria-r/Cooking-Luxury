import React from "react";
import { Link } from "react-router-dom";

const ReviewRow = ({reviewInfo,handleDeleteReview}) => {
    const {service,photo,review,name,_id} = reviewInfo;
  return (
    <div>
      <tr className="my-4">
        <th>
          <Link>
            <button onClick={()=>handleDeleteReview(_id)} className="btn btn-circle btn-outline">X</button>
          </Link>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photo}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
             
            </div>
          </div>
        </td>
        <td>
         {service}
        </td>
        <td>{review}</td>
        <th>
          <button className="btn  border text-rose-600 btn-outline border-rose-800">Edit Review</button>
        </th>
      </tr>
    </div>
  );
};

export default ReviewRow;
