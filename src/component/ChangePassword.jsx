import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { changePassword } from "./service/userService";

const ChangePassword = () => {
  const navigate = useNavigate();

const {
  register,
  handleSubmit,
  formState: { errors },  
}=useForm();

const onSubmit=async(data)=>{
try {
  const response=await changePassword(data);
  console.log(response);
  toast.success("Password changed successfully");
  navigate("/Profile");
} 
catch (error) {
  console.log(error);
  toast.error("Failed to change password");
}
};


  
  return (
    <div className="w-screen flex md:items-center md:justify-center overflow-hidden fixed inset-0">
      <div className="bg-white w-full max-w-md rounded-2xl md:shadow-xl p-6 font-serif relative">

        {/* Back */}
        <button
          onClick={() => navigate("/Profile")}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>

        <h2 className="text-center text-xl font-semibold text-purple-600 mb-6">
          Change Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Current Password
            </label>
            <input
              type="password"
              
              
              placeholder="Enter current password"
              className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
            />
            {errors.currentPassword && (<p className="text-red-500 text-sm mt-1">{errors.currentPassword.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              New Password
            </label>
            <input
              type="password"
              
          
              placeholder="Enter new password"
              className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
            />
            {errors.newPassword && (<p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              
              
              placeholder="Confirm new password"
              className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
            />
            {errors.confirmPassword && (<p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

        </div>

       
        <button
          onSubmit={handleSubmit}
          className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl font-semibold"
        >
          Update Password
        </button>
</form>
      </div>
    </div>
  );
};


export default ChangePassword;
