import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaSearch,
} from "react-icons/fa";

function Topbar() {
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
            <li className="cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500">
              HOME
            </li>
            <li className="cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500">
              ABOUT
            </li>
            <li className="cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500">
              CONTACT
            </li>
            <li className="cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500">
              WRITE
            </li>
            <li className="cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 transform duration-150 text-gray-500">
              LOGOUT
            </li>
          </ul>
        </div>

        {/* right */}
        <div className="flex items-center space-x-2">
          <img
            src="https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66.jpg"
            alt="profile pic"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
          <FaSearch className="cursor-pointer text-lg hidden md:inline" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
