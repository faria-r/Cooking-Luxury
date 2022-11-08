import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
const navigate = useNavigate()
    const handlesignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/')
        })
        .catch(e => console.error(e))
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up!</h1>
    </div>
    <div className="card flex-shrink-0 h-full px-8 w-full max-w-sm shadow-2xl bg-base-100">
     <form onSubmit={handlesignUp}>
     <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name"placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-rose-700 hover:bg-white text-black">Sign Up</button>
          <p>Already Have an Account? Please <Link to='/login' className='text-blue-400'>Login</Link></p>
        </div>
      </div>
     </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Register;