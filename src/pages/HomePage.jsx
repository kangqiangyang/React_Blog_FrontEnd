import React from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto p-4 flex gap-10 ">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default HomePage;
