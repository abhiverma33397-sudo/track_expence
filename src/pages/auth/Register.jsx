// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { Eye, EyeOff } from "lucide-react";
// import { useState } from "react";
// import baseURL from "../../services/baseurl";

// const Register = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit } = useForm();

//   const [showPassword, setShowPassword] = useState(false);

//   const onSubmit = async (values) => {
//     try {
//       const payload = {
//         firstName: values.firstName,
//         lastName: values.lastName,
//         userName: values.userName,
//         password: values.password,
//         role: values.role || "User",
//         isVerified: true,
//       };

//       var response = await baseURL.post("User", payload);

//       console.log(response);

//       toast.success("Registration successful 🎉 OTP sent to email");

//       navigate(`/OTPpage?email=${values.userName}&type=signup`);
//     } catch (err) {
//       console.log(err);

//       toast.error(err?.response?.data?.message || "Registration failed ❌");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100">
//       <div className="bg-white p-8 w-full max-w-md rounded-3xl shadow-2xl">
//         <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">
//           Create Account
//         </h1>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <input
//             placeholder="First Name"
//             {...register("firstName", { required: true })}
//             className="w-full border px-3 py-2 rounded-md"
//           />

//           <input
//             placeholder="Last Name"
//             {...register("lastName", { required: true })}
//             className="w-full border px-3 py-2 rounded-md"
//           />

//           <input
//             type="text"
//             placeholder="UserName (Email)"
//             {...register("userName", { required: true })}
//             className="w-full border px-3 py-2 rounded-md"
//           />

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Password"
//               {...register("password", { required: true })}
//               className="w-full border px-3 py-2 rounded-md pr-10"
//             />

//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </span>
//           </div>

        

//           <button
//             type="submit"
//             className="w-full py-3 rounded-md text-white font-semibold bg-purple-600 hover:bg-purple-700"
//           >
//             Register
//           </button>

//           <p className="text-sm mt-4 text-gray-600">
//             <span
//               className="text-purple-600 cursor-pointer font-medium"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import baseURL from "../../services/baseurl";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    try {
      setLoading(true);

      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName.trim().toLowerCase(),
        password: values.password,
        role: "User",
        isVerified: false,
      };

      const response = await baseURL.post("User", payload);

      console.log(response);

      const message = response?.data;

      // Existing User
      if (message === "User already exists with this email.") {
        toast.error(message);
        return;
      }

      // Existing OTP
      if (
        message ===
        "OTP already sent to this email. Please verify first."
      ) {
        toast.error(message);
        return;
      }

      // OTP Failed
      if (
        typeof message === "string" &&
        message.includes("OTP email failed")
      ) {
        toast.error(message);
        return;
      }

      toast.success("Registration successful 🎉 OTP sent to email");

      navigate(
        `/OTPpage?email=${payload.userName}&type=signup`
      );
    } catch (err) {
      console.log(err);

      toast.error(
        err?.response?.data?.message ||
          err?.response?.data ||
          "Registration failed ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 px-4">
      <div className="bg-white p-8 w-full max-w-md rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "First name is required",
              })}
              className="w-full border px-3 py-3 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
            />

            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last name is required",
              })}
              className="w-full border px-3 py-3 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
            />

            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("userName", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter valid email",
                },
              })}
              className="w-full border px-3 py-3 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
            />

            {errors.userName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.userName.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <input
                type={
                  showPassword ? "text" : "password"
                }
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                })}
                className="w-full border px-3 py-3 rounded-md pr-10 outline-none focus:ring-2 focus:ring-purple-500"
              />

              <span
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </span>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-white font-semibold transition duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Login */}
          <p className="text-sm mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <span
              className="text-purple-600 cursor-pointer font-medium hover:underline"
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