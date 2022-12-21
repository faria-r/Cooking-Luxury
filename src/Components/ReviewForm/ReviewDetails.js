import React, { useContext, useState } from 'react';
import { AuthContext } from "../Context/AuthProvider";
import DateTimePicker from 'react-datetime-picker';

const ReviewDetails = ({item,handleAddReview}) => {
  const [value, onChange] = useState(new Date());
    const { user } = useContext(AuthContext);
    const{name, _id} = item;
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-rose-700 font-bold">
              Happy To Get Your Review!
            </h1>
            <p className="py-6">
              Please Fill The Form Below To Give Your Valuable Review On <br />
              <span className="text-xl text-rose-700 font-bold">
              {name}
              </span>
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
                      defaultValue={name}
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
                      defaultValue={_id}
                     readOnly
                      className="input input-bordered"
                    />
                  </div>
                  <textarea
                    className="textarea textarea-secondary"
                    name="review"
                    placeholder="Review Goes Here"
                  ></textarea>
                      <DateTimePicker name='Date' onChange={onChange} value={value} />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-rose-700 px-12 mx-auto">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
            </div>
        </div>
    );
};

export default ReviewDetails;