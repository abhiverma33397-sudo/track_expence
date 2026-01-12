import React from "react";
import { useNavigate } from "react-router-dom";


const ForgetPassword = () => {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="bg-white w-80 max-w-sm rounded-2xl shadow-xl p-6 text-center font-serif">
        
        {/* Title */}
        <h2 className="text-xl font-semibold text-purple-600 mb-2">
          Forgot Password
        </h2>
       

        {/* Form */}
        <form>
          <div className="my-4 text-left">
            <label className="block mb-1 text-gray-700 font-medium">
               Mobile number 
            </label>
            <input
              type="email"
              placeholder="Enter your  mobile number "
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            onClick={()=>navigate("/OTPpage")}
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
