import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../../services/userservice";
import toast from "react-hot-toast";

const CreateNewPassword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const email=searchParams.get("email");
  
  const navigate = useNavigate();

  const {
      register,
      handleSubmit,
      formState : {errors}
    }=useForm();

    const onSubmit=async(values)=>{
      
      if (values.newPassword !== values.confirmPassword) {
            toast.error("Passwords do not match ❌");
             return;
            }

      try{
            values.email=email;
            const response= await resetPassword(values);
            console.log(response)
            toast.success("Password Reset Successfully 👍")
            navigate("/login");

          }catch(error){
            console.log(error)
            toast.error("Failed to reset password ❌");
          }
        }


 

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 text-center font-serif">
        {/* Heading */}
        <h2 className="text-purple-600 font-bold text-xl mb-6">
          Create New Password
        </h2>
<<<<<<< HEAD
<form onSubmit={handleSubmit(onSubmit)}>
=======

        <form onSubmit={handleSubmit(onSubmit)}>

>>>>>>> origin/naveen/12-01-26
        {/* New Password */}
        <div className="text-left mb-4">
          <label className="block mb-2 text-purple-600 font-semibold">
            New Password
          </label>
          <input
            type="password"
<<<<<<< HEAD
         
=======
            // value={newPassword}
            // onChange={(e) => setNewPassword(e.target.value)}
>>>>>>> origin/naveen/12-01-26
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
<<<<<<< HEAD
            
            
=======
>>>>>>> origin/naveen/12-01-26
            placeholder="Confirm new password"
            className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            {...register("confirmPassword",{required:"Confirm Password is required"})}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <button

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