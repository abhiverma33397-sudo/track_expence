import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "./service/userService";

const CreateNewPassword = () => {
  const[searchParams,setSearchParams]=useSearchParams();
  const email=searchParams.get("email");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }, 
  }
= useForm();

const onSubmit=async(data)=>{
  if(data.newPassword!==data.confirmPassword){
    toast.error("Password and Confirm Password should be same");
    return;
  }
  try {
    data.email=email;
   const response=await resetPassword(data);
    console.log(response);
    toast.success("Password reset successfully");
    navigate("/login");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
    
  }
};
      

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 text-center font-serif">
        {/* Heading */}
        <h2 className="text-purple-600 font-bold text-xl mb-6">
          Create New Password
        </h2>
<form onSubmit={handleSubmit(onSubmit)}>
        {/* New Password */}
        <div className="text-left mb-4">
          <label className="block mb-2 text-purple-600 font-semibold">
            New Password
          </label>
          <input
            type="password"
         
            placeholder="Enter new password"
            className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            {...register("newPassword",{required:"New Password is required"})}
          />
        </div>

        {/* Confirm Password */}
        <div className="text-left mb-6">
          <label className="block mb-2 text-purple-600 font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            
            
            placeholder="Confirm new password"
            className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            {...register("confirmPassword",{required:"Confirm Password is required"})}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={handleSubmit}
            className="w-44 bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
          >
            Update Password
          </button>

            <button
    onClick={() => navigate(-1)}  
    className="w-44 bg-gray-200 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-300 transition"
  >
    Cancel
  </button>
        </div>
        </form>
      </div>
    </div>
  );
};


export default CreateNewPassword;