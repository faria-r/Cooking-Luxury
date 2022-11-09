import React from "react";
import { Link } from "react-router-dom";

const ReviewRow = ({ reviewInfo, handleDeleteReview, handleUpdate }) => {
  const { service, photo, review, name, _id } = reviewInfo;
  console.log(_id)

  const handleUpdateData =event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const review = form.review.value;
    const service = form.service.value;
    console.log(photo,service,name);
    const reviews = {
      name,
      photo,
      review,
      service
    }
handleUpdate(reviews,_id);
console.log(_id)
    // fetch(`http://localhost:5000/reviews/${_id}`,{
    //   method:"PATCH",
    //   headers:{
    //     'content-type':'application/json'
    //   },
    //   body:JSON.stringify(reviews)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data)
    //   if(data.modifiedCount>0){

    //   }
    // })
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
          <label
            htmlFor="my-modal"
            className="btn border text-rose-600 btn-outline border-rose-800"
          >
            Edit Review
          </label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <form onSubmit={handleUpdateData}>
              <div className="modal-box">
                <h3 className="font-bold text-lg">Update Your Review Here</h3>
                <div className="block">
                  <div>
                    <div className="flex items-center space-x-3">
                      <div className="my-4">
                        <input
                          className="p-3 border border-rose-700 rounded-lg"
                          type="text"
                          name="name"
                          defaultValue={name} readOnly
                          placeholder="name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    <input
                      className="p-3 border border-rose-700 rounded-lg"
                      type="text"
                      name="service"
                    />
                  </div>
                  <div className="my-4">
                    <input
                      className="p-3 border border-rose-700 rounded-lg"
                      type="text"
                      name="photo"
                    />
                  </div>
                  <div className="my-4">
                    <textarea
                      name="review"
                      className="textarea textarea-secondary"
                      placeholder="Update Your reviews"
                    ></textarea>
                  </div>
                </div>
                <div className="modal-action">
                  <button type="submit" className="btn">
                    <label htmlFor="my-modal" className="btn">
                      Update
                    </label>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </th>
      </tr>
    </div>
  );
};

export default ReviewRow;
