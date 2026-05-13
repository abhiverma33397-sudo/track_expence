import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import baseURL from "../../services/baseurl";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values) => {
    try {
      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName,
        password: values.password,
        role: values.role || "User",
        isVerified: true,
      };

      var response = await baseURL.post("User", payload);

      console.log(response);

      toast.success("Registration successful 🎉 OTP sent to email");

      navigate(`/OTPpage?email=${values.userName}&type=signup`);
    } catch (err) {
      console.log(err);

      toast.error(err?.response?.data?.message || "Registration failed ❌");
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
            type="text"
            placeholder="UserName (Email)"
            {...register("userName", { required: true })}
            className="w-full border px-3 py-2 rounded-md"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full border px-3 py-2 rounded-md pr-10"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

        

          <button
            type="submit"
            className="w-full py-3 rounded-md text-white font-semibold bg-purple-600 hover:bg-purple-700"
          >
            Register
          </button>

          <p className="text-sm mt-4 text-gray-600">
            <span
              className="text-purple-600 cursor-pointer font-medium"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
