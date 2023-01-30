import React from "react";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";

function ProfilePage() {
  return (
    <div className="max-w-7xl p-4 mx-auto w-full  flex flex-col lg:flex-row h-screen gap-10">
      <Profile />

      <Sidebar />
    </div>
  );
}

export default ProfilePage;
