// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { useEffect, useState } from "react";
// import { login } from "../../services/userservice";
// import { Eye, EyeOff } from "lucide-react";


// export default function Login() {
//   const navigate = useNavigate();
//   const [apiError, setApiError] = useState("");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm();

//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/Dashboard");
//     }
//   }, [navigate]);

//   const onSubmit = async (values) => {
//     setApiError("");
//     try {
//       const response = await login(values);

//       toast.success("Login Successful 👍");
// console.log(response);
//       localStorage.setItem("token", response?.data);
//       localStorage.setItem("email", values.userName);

//       navigate("/Dashboard");
//     } catch (error) {
//       const message =
//         error?.response?.data?.message ||
//         "Login Failed ❌";

//       toast.error(message);
//       setApiError(message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 space-y-4"
//       >
//         <h1 className="text-center text-2xl font-bold text-purple-600 font-serif mb-6">
//           Login Here
//         </h1>

//         {/* Email */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1">
//             Email ID
//           </label>
//           <input
//             type="email"
//             placeholder="Enter email"
//             {...register("userName", { required: "Email is required" })}
//             className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
//           />
//           {errors.userName && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.userName.message}
//             </p>
//           )}
//         </div>

//         {/* Password */}
      
// <div>
//   <label className="block text-gray-700 font-medium mb-1">
//     Password
//   </label>

//   <div className="relative">
//     <input
//       type={showPassword ? "text" : "password"}
//       placeholder="Enter password"
//       className={`w-full border rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-purple-500 focus:outline-none ${
//         errors.password ? "border-red-500" : "border-gray-300"
//       }`}
//       {...register("password", {
//         required: "Password is required",
//       })}
//     />

//     {/* Eye Icon */}
//     <span
//       onClick={() => setShowPassword(!showPassword)}
//       className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
//     >
//       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//     </span>
//   </div>

//   {errors.password && (
//     <p className="text-red-500 text-sm mt-1">
//       {errors.password.message}
//     </p>
//   )}
// </div>

//         {/* Login Button */}
//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
//         >
//           Log in
//         </button>

//         {/* Forgot */}
//         <p
//           className="text-right text-sm text-blue-600 cursor-pointer hover:underline"
//           onClick={() => navigate("/Forget")}
//         >
//           Forgot Password?
//         </p>

//         {/* Register */}
//         <p className="text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <span
//             className="text-purple-600 cursor-pointer hover:underline"
//             onClick={() => navigate("/Register")}
//           >
//             Create account
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { login } from "../../services/userservice";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // ✅ Check valid token before redirect
    if (token && token.split(".").length === 3) {
      navigate("/Dashboard");
    }
  }, [navigate]);

const onSubmit = async (values) => {
  setApiError("");

  try {
    const response = await login(values);

    console.log("Login Response:", response);

    const token = response?.data;

    // ✅ Check valid JWT token
    if (
      !token ||
      typeof token !== "string" ||
      token.split(".").length !== 3
    ) {
      toast.error("Invalid Username or Password ❌");
      return;
    }

    // ✅ Save token only if valid
    localStorage.setItem("token", token);

    localStorage.setItem("email", values.userName);

    toast.success("Login Successful 👍");

    navigate("/Dashboard");

  } catch (error) {
    console.log(error);

    const message =
      error?.response?.data?.message ||
      "Invalid Username or Password ❌";

    toast.error(message);

    setApiError(message);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 space-y-4"
      >
        <h1 className="text-center text-2xl font-bold text-purple-600 font-serif mb-6">
          Login Here
        </h1>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email ID
          </label>

          <input
            type="email"
            placeholder="Enter email"
            {...register("userName", {
              required: "Email is required",
            })}
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />

          {errors.userName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.userName.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>

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

            {/* Eye Icon */}
            <span
              onClick={() => setShowPassword(!showPassword)}
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

        {/* API Error */}
        {apiError && (
          <p className="text-red-500 text-sm text-center">
            {apiError}
          </p>
        )}

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
        >
          Log in
        </button>

        {/* Forgot Password */}
        <p
          className="text-right text-sm text-blue-600 cursor-pointer hover:underline"
          onClick={() => navigate("/Forget")}
        >
          Forgot Password?
        </p>

        {/* Register */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-purple-600 cursor-pointer hover:underline"
            onClick={() => navigate("/Register")}
          >
            Create account
          </span>
        </p>
      </form>
    </div>
  );
}
