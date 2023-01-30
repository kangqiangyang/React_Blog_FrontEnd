import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function SinglePost() {
  return (
    <div className="flex-grow font-serif flex flex-col px-4 py-3 items-center w-full">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
        alt=""
        className="w-full mb-5 rounded-lg object-cover h-[30%] cursor-pointer hover:scale-105 transform ease-out duration-150"
      />
      <div className="flex justify-end w-full text-xl space-x-5 ">
        <AiFillEdit className="text-green-700 cursor-pointer hover:scale-125 transform duration-150 ease-out" />
        <MdDelete className="text-red-700 cursor-pointer hover:scale-125 transform duration-150 ease-out" />
      </div>

      <div className="w-full flex flex-col items-center gap-5">
        <h3 className="text-3xl flex-grow text-center font-semibold">Title</h3>

        <div className="flex items-center justify-between w-full mb-5 text-[#B39656] text-lg">
          <p>
            Author: <span className="font-bold">Yang</span>
          </p>
          <p>Time</p>
        </div>

        <p className="text-left w-full text-gray-600 ">
          Cursor The MongoDB Compass Find operation opens a cursor to the
          matching documents of the collection based on the find query. For more
          information on sampling in MongoDB Compass, see the Compass FAQ. Read
          Isolation For reads to replica sets and replica set shards, read
          concern allows clients to choose a level of isolation for their reads.
          For more information, see Read Concern. Query Result Format When you
          run a find operation with a MongoDB driver or mongosh, the command
          returns a cursor that manages query results. The query results are not
          returned as an array of documents.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
