import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { verifyOTP } from "../../services/userservice";

const OTPpage = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const email = params.get("email");
  const type = params.get("type"); 

  const { register, handleSubmit, reset } = useForm();

const onSubmit = async (values) => {
  try {
    const payload = {
      userName: email,
      otp: values.otp,
      type: type || "signup",
    };

   await verifyOTP(payload);
    toast.success("OTP verified ✅");

    navigate(type === "signup" ? "/login" : `/NewPassword?email=${email}`);
  } catch (err) {
    toast.error(err?.response?.data?.message || "Invalid OTP ❌");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100">
      <div className="bg-white p-6 w-80 rounded-2xl shadow-xl text-center">

        <h2 className="text-xl font-bold text-purple-600 mb-2">
          OTP Verification
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          OTP sent to <b>{email}</b>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

         <input
  {...register("otp", {
    required: "OTP is required",
    minLength: {
      value: 4,
      message: "OTP must be at least 4 digits",
    },
    maxLength: {
      value: 6,
      message: "OTP cannot exceed 6 digits",
    },
    pattern: {
      value: /^[0-9]+$/,
      message: "OTP must be numeric",
    },
  })}
  inputMode="numeric"
  maxLength={6}              
  placeholder="Enter OTP"
  className="w-full border px-3 py-2 rounded text-center tracking-widest focus:ring-2 focus:ring-purple-500 focus:outline-none"
/>


          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Verify OTP
          </button>

        </form>

      </div>
    </div>
  );
};

export default OTPpage;
