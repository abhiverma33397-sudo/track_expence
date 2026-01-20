import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate=useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-center text-3xl font-bold text-purple-600 font-serif mb-6">
          Register Here
        </h1>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1 text-left">
              Enter Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1 text-left">
              Enter Mobile Number
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1 text-left">
              Enter Email ID
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1 text-left">
              Enter Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="flex gap-4 mb-4 justify-center">
            <button
              type="submit"
              className="w-52 bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition "
            >
              Submit
            </button>

        
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-purple-600 cursor-pointer hover:underline" onClick={()=>navigate("/login")}>
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
