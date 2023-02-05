import axios from "axios";
import React, { useContext, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Context } from "../context/Context";

function SinglePost({ post }) {
  // const PF = "https://react-blog-api-ilfm.onrender.com/images/";
  const { user } = useContext(Context);
  const [updateMode, setUpdateMode] = useState(false);
  const [PostTitle, setPostTitle] = useState(post?.title);
  const [PostDescription, setPostDescription] = useState(post?.description);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://react-blog-api-ilfm.onrender.com/api/posts/${post._id}`,
        {
          data: {
            username: user.username,
          },
        }
      );
      window.location.replace("/");
    } catch (error) {}
  };
  const handleEdit = async (e) => {
    try {
      await axios.put(
        `https://react-blog-api-ilfm.onrender.com/api/posts/${post._id}`,
        {
          username: user.username,
          title: PostTitle,
          description: PostDescription,
        }
      );
      setUpdateMode(false);
      // window.location.replace("/");
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleEdit}
      className="flex-grow font-serif h-screen border rounded-lg overflow-hidden shadow-md flex flex-col mt-4 px-4 py-3 items-center w-full"
    >
      {post?.photo && (
        <img
          src={post?.photo}
          alt=""
          className="w-full mb-5 rounded-lg object-cover h-[30%] cursor-pointer hover:scale-105 transform ease-out duration-150"
        />
      )}

      {post?.username === user?.username && (
        <div className="flex justify-end w-full text-xl space-x-5 ">
          <AiFillEdit
            onClick={() => setUpdateMode(!updateMode)}
            className="text-green-700 cursor-pointer hover:scale-125 transform duration-150 ease-out"
          />
          <MdDelete
            onClick={handleDelete}
            className="text-red-700 cursor-pointer hover:scale-125 transform duration-150 ease-out"
          />
        </div>
      )}

      <div className="w-full mt-3 flex flex-col items-center gap-5">
        {updateMode ? (
          <div className="w-full flex items-center gap-3 px-3">
            <input
              value={PostTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              type="text"
              placeholder="Update Your title... "
              autoFocus
              className="w-full text-3xl bg-transparent border-b outline-none py-3 pl-4"
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                setPostTitle("");
                setPostDescription("");
              }}
              className="py-2 px-5 rounded-lg text-white  ml-5 font-bold bg-red-600 hover:bg-red-500 active:bg-red-400"
            >
              Discard
            </button>
            <button
              type="submit"
              className="py-2 px-5 rounded-lg text-white ml-5 font-bold bg-green-600 hover:bg-green-500 active:bg-green-400"
            >
              Update
            </button>
          </div>
        ) : (
          <h3 className="text-3xl flex-grow text-center font-semibold">
            {post?.title}
          </h3>
        )}
      </div>
      <div className="w-full h-full mt-5 p-4">
        <div className="flex items-center justify-between w-full mb-5 text-[#B39656] text-lg">
          <p>
            Author: <span className="font-bold">{post?.username}</span>
          </p>
          <p> {new Date(post?.createdAt).toDateString()}</p>
        </div>
        {updateMode ? (
          <textarea
            className="w-full h-[90%] bg-transparent border rounded-lg p-2 text-xl placeholder:text-xl"
            placeholder="Update Your Description..."
            value={PostDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          />
        ) : (
          <p className="text-left w-full text-gray-600 ">{post?.description}</p>
        )}
      </div>
    </form>
  );
}

export default SinglePost;
