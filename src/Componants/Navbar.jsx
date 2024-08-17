import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-fuchsia-500 font-bold border border-fuchsia-500 mr-3 scale-105"
              : "font-bold mr-3 text-indigo-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-fuchsia-500 font-bold border border-fuchsia-500 mr-3 scale-105"
              : "font-bold mr-3 text-indigo-500"
          }
        >
         ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-fuchsia-500 font-bold border border-fuchsia-500 mr-3 scale-105"
              : "font-bold mr-3 text-indigo-500"
          }
        >
         CONTACT
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-lg rounded-2xl navbar z-[60]   md:px-16">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown z-[99]">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-gradient-to-r  from-indigo-800 to-fuchsia-500"
            >
              {navLink}
            </ul>
          </div>
          <Link to='/' className="text-xl font-black text-gray-800">GADGET GALAXY</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end z-[10] flex md:flex-row flex-col gap-4 ">
          
          
          {/*user singed in information */}
          {user ? (
            <div
              className="dropdown dropdown-end tooltip tooltip-left  "
              data-tip={user.displayName}
            >
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/vY5bFQR/2151033973-min.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[99] px-2 py-10 shadow-4xl shadow  rounded-box bg-gradient-to-t  from-indigo-800 to-fuchsia-500 md:w-64 border   "
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/vY5bFQR/2151033973-min.jpg"
                  }
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square mb-6"
                />
                <li>
                  <span className="btn mb-3 bg-gradient-to-r  from-indigo-800 to-fuchsia-500">
                    {user?.email || "email not found"}
                  </span>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="btn btn-sm btn-error text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-lime-500  rounded-xl text-white px-8">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
