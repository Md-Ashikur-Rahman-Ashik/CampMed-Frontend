import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const { signOutUser, user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"} className={"font-bold"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/available-camps"} className={"font-bold"}>
          Available Camps
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink className="font-bold" to="/login">
            Join Us
          </NavLink>
        </li>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutUser();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User logout successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="navbar bg-base-100 container p-6 mx-auto">
      <div className="navbar-start">
        <div className="dropdown z-50">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="text-green-500 max-w-min">
          <div className="flex items-center">
            <img
              className="rounded-xl w-1/2"
              src="https://i.ibb.co/TBGnCfF/camp-Med-Logo.png"
              alt=""
            />
            <Link to={"/"} className="btn btn-ghost text-xl font-bold">
              CampMed
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end dropdown flex justify-end md:justify-normal">
        {user && (
          <div className="dropdown dropdown-end flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt={user?.displayName}
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-50 p-2 shadow top-10 menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li className="text-center text-green-900 font-bold">
                {user?.displayName}
              </li>
              <li className="w-1/2 mx-auto text-black font-bold">
                <Link to={"/dashboard/organizer-profile"}>Dashboard</Link>
              </li>
              <li className="w-1/2 mx-auto">
                <Link
                  className="flex justify-center btn-ghost font-bold"
                  onClick={handleSignOut}
                >
                  LogOut
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
