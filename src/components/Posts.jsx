import React from "react";
import Post from "./Post";

function Posts() {
  return (
    <div className="flex-grow w-full grid lg:grid-cols-2 p-3  gap-5">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
