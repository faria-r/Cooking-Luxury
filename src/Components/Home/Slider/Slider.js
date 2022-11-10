import React from "react";
const Slider = () => {
  return (
    <div className="">
      <div className="carousel w-3/4 mx-auto shadow-xl mt-4 mb-8">
        <div id="slide1" className="carousel-item img relative w-full">
          <img
            alt=""
            className="w-full h-96"
            src="https://i.ibb.co/mG5xZtD/main.jpg"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item img relative w-full">
          <img
            alt=""
            className=" w-full h-96"
            src="https://i.ibb.co/DkqHDd7/gallary-10.jpg"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item img relative w-full">
          <img
            alt=""
            className=" w-full h-96"
            src="https://i.ibb.co/4NGz6S9/gallary-4.jpg"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
