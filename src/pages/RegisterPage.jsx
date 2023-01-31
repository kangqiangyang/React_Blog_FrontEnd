import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
      // console.log("Register Successful!");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center bg-register bg-no-repeat bg-cover bg-center bg-fixed gap-5">
      <Link to="/login">
        <button className="absolute top-0 right-0 py-3  mr-10 mt-5 px-4 rounded-lg text-white ml-10 font-bold bg-red-400 hover:bg-red-500 active:bg-red-600">
          Login
        </button>
      </Link>

      <div className="max-w-7xl mx-auto w-full p-4 flex flex-col items-center">
        <div className="w-full  ">
          <h1 className="text-[60px]  font-semibold font-serif text-center">
            Register
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full md:w-[40%] px-4 gap-5"
        >
          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-xl pl-2">UserName</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
              className="outline-none  border rounded-lg  p-3 placeholder:text-lg text-lg"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="font-semibold text-xl pl-2">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
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
            className="py-3 w-full md:w-[50%] mr-10 mt-5 px-4 rounded-lg text-white ml-10 font-bold bg-green-600 hover:bg-green-500 active:bg-green-400"
          >
            Register
          </button>
          {error && (
            <p className="text-red-500 text-xl">Something Went Wrong</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
