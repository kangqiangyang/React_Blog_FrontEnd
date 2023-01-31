import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { dispatch, isFetching } = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      await axios
        .post(`https://react-blog-api-ilfm.onrender.com/api/auth/login`, {
          username,
          password,
        })
        .then((res) => {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: res.data.userWithoutPassword,
          });
          navigate("/");
        });
    } catch (error) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  // console.log(user);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-login bg-no-repeat bg-cover bg-center bg-fixed relative">
      <a href="/register">
        <button className=" absolute top-0 right-0 py-3  mr-10 mt-5 px-4 rounded-lg text-white ml-10 font-bold bg-green-600 hover:bg-green-500 active:bg-green-400">
          Register
        </button>
      </a>
      <div className="max-w-7xl mx-auto w-full p-4 flex flex-col items-center">
        <div className="w-full  ">
          <h1 className="text-[60px]  font-semibold font-serif text-center">
            Login
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full md:w-[40%] px-4 gap-5 font-serif"
        >
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-xl pl-2">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
              className="outline-none  border rounded-lg p-3 placeholder:text-lg text-lg"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-xl pl-2">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              className="outline-none  border rounded-lg p-3 placeholder:text-lg text-lg"
            />
          </div>

          <button
            type="submit"
            className="py-3 w-full md:w-[50%] mr-10 mt-5 px-4 rounded-lg text-white ml-10 font-bold bg-red-400 hover:bg-red-500 active:bg-red-600 disabled:cursor-not-allowed"
            disabled={isFetching}
          >
            Login
          </button>
          {error && (
            <p className="text-red-500 text-xl">Something Went Wrong</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
