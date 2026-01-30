import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";
import { changePassword } from "../../services/userservice";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useUserdetails } from "../hooks/useuserdetails";

const ChangePassword = () => {
  const user = useUserdetails();
  const userEmail = user?.email;
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (values) => {

    if (values.newPassword !== values.confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }
    try {
      values.email = userEmail;
      const response = await changePassword(values);
      console.log(response)
      toast.success("Password Changed Successfully 👍")
      navigate(`/Dashboard?email=${email}`);
    } catch (error) {
      console.log(error)
      toast.error("Failed to change password ❌");
    }
  }




  
  return (
    <div className="w-screen flex md:items-center md:justify-center overflow-hidden fixed inset-0">
      <div className="bg-white w-full max-w-md rounded-2xl md:shadow-xl p-6 font-serif relative">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>

        <h2 className="text-center text-xl font-semibold text-purple-600 mb-6">
          Change Password
        </h2>

        {/* Form */}
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
                {...register("oldPassword", { required: "Current Password is required" })}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                New Password
              </label>
              <input
                type="password"

                placeholder="Enter new password"
                className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
                {...register("newPassword", { required: "New Password is required" })}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"

                placeholder="Confirm new password"
                className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
                {...register("confirmPassword", { required: "Confirm Password is required" })}
              />
            </div>

          </div>

          {/* Save Button */}
          <button
            // onClick={() => navigate("/Profile")}
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
