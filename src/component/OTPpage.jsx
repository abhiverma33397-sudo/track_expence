import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword, verifyOtp } from "./service/userService";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const OTPpage = () => {
  const[searchParams,setSearchParams]=useSearchParams();
  const email=searchParams.get("email");
  const navigate=useNavigate();

  const{
    register,
    handleSubmit,
    formState:{errors} 
  }=useForm();

  const onSubmit=async(data)=>{
    console.log(data);

    try {
      data.email=email;
      const response=await verifyOtp(data);
      console.log(response);
      navigate(`/NewPassword?email=${email}`);
      toast.success("OTP verified successfully");
     
    } catch (error) {
      console.log(error.response);
      toast.error("Invalid OTP");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="bg-white w-80 max-w-sm rounded-2xl shadow-xl p-6 text-center font-serif">
        
        
        <h2 className="text-xl font-semibold text-purple-600 mb-2">
          OTP Verification
        </h2>
       

       
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-4 text-left">
            <label className="block mb-1 text-gray-700 font-medium">
               OTP Code 
            </label>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register("otp",{required:"OTP is required"})}
            />
          </div>

          <button
            type="submit"
            // onClick={()=>navigate("/NewPassword")}
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Verify OTP
          </button>
        </form>

       
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

export default OTPpage;
