import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { verifyOTP } from "../../services/userservice";

const OTPpage = () => {
  const [params] = useSearchParams();
  const email = params.get("email");
  const type = params.get("type");
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (values) => {
    try {
      await verifyOTP({
        email: email,
        otp: values.otp
      });

      toast.success("OTP verified ✅");

      if (type === "signup") {
        navigate("/login");   // 🔥 final destination
      } else {
        navigate(`/NewPassword?email=${email}`);
      }

    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Invalid OTP ❌"
      );
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("otp", { required: true })}
            maxLength={6}
            placeholder="000000"
            className="w-full border px-3 py-2 rounded text-center tracking-widest mb-4"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
          >
            Verify OTP
          </button>
        </form>

      </div>
    </div>
  );
};

export default OTPpage;
