import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const ReveiwForm = () => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const review = form.review.value;
    console.log(name, email, photo, review);

    const reviews = {
      name,
      email,
      photo,
      review,
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
        console.log(data)
    })
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-rose-700 font-bold">
              Happy To Get Your Review!
            </h1>
            <p className="py-6">
              Please Fill The Form Below To Give Your Valuable Review.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleAddReview}>
              <div className="card-body ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="email"
                      className="input input-bordered"
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PhotoURL</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <textarea
                    className="textarea textarea-secondary"
                    name="review"
                    placeholder="Review Goes Here"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReveiwForm;
