import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <div className="navbar bg-transparent  z-20 sticky top-0   text-rose-700">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <img
                  src="https://i.ibb.co/GttwYvd/logo-svg.png"
                  alt=""
                  className="w-16"
                />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-200 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {user?.uid ? (
              <>
                <li>
                  <Link to="/myReviews">My reveiw</Link>
                </li>
                <li>
                  <Link to="/addservice">Add Services</Link>
                </li>
                <li>
                  <Link>
                    <button
                      onClick={handleLogOut}
                      className="btn bg-rose-700 tetx-white hover:bg-rose-500"
                    >
                      LogOut
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <button className="btn bg-rose-700 tetx-white hover:bg-rose-500">
                      LogIn
                    </button>
                  </Link>
                </li>
              </>
            )}
            </ul>
          </div>
          <Link to='/'>
                {" "}
                <img
                  src="https://i.ibb.co/GttwYvd/logo-svg.png"
                  alt=""
                  className="w-16 lg:ml-20 hidden lg:block"
                />
              </Link>
        </div>
        <div className="navbar-center hidden bg-transparent lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
           
            {user?.uid ? (
              <>
                <li>
                  <Link to="/myReviews">My reveiw</Link>
                </li>
                <li>
                  <Link to="/addservice">Add Services</Link>
                </li>
                <li>
                  <Link>
                    <button
                      onClick={handleLogOut}
                      className="btn bg-rose-700 tetx-white hover:bg-rose-500"
                    >
                      LogOut
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <button className="btn bg-rose-700 tetx-white hover:bg-rose-500">
                      LogIn
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
