import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../HOOks/useTitle";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const { loginwithGoogle, logIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle('Login')
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  //google auth provider
  const AuthProvider = new GoogleAuthProvider();

  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress text-center bg-rose-600 w-56"></progress>
      </div>
    );
  }
  //login with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const ExistingUser = {
          email: user.email,
        };

        //get a token for user
        fetch("https://practice-three-server.vercel.app/jwt", {
          method: "POSt",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ExistingUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
        form.reset();
      })
      .catch((e) => console.error(e));
  };
  //log in with google
  const handleLoginWithGoogle = () => {
    loginwithGoogle(AuthProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const ExistingUser = {
          email: user.email,
        };

        //get a token for user
        fetch("https://practice-three-server.vercel.app/jwt", {
          method: "POSt",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ExistingUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 h-full px-8 pb-6 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-rose-700 hover:bg-white text-black">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <button
              onClick={handleLoginWithGoogle}
              className="btn bg-rose-500 hover:bg-white text-black "
            >
              Login With Google
            </button>
            <p>
              Don't Have an Account? Please{" "}
              <Link to="/register" className="text-blue-400">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
