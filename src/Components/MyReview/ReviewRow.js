import React from "react";
import { Link } from "react-router-dom";

const ReviewRow = ({ reviewInfo, handleDeleteReview }) => {
  const { service, photo, review, name, _id } = reviewInfo;
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
          {/* <button  className="btn  border text-rose-600 btn-outline border-rose-800">Edit Review</button> */}

          <label
            htmlFor="my-modal"
            className="btn border text-rose-600 btn-outline border-rose-800"
          >
            Edit Review
          </label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Update Your Review Here</h3>
              <div className="block">
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="my-4">
                      <input
                        className="p-3 border border-rose-700 rounded-lg"
                        type="text"
                        defaultValue={name}
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <input
                    className="p-3 border border-rose-700 rounded-lg"
                    type="text"
                    defaultValue={service}
                    readOnly
                  />
                </div>
                <div className="my-4">
                  <input
                    className="p-3 border border-rose-700 rounded-lg"
                    type="text"
                    defaultValue={photo}
                  />
                </div>
                <div className="my-4">
                  <textarea
                    className="textarea textarea-secondary"
                    placeholder="Update Your reviews"
                    defaultValue={review}
                  ></textarea>
                </div>
              </div>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Update
                </label>
              </div>
            </div>
          </div>
        </th>
      </tr>
    </div>
  );
};

export default ReviewRow;
