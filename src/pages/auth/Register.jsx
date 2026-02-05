import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signUp } from "../../services/userservice";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    try {
      await signUp(values);

      toast.success("Registration successful 🎉 OTP sent to email");

      navigate(`/OTPpage?email=${values.email}&type=signup`);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Registration failed ❌"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="bg-white p-8 w-full max-w-md rounded-3xl shadow-2xl">

        <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <input
            placeholder="First Name"
            {...register("firstName", { required: true })}
            className="w-full border px-3 py-2 rounded-md"
          />

          <input
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            className="w-full border px-3 py-2 rounded-md"
          />

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full border px-3 py-2 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-full border px-3 py-2 rounded-md"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-md text-white font-semibold bg-purple-600 hover:bg-purple-700"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;
