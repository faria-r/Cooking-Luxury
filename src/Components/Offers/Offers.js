import React, { useEffect, useState } from "react";
import OfferCard from "./OfferCard";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("https://practice-three-server.vercel.app/offers")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center">
        <button className="btn bg-gray-800  shadow-lg shadow-rose-700/50 text-xl text-white hover:shadow-green-700 hover:text-rose-700 w-48 mt-24 -rotate-45">
          Food
        </button>
        <button className="btn bg-gray-800 border-rose-700 text-xl text-white hover:shadow-green-700 hover:text-rose-700 w-48 mt-24 ml-8 shadow-lg shadow-rose-700/50  -rotate-45">
          Juice
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[90vw] mx-auto gap-4 mt-24 ">
        {offers.map((offer) => (
          <OfferCard key={offer._id} offer={offer}></OfferCard>
        ))}
      </div>
    </div>
  );
};

export default Offers;
