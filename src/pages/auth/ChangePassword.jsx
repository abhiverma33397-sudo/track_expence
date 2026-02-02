import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";
import { changePassword as changePasswordApi } from "../../services/userservice";
import { useUserDetail } from "../hooks/useuserdetails";

const ChangePassword = () => {
  const { decode: user } = useUserDetail();
  const userEmail = user?.email;

  const [searchParams] = useSearchParams();
  const emailFromUrl = searchParams.get("email");
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    try {
      const payload = {
        email: userEmail || emailFromUrl,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };

      await changePasswordApi(payload);
      toast.success("Password Changed Successfully 👍");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Failed to change password ❌");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>

        <h2 className="text-center text-xl font-semibold text-purple-600 mb-6">
          Change Password
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full bg-purple-50 p-3 rounded-xl border"
            {...register("oldPassword", { required: true })}
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full bg-purple-50 p-3 rounded-xl border"
            {...register("newPassword", { required: true })}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-purple-50 p-3 rounded-xl border"
            {...register("confirmPassword", { required: true })}
          />

          <button className="w-full bg-purple-600 text-white py-3 rounded-xl">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
