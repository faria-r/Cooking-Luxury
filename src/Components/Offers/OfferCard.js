import React from 'react';

const OfferCard = ({offer}) => {
    const {name,Price,picture,about} = offer;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border border-rose-600 h-auto">
  <figure><img src={picture} alt="Shoes"  className='w-96 h-48'/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{about.slice(0,150)+'...'}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-rose-700 w-24">{Price}</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default OfferCard;