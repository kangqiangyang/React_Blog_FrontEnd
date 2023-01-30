import React from "react";

function Post() {
  return (
    <div className="flex flex-col items-center cursor-pointer shadow-md hover:shadow-xl rounded-lg  overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
        alt=""
        className="w-full object-cover h-[60%] hover:scale-105 transform ease-out duration-150"
      />

      <div className="flex flex-col items-center gap-3 my-5">
        <p className="text-lg text-gray-500">Category</p>
        <h3 className="text-2xl font-semibold">Title</h3>
        <p className="text-lg text-gray-500">Time</p>
        <p className="text-sm text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
    </div>
  );
}

export default Post;
