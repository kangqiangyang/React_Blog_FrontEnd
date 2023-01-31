import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function SinglePost({ post }) {
  const PF = "https://react-blog-api-ilfm.onrender.com/images/";
  return (
    <div className="flex-grow font-serif border rounded-lg overflow-hidden shadow-md flex flex-col mt-4 px-4 py-3 items-center w-full">
      {post?.photo && (
        <img
          src={PF + post?.photo}
          alt=""
          className="w-full mb-5 rounded-lg object-cover h-[30%] cursor-pointer hover:scale-105 transform ease-out duration-150"
        />
      )}

      <div className="flex justify-end w-full text-xl space-x-5 ">
        <AiFillEdit className="text-green-700 cursor-pointer hover:scale-125 transform duration-150 ease-out" />
        <MdDelete className="text-red-700 cursor-pointer hover:scale-125 transform duration-150 ease-out" />
      </div>

      <div className="w-full flex flex-col items-center gap-5">
        <h3 className="text-3xl flex-grow text-center font-semibold">
          {post?.title}
        </h3>

        <div className="flex items-center justify-between w-full mb-5 text-[#B39656] text-lg">
          <p>
            Author: <span className="font-bold">{post?.username}</span>
          </p>
          <p> {new Date(post?.createdAt).toDateString()}</p>
        </div>

        <p className="text-left w-full text-gray-600 ">{post?.description}</p>
      </div>
    </div>
  );
}

export default SinglePost;
