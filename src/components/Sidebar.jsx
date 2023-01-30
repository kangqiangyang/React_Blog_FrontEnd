import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";

function Sidebar() {
  const [Categories, setCategories] = useState();
  useEffect(() => {
    const fetchCategories = async () => {
      const category = await axios
        .get("https://react-blog-api-ilfm.onrender.com/api/category")
        .then((res) => setCategories(res.data.category));

      return category;
    };
    fetchCategories();
  }, []);

  // console.log(Categories);
  return (
    <div className="hidden lg:inline-flex bg-[#fdfbfb] flex-col items-center w-[50%] h-full sticky mt-3 rounded-lg top-[70px] space-y-7 p-4">
      <div className="flex flex-col items-center gap-5 w-full">
        <h3 className="text-sm md:text-lg whitespace-nowrap uppercase font-semibold w-[60%] md:w-[40%] text-center border-y-4  py-2">
          About Me
        </h3>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
          className="object-cover w-[80%]"
        />
        <p className="hidden md:inline lg:px-7 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>

      <div className="flex flex-col items-center w-full">
        <h3 className="text-sm md:text-lg whitespace-nowrap uppercase font-semibold w-[60%] md:w-[40%] text-center border-y-4  py-2">
          Categories
        </h3>

        <ul className="text-center space-y-5 text-sm lg:text-base">
          {Categories?.map((category) => (
            <li
              key={category._id}
              className="inline-block w-[50%] cursor-pointer text-lg tracking-[2px] hover:scale-105 transform duration-150 hover:font-semibold ease-in"
            >
              {category?.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col w-full items-center gap-5">
        <h3 className="text-sm md:text-lg whitespace-nowrap uppercase font-semibold w-[60%] md:w-[40%] text-center border-y-4  py-2">
          Follow Us
        </h3>
        <div className="flex items-center space-x-2 text-2xl">
          <FaFacebookSquare className="cursor-pointer" />
          <FaTwitterSquare className="cursor-pointer" />
          <FaInstagramSquare className="cursor-pointer" />
          <FaPinterestSquare className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
