import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import DatePicker from 'react-date-picker';
import Swal from "sweetalert2";
const Order = () => {
    const [value, onChange] = useState(new Date());
    const Swal = require("sweetalert2");
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = ()=>{
    Swal.fire("Yes!", "Order Placed SuccessFully!", "success");
  }
  return (
    <div className="mt-16 w-3/4 mx-auto rounded-2xl">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/tHnxJ8w/book-table-img.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full mx-auto">
            <h1 className="text-white text-xl lg:text-6xl font-bold mb-8">
              Book An Order!
            </h1>
            <div className=" flex flex-col lg:flex-row p-3 gap-4 justify-evenly">
              <input
                className="p-4 mb-4 border border-white text-xl text-white  bg-transparent "
                placeholder=""
                defaultvalue={user?.email}
                type="email"
                name=""
                id=""
              />
              <input
                className="p-4 mb-4 border border-white text-xl text-white  bg-transparent"
                placeholder="Enter Service Name"
                type="text"
                name=""
                id=""
              />
              <DatePicker onChange={onChange} value={value} />
            </div>
            <button onClick={handlePlaceOrder} className="btn my-8 bg-rose-700">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
