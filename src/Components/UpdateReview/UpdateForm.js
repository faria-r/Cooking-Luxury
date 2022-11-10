import React, {}from "react";
import Swal from "sweetalert2";
const UpdateForm = ({ reviews }) => {
  const Swal = require("sweetalert2");
  const { name, email, service, photo, review, id, _id } = reviews;



  const handleUpdateData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const review = form.review.value;
    const service = form.serviceName.value;
    console.log(photo, service, name);
    const Newreviews = {
      name,
      photo,
      review,
      service,
    };
    fetch(`https://practice-three-server.vercel.app/Upreviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Newreviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        if (data.acknowledged === true) {
          console.log('inside m');
          Swal.fire("Yes!", "Updated SuccessFully!", "success");
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-rose-700 font-bold">
              Update Your Review!
            </h1>
            <p className="py-6">
              Please Fill The Form Below To Update Your Valuable Review On
              <br />
              <span className="text-xl text-rose-700 font-bold">{service}</span>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateData}>
              <div className="card-body ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
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
                      defaultValue={email}
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
                      defaultValue={photo}
                      placeholder="Your Photo URL"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service</span>
                    </label>
                    <input
                      type="text"
                      name="serviceName"
                      placeholder=""
                      defaultValue={service}
                      readOnly
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Service ID</span>
                    </label>
                    <input
                      type="text"
                      name="id"
                      placeholder=""
                      defaultValue={id}
                      readOnly
                      className="input input-bordered"
                    />
                  </div>
                  <textarea
                    className="textarea textarea-secondary"
                    name="review"
                    placeholder="Review Goes Here"
                    defaultValue={review}
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
