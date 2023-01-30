import React from "react";

function Header() {
  return (
    <div className="w-full h-[300px] md:h-[400px] relative flex  justify-center">
      <div className="absolute text-black font-[Josefin-Sans]  flex flex-col items-center mt-12">
        <p className="text-[20px] md:text-[40px] ">React & Node</p>
        <p className="text-[60px] md:text-[120px]">Blog</p>
      </div>
      <img
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="w-full h-full object-cover cursor-pointer"
      />
    </div>
  );
}

export default Header;
