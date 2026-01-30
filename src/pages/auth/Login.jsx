// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import baseURL from "../../services/baseurl";
import { useEffect } from "react";  
import { login } from "../../services/userservice";




export default function Login() { 
    const navigate=useNavigate();

    // const[error,setError]=useState({});

    const {
    register,
    handleSubmit,
    formState : {errors}  
  }=useForm();

  useEffect(()=>{
  const token=localStorage.getItem("token");
  if(token){
    navigate("/Dashboard");
  }
},[navigate])

  const onSubmit=async(values)=>{
    try{
      const response=await login(values);
      toast.success("Login Successful👍")
      localStorage.setItem("token",response?.data?.token);
      navigate("/Dashboard");
    }
     
    catch(error){
      toast.error(error?.response?.data?.message||
      ("Login Failed❌"));
    }
}


  
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 ">
      <form onSubmit={handleSubmit(onSubmit)} 
      className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 space-y-4">
        
        <h1 className="text-center text-2xl font-bold text-purple-600 font-serif mb-6">
          Login Here
        </h1>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email ID
            </label>
            <input
              type="email"
<<<<<<< HEAD
              placeholder="Enter your email"
              className={`w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "Email is required",
              })}
=======
              placeholder="Enter email"
              {...register("email",{required:"Email is required"})}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
>>>>>>> origin/naveen/12-01-26
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field with Show/Hide */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
<<<<<<< HEAD
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className={`w-full border rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
=======
            <input
              type="password"
              placeholder="Enter password"
              {...register("password",{required:"Password is required"})}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
>>>>>>> origin/naveen/12-01-26
          </div>

          {/* API Error Message */}
          {apiError && (
            <p className="text-red-500 text-sm text-center">{apiError}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
<<<<<<< HEAD
=======
            // onSubmit={()=>navigate("/Dashboard")}
>>>>>>> origin/naveen/12-01-26
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
          >
            Log in
          </button>

          {/* Forgot Password Link */}
          <p
            className="text-right text-sm text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/forget")}
          >
            Forgot Password?
          </p>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Create account
            </span>
          </p>
        
        </form>
    </div>
  );
<<<<<<< HEAD
};

export default Login;
=======
}



>>>>>>> origin/naveen/12-01-26
