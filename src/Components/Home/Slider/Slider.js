import React from "react";
import black from "../../../assests/black.jpg";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="bg-black">
      <img
        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="h-[100vh] w-[100%] object-cover opacity-[0.4]"
      />
      <div className="w-[90%]  text-white  text-start absolute top-[32%] left-8  mx-auto">
        <h2
          data-aos="fade-left"
          data-aos-duration="2000"
          className="  mt-4 text-[30px] lg:text-[70px] bg-gradient-to-r from-rose-700 via-white to-rose-700 inline-block text-transparent bg-clip-text  font-semibold font-mono"
        >
          Cooking Luxury
        </h2>

        <p className="my-2  text-2xl font-mono">
          Where every flavor tells a story
        </p>
        <div className="mt-12 mb-4  font-serif text-xl">
          {" "}
          <Link to="/allservices">
            <button className="btn bg-rose-700 tetx-white hover:bg-rose-500">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
