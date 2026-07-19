import { use } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-products">All Products</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/my-products">My Products</NavLink>
          </li>
          <li>
            <NavLink to="/my-bids">My Bids</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <NavLink to="/" className="text-xl font-semibold">
          Smart<span className="text-primary">Deals</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button className="btn btn-primary" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <div className="flex gap-2">
            <Link to={"login"}>
              {" "}
              <button className="btn btn-outline">Log In</button>
            </Link>
            <Link to={"register"}>
              {" "}
              <button className="btn btn-primary">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
