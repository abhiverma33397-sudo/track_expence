import React from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../services/userservice";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const ForgetPassword = () => {

  const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState : {errors}
  }=useForm();

  const onSubmit = async (values) => {
  try {
    const payload = {
      email: values.email
    };

    const response = await forgotPassword(payload);
    console.log(response);

    toast.success("OTP sent to your Email 👍");
    navigate("/OTPpage?email=" + values.email);

  } catch (error) {
    const message =
      error?.response?.data?.messages?.[0] ||
      "Something went wrong. Please try again.";

    toast.error(message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="bg-white w-80 max-w-sm rounded-2xl shadow-xl p-6 text-center font-serif">
        
        
        <h2 className="text-xl font-semibold text-purple-600 mb-2">
          Forgot Password
        </h2>
       

        {/* Form */}
        <form onSubmit ={handleSubmit(onSubmit)}>
          <div className="my-4 text-left">
            <label className="block mb-1 text-gray-700 font-medium">
              Email  
            </label>
            <input
  type="email"
  placeholder="Enter your email address"
  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
  {...register("email",{required:"Email is required"})}
/>

            {errors.Email && (<div className="text-red-500 text-sm mt-1">{errors.Email.message}</div> )}

          </div>

          <button
  type="submit"
  className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
>
  Send OTP
</button>

        </form>

        {/* Back to login */}
        <p className="text-sm mt-4 text-gray-600">
          Remember your password?{" "}
          <span className="text-purple-600 cursor-pointer font-medium" onClick={()=>navigate("/login")}>
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default ForgetPassword;