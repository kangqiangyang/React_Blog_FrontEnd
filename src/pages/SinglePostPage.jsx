import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";

function SinglePostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState();

  // console.log(postId);
  useEffect(() => {
    if (postId) {
      const fetchPost = async () => {
        await axios
          .get(`https://react-blog-api-ilfm.onrender.com/api/posts/${postId}`)
          .then((res) => setPost(res.data.post));
      };
      fetchPost();
    }
  }, [postId]);

  // console.log(post);
  return (
    <div className="max-w-7xl mx-auto pb-20 flex mt-5 gap-10">
      <SinglePost post={post} />
      <Sidebar />
    </div>
  );
}

export default SinglePostPage;
