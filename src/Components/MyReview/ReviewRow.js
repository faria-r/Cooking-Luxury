import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const ReviewRow = ({ reviewInfo, handleDeleteReview }) => {
  const { service, photo, review, name, _id } = reviewInfo;
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress text-center bg-rose-600 w-56"></progress>
      </div>
    );
  }

  return (
    <div>
      <tr className="my-4">
        <th>
          <Link>
            <button
              onClick={() => handleDeleteReview(_id)}
              className="btn btn-circle btn-outline"
            >
              X
            </button>
          </Link>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{service}</td>
        <td>{review}</td>
        <th>
          <Link to={`/reviews/${_id}`}>
            <button className="btn border text-rose-600 btn-outline border-rose-800">
              Edit Review
            </button>
          </Link>
        </th>
      </tr>
    </div>
  );
};

export default ReviewRow;
