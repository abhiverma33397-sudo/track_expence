import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { baseUrl } from "../services/baseurl";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const onSubmit = async (values) => {
    try {
      const response = await baseUrl.post("Auth/login", values);
      toast.success("Login Successful");
      localStorage.setItem("token", response?.data?.token);
      navigate("/dashboard");
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Login failed. Please check your credentials.";
      toast.error(message);
      setApiError(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h1 className="text-center text-2xl font-bold text-purple-600 mb-6">
          Login Here
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username / Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mobile number / Email ID
            </label>
            <input
              type="text"
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter mobile or email"
              {...register("username", {
                required: "This field is required",
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* API Error */}
          {apiError && (
            <p className="text-red-500 text-sm text-center">{apiError}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
          >
            Log in
          </button>

          {/* Links */}
          <p
            className="text-right text-sm text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/forget")}
          >
            Forgot Password?
          </p>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Create account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
