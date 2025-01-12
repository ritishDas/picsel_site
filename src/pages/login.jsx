import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import url from "../../config";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
const res = await fetch(`${url}/api/admin/login`,{
  method:"post",
  headers: {
        "Content-Type": "application/json", // Specify content type
      },
  body:JSON.stringify({username,password }),
credentials:"include"

}).then(res=>res.json());
alert(res.message);
    navigate("/");
  };

  return (
    <div className="bg-[#F9FAFB] flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#333333] text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-[#333333] font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-[#E0E0E0] rounded-md text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#0078D4]"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[#333333] font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-[#E0E0E0] rounded-md text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#0078D4]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0078D4] text-white py-2 rounded-md font-bold hover:bg-[#0056A3] transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-[#737373] text-center mt-4">
          Forgot your password?{" "}
          <a
            href="/"
            className="text-[#0078D4] hover:text-[#0056A3] transition duration-200"
          >
            Reset it
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
