import React from "react";
import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";

function SinglePostPage() {
  return (
    <div className="max-w-7xl mx-auto h-screen flex mt-5 gap-10">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default SinglePostPage;
