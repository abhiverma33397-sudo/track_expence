import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import baseURL from "../../services/baseurl";

const ChangePassword = () => {

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  // PASSWORD SHOW/HIDE STATES
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // SUBMIT
  const onSubmit = async (values) => {

    if (values.newPassword !== values.confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    try {

      const token = localStorage.getItem("token");

      const payload = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      };

      const response = await baseURL.post(
        "/Auth/change-password",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      toast.success("Password Changed Successfully 👍");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      toast.error(
        error?.response?.data?.message ||
        "Failed to change password ❌"
      );
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-purple-50">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>

        {/* TITLE */}
        <h2 className="text-center text-xl font-semibold text-purple-600 mb-6">
          Change Password
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >

          {/* CURRENT PASSWORD */}
          <div className="relative">
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="Current Password"
              className="w-full bg-purple-50 p-3 rounded-xl border outline-none pr-12"
              {...register("oldPassword", { required: true })}
            />

            <button
              type="button"
              onClick={() =>
                setShowOldPassword(!showOldPassword)
              }
              className="absolute right-3 top-3 text-gray-500"
            >
              {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* NEW PASSWORD */}
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
              className="w-full bg-purple-50 p-3 rounded-xl border outline-none pr-12"
              {...register("newPassword", { required: true })}
            />

            <button
              type="button"
              onClick={() =>
                setShowNewPassword(!showNewPassword)
              }
              className="absolute right-3 top-3 text-gray-500"
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full bg-purple-50 p-3 rounded-xl border outline-none pr-12"
              {...register("confirmPassword", { required: true })}
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-3 top-3 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700"
          >
            Update Password
          </button>

        </form>

      </div>
    </div>
  );
};

export default ChangePassword;