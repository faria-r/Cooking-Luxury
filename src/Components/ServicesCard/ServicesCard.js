import React from 'react';

const ServicesCard = ({service}) => {
    const {_id,Price,picture,about,name} = service;
    return (
        <div>
            <div className="hero w-full h-96 mx-auto p-5 bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={picture} alt="" className="w-48 rounded-lg shadow-2xl" />
    <div className='w-1/2'>
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="py-6">{about.slice(0,100) + '...'}</p>
      <p className="py-6">Price: ${Price}</p>
      <button className="btn btn-primary">Veiw Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;