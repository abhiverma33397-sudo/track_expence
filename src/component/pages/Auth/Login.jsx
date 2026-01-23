
import{ useState } from "react";
import { useForm } from "react-hook-form";
import{baseUrl} from "../config/config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const[error,setError]=useState("");
  const{
    register,
    handleSubmit,
    formState:{errors}, 
  }=useForm();

  const navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 ">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        
        <h1 className="text-center text-2xl font-bold text-purple-600 font-serif mb-6">
          Login Here~
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1 text-left">
              Mobile number / Email ID
            </label>
            <input
              type="text"
              placeholder="Enter mobile or email"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 text-left">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <button 
            type="submit"
            onClick={()=>navigate("/Dashboard")}
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
          >
            Log in
          </button>

          <p className="text-right text-sm text-blue-600 cursor-pointer hover:underline" onClick={()=> navigate("/Forget")}>
            Forgot Password?
          </p>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <span className="text-purple-600 cursor-pointer hover:underline" onClick={()=>navigate("/Register")}>
              Create account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
