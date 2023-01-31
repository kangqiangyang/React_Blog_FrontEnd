import React from "react";
import { useNavigate } from "react-router-dom";
import TimeAgo from "react-timeago";

function Post({ post }) {
  // console.log(post);
  const navigate = useNavigate();
  const PF = "https://react-blog-api-ilfm.onrender.com/images/";
  // console.log(post.photo);
  return (
    <div
      onClick={() => navigate(`/posts/${post._id}`)}
      className="flex flex-col items-center cursor-pointer shadow-md hover:shadow-xl rounded-lg  overflow-hidden"
    >
      {post?.photo && (
        <img
          src={PF + post?.photo}
          alt=""
          className="w-full object-cover h-[60%] hover:scale-105 transform ease-out duration-150"
        />
      )}
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
        alt=""
        className="w-full object-cover h-[60%] hover:scale-105 transform ease-out duration-150"
      /> */}

      <div className="flex flex-col items-center gap-3 my-5">
        <p className="text-lg text-gray-500">{post?.categories}</p>
        <h3 className="text-2xl font-semibold">{post?.title}</h3>
        <p className="text-lg text-gray-500">
          <TimeAgo date={new Date(post.createdAt)} />
        </p>
        <p className="text-sm text-gray-600 text-center">{post?.description}</p>
      </div>
    </div>
  );
}

export default Post;
