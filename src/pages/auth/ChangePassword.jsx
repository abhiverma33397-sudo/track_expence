import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";
import { changePassword } from "../../services/userservice";
import { useUserdetails } from "../../hooks/useuserdetails";



const changepassword = () => {
  const user = useUserdetails();
  const userEmail = user?.email;

  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      toast.error("Passwords do not match ❌");
      return;
    }

    try {
      values.email = userEmail;
      await changePassword(values);
      toast.success("Password Changed Successfully 👍");
      navigate(`/dashboard?email=${email}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to change password ❌");
    }
  };

  return (
    <div className="w-screen flex md:items-center md:justify-center fixed inset-0">
      <div className="bg-white w-full max-w-md rounded-2xl md:shadow-xl p-6 relative">

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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Current Password
            </label>
            <input
              type="password"
              className="w-full bg-purple-50 p-3 rounded-xl border"
              {...register("oldPassword", { required: true })}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full bg-purple-50 p-3 rounded-xl border"
              {...register("newPassword", { required: true })}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full bg-purple-50 p-3 rounded-xl border"
              {...register("confirmPassword", { required: true })}
            />
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
