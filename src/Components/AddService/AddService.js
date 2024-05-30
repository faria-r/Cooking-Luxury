import React from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../HOOks/useTitle';

const AddService = () => {
  useTitle('Add Service')
  const  Swal = require('sweetalert2')
    const   handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Price = form.price.value;
        const picture = form.photo.value;
        const about = form.about.value;
        console.log(name,about);

        const service = {
            name,
            Price,
            picture,
            about
        }

        fetch('https://practice-three-server.vercel.app/services',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            form.reset();
            if(data.acknowledged === true){
                Swal.fire(
                    'Yes!',
                    'You Added the Service!',
                    'success'
                  )
           
            }
            
        })
    }
    return (
        <div>
          <div className="hero min-h-screen  pb-16 bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-rose-700 font-bold">
              Add A New Service
            </h1>
            <p className="py-6">
              Please Fill Free To Add Any Service Here
            </p>
          </div>
        
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form   onSubmit={handleAddService}>
              <div className="card-body ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="service Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      required
                      placeholder="Price"
                      className="input input-bordered"
                      
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PhotoURL</span>
                    </label>
                    <input
                     required
                      type="text"
                      name="photo"
                      placeholder="Your Photo URL"
                      className="input input-bordered"
                    />
                  </div>
                 
                
                  <textarea
                   required
                    className="textarea textarea-secondary"
                    name="about"
                    placeholder="Details about service"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn  bg-rose-700 px-12 mx-auto">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>  
        </div>
    );
};

export default AddService;