import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState();
  const { search } = useLocation();
  // console.log(search);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://react-blog-api-ilfm.onrender.com/api/posts" + search
      );
      setPosts(res.data.posts);
    };

    fetchPosts();
  }, [search]);

  // console.log(posts);
  return (
    <div className="flex-grow w-full grid lg:grid-cols-2 p-3  h-fit  gap-5">
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
