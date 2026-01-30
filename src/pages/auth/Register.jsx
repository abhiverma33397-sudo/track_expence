import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import baseURL from "../../services/baseurl";
import toast from "react-hot-toast";
import { signUp } from "../../services/userservice";



const  SignUp=() =>{
  const navigate=useNavigate();
<<<<<<< HEAD

  const {
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();

  const onSubmit=async(data)=>{
    try {
      const response=await signUp(data);
      console.log(response);
      toast.success("Registration successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
      
    }
  };
=======
  const {
    register,
    handleSubmit,
    formState : {errors}
  }=useForm();

  const onSubmit=async(values)=>{
  try{
    const response= await signUp(values);
    console.log(response)
    toast.success("Register Successful👍")
    navigate("/login");
  
  }catch(error){
    console.log(error)
  }
}
>>>>>>> origin/naveen/12-01-26
  
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-center text-3xl font-bold text-purple-600 font-serif mb-6">
          Register Here
        </h1>

<<<<<<< HEAD
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1 text-left">
              Enter First Name
=======
        <form onSubmit ={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1 text-left">
              First Name
>>>>>>> origin/naveen/12-01-26
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
<<<<<<< HEAD
              {...register("firstName", { required: "First name is required" })}
            />

            {errors.firstName && (<p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
=======
              {...register("firstName",{required:"First Name is required"})}
            />
            {errors.firstName && (<div className="text-red-500 text-sm mt-1">{errors.firstName.message}</div>
>>>>>>> origin/naveen/12-01-26
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1 text-left">
<<<<<<< HEAD
             Enter Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              {...register("lastName", { required: "Last name is required" })}
              
            />
            {errors.lastName && (<p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1 text-left">
              Enter email ID
=======
              Last Name
>>>>>>> origin/naveen/12-01-26
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
<<<<<<< HEAD
              {...register("email", { required: "Email is required",
               pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            }, 
          })}
            />
            {errors.email  && (<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
            
          
          </div>

=======
              {...register("lastName",{required:"Last Name is required"})}
            />
            {errors.lastName && (<div className="text-red-500 text-sm mt-1">{errors.lastName.message}</div>
            )}
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1 text-left">
            Email ID
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              {...register("email",{required:"Email is required",
              pattern:{
                 value: /^\S+@\S+$/i,
              message: "Invalid email address",}
              })}
            />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}

          </div>
>>>>>>> origin/naveen/12-01-26

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1 text-left">
            Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
<<<<<<< HEAD
              {...register("password",{required:"Password is required",
              minLength:{
                value:6,
                message:"Password must be at least 6 characters",
              },
            })}
            />

            {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password.message}</p>)}
            
=======
              {...register("password",{required:"Password is required",})}
            />
            {errors.password&& (<div className="text-red-500 text-sm mt-1">{errors.password.message}</div>)}
>>>>>>> origin/naveen/12-01-26
          </div>

          <div className="flex gap-4 mb-4 justify-center">
            <button
              type="submit"
              className="w-52 bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition "
            >
              Submit
            </button>

        
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span className="text-purple-600 cursor-pointer hover:underline" onClick={()=>navigate("/login")}>
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
