import React from "react";
import { useContext } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaSearch,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/Context";

function Topbar() {
  const location = useLocation();
  const { user, dispatch } = useContext(Context);
  // console.log(location);
  // console.log(user);

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="w-full h-14 z-50 bg-white sticky top-0  font-[Josefin-Sans] border-b">
      <div className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
        {/* left */}
        <div className="hidden lg:inline">
          <div className="flex items-center space-x-2 text-2xl">
            <FaFacebookSquare className="cursor-pointer" />
            <FaTwitterSquare className="cursor-pointer" />
            <FaInstagramSquare className="cursor-pointer" />
            <FaPinterestSquare className="cursor-pointer" />
          </div>
        </div>

        {/* middle */}
        <div className="mr-2 md:mx-5">
          <ul className="flex items-center space-x-2 lg:space-x-10 text-sm md:text-base">
            <a href="/">
              <li
                className={`cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500 ${
                  pathMatchRoute("/") &&
                  `underline underline-offset-4 font-semibold`
                }`}
              >
                HOME
              </li>
            </a>
            <li
              className={`cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500 ${
                pathMatchRoute("/about") &&
                `underline underline-offset-4 font-semibold`
              }`}
            >
              ABOUT
            </li>
            <li
              className={`cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500 ${
                pathMatchRoute("/contact") &&
                `underline underline-offset-4 font-semibold`
              }`}
            >
              CONTACT
            </li>
            <a href="/write">
              <li
                className={`cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500 ${
                  pathMatchRoute("/write") &&
                  `underline underline-offset-4 font-semibold`
                }`}
              >
                WRITE
              </li>
            </a>

            {user && (
              <li
                onClick={handleLogout}
                className="cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500"
              >
                LOGOUT
              </li>
            )}
          </ul>
        </div>

        {/* right */}
        <div className="flex items-center space-x-2">
          {user ? (
            <>
              <a href={`/profile/${user._id}`}>
                <img
                  src={
                    user?.profilePicture ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                  alt="profile pic"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </a>
            </>
          ) : (
            <div className="text-sm md:text-base space-x-2 md:space-x-5">
              <a href="/login">
                <span
                  className={`cursor-pointer uppercase hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500 ${
                    pathMatchRoute("/login") &&
                    `underline underline-offset-4 font-semibold`
                  }`}
                >
                  Login
                </span>
              </a>

              <a href="/register">
                <span
                  className={`cursor-pointer uppercase hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500 ${
                    pathMatchRoute("/register") &&
                    `underline underline-offset-4 font-semibold`
                  }`}
                >
                  Register
                </span>
              </a>
            </div>
          )}

          <FaSearch className="cursor-pointer text-lg hidden md:inline" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
