import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import {  useParams } from "react-router-dom";
import { Context } from "../context/Context";

function Profile() {
  const [ProfilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [SelectedPic, setSelectedPic] = useState(false);
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const params = useParams();

  const { users, setUsers } = useState();
  const PF = "https://react-blog-api-ilfm.onrender.com/images/";

  // console.log(location);
  // console.log(user);

  useEffect(() => {
    if (user) {
      const fetchUsers = async () => {
        await axios
          .get(`https://react-blog-api-ilfm.onrender.com/api/users/${user._id}`)
          .then((res) => {
            setUsers(res.data.userWithoutPassword);
          });
      };
      fetchUsers();
    }
  }, [user]);

  const setProfilePicture = (e) => {
    const reader = new FileReader();
    setFile(e.target.files[0]);

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setSelectedPic(true);
      };
    }
  };
  const handleDelete = async () => {
    try {
      if (params) {
        await axios
          .delete(
            `https://react-blog-api-ilfm.onrender.com/api/users/${params.id}`,
            {
              data: {
                userId: user._id,
                username: user.username,
              },
            }
          )
          .then((res) => {
            dispatch({ type: "USER_DELETE_SUCCESS" });
          });
      }
    } catch (error) {
      dispatch({ type: "USER_DELETE_FAILURE" });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const formData = new FormData();
      const filename = file.name;
      formData.append("file", file);
      formData.append("filename", filename);
      updatedUser.profilePicture = filename;

      try {
        await axios.post(
          `https://react-blog-api-ilfm.onrender.com/api/upload`,
          formData
        );
      } catch (error) {}
    }

    try {
      const res = await axios.put(
        `https://react-blog-api-ilfm.onrender.com/api/users/` + user._id,
        updatedUser
      );
      // console.log(res);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data.updatedUser });
      window.location.reload("/");
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  console.log(user);
  // console.log(params);

  // console.log(ProfilePic);
  return (
    <div className="w-full h-screen flex-grow mt-3 px-4 flex flex-col gap-10">
      <div className="w-full flex items-center justify-between text-red-400 font-serif">
        <h2 className="text-3xl">Update Your Account</h2>
        <p
          onClick={handleDelete}
          className="font-bold hover:scale-105 transform duration-150 text-red-500 text-sm cursor-pointer"
        >
          Delete Account
        </p>
      </div>

      <form
        onSubmit={handleUpdate}
        className="flex flex-col px-3 items-center gap-8 font-serif"
      >
        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xl">Profile Picture</label>
          <div className="flex items-center space-x-3">
            <div className="border cursor-pointer w-24 h-24 rounded-lg bg-gray-200">
              {SelectedPic ? (
                <img
                  onClick={() => {
                    setSelectedPic(false);
                  }}
                  src={ProfilePic}
                  alt=""
                  className="w-full h-full rounded-lg object-cover cursor-pointer"
                />
              ) : (
                <img
                  onClick={() => {
                    setSelectedPic(false);
                  }}
                  src={PF + users?.profilePicture || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                  alt=""
                  className="w-full h-full rounded-lg object-cover cursor-pointer"
                />
              )}
            </div>
            <div>
              <input
                type="file"
                id="ProfilePic"
                hidden
                onChange={setProfilePicture}
              />
              <label htmlFor="ProfilePic">
                <BiImageAdd
                  className="cursor-pointer"
                  style={{ fontWeight: "bold", color: "red", fontSize: "30px" }}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xl">UserName</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder={user?.username}
            className="outline-none border-b bg-transparent px-1 py-3 placeholder:text-lg text-lg"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xl">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder={user?.email}
            className="outline-none border-b bg-transparent px-1 py-3 placeholder:text-lg text-lg"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="font-semibold text-xl">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
            placeholder="Password"
            className="outline-none border-b bg-transparent px-1 py-3 placeholder:text-lg text-lg"
          />
        </div>

        <button className="py-3 w-[40%] px-4 rounded-lg text-white ml-10 font-bold bg-green-600 hover:bg-green-500 active:bg-green-400">
          Update
        </button>
      </form>
    </div>
  );
}

export default Profile;
