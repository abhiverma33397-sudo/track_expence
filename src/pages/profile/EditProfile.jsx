// import React, { useState, useEffect } from "react";
// import { IoArrowBack, IoCamera } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import userImg from "../../assets/images/user.jpg";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { useUserDetail } from "../hooks/useuserdetails";
// import baseURL from "../../services/baseurl";

// const EditProfile = () => {
//   const navigate = useNavigate();
//   const { decode } = useUserDetail();

//   const { register, handleSubmit, setValue } = useForm();

//   const [imagePreview, setImagePreview] = useState(userImg);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // BACKEND URL
//   const IMAGE_BASE_URL = "https://localhost:5001/";

//   // LOAD USER DATA
//   useEffect(() => {
//     if (decode) {
//       setValue("firstName", decode?.FirstName || "");
//       setValue("lastName", decode?.LastName || "");

//       // EXISTING IMAGE
//       if (decode?.ProfileImage) {
//         setImagePreview(
//           `${IMAGE_BASE_URL}${decode.ProfileImage}`
//         );
//       }
//     }
//   }, [decode, setValue]);

//   // IMAGE CHANGE
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setSelectedImage(file);

//       // TEMP PREVIEW
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   // SUBMIT
//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const token = localStorage.getItem("token");

//       if (!token) {
//         toast.error("Session Expired");
//         navigate("/login");
//         return;
//       }

//       const formData = new FormData();

//       formData.append("firstName", data.firstName);
//       formData.append("lastName", data.lastName);

//       // IMAGE
//       if (selectedImage) {
//         formData.append("file", selectedImage);
//       }

//       // const response = await baseURL.put(
//       //   `/User/${decode?.UserId}`,
//       //   formData,
//       //   {
//       //     headers: {
//       //       Authorization: `Bearer ${token}`,
//       //       "Content-Type": "multipart/form-data",
//       //     },
//       //   }
//       // );
//        const response=await baseURL.put(`/User/${id}`);
//       console.log(response.data);

//       // UPDATED IMAGE
//       if (response?.data?.profileImage) {
//         setImagePreview(
//           `${IMAGE_BASE_URL}${response.data.profileImage}`
//         );
//       }

//       toast.success("Profile Updated Successfully ✅");

//       navigate("/profile");

//     } catch (error) {
//       console.log(error);

//       toast.error(
//         error?.response?.data?.message ||
//         "Update Failed ❌"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center p-3">
//       <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 relative">

//         {/* BACK BUTTON */}
//         <button
//           type="button"
//           onClick={() => navigate("/profile")}
//           className="absolute top-4 left-4 text-purple-600"
//         >
//           <IoArrowBack size={24} />
//         </button>

//         {/* TITLE */}
//         <h2 className="text-center text-2xl font-bold text-purple-700 mb-6">
//           Edit Profile
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)}>

//           {/* IMAGE */}
//           <div className="relative w-28 h-28 mx-auto mb-6">
//             <img
//               src={imagePreview || userImg}
//               alt="Profile"
//               className="w-full h-full rounded-full object-cover border-4 border-purple-500"
//             />

//             <label className="absolute bottom-1 right-1 bg-purple-600 p-2 rounded-full cursor-pointer">
//               <IoCamera className="text-white" size={18} />

//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageChange}
//               />
//             </label>
//           </div>

//           {/* FIRST NAME */}
//           <input
//             className="w-full mb-4 p-3 rounded-xl bg-purple-50 border"
//             placeholder="First Name"
//             {...register("firstName", { required: true })}
//           />

//           {/* LAST NAME */}
//           <input
//             className="w-full mb-4 p-3 rounded-xl bg-purple-50 border"
//             placeholder="Last Name"
//             {...register("lastName", { required: true })}
//           />

//           {/* BUTTON */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-purple-600 text-white py-3 rounded-xl"
//           >
//             {loading ? "Updating..." : "Save Changes"}
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
import React, { useState, useEffect, use } from "react";
import { IoArrowBack, IoCamera } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import userImg from "../../assets/images/user.jpg";
import { get, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUserDetail } from "../hooks/useuserdetails";
import baseURL from "../../services/baseurl";

const EditProfile = () => {
  const navigate = useNavigate();
  const { decode } = useUserDetail();

  const { register, handleSubmit, setValue } = useForm();

  const [imagePreview, setImagePreview] = useState(userImg);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const IMAGE_BASE_URL = "https://localhost:7213/";
  const userIdd=decode?.UserId;
  console.log(userIdd);
const getuser= async(userId) =>{
  try {
    const response= await baseURL.get(`User/${userId}`);
    console.log(response.data);
    setValue("firstName", response.data.firstName || "");
    setValue("lastName", response.data.lastName || "");

    if (response?.data?.profileImage) {
      setImagePreview(
        `${IMAGE_BASE_URL}${response.data.profileImage}`
      );
    }
  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    if(decode) {
   getuser(userIdd);
    }
  }, [userIdd]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);

      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Session Expired");
        navigate("/login");
        return;
      }

      const formData = new FormData();

      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);

      if (selectedImage) {
        formData.append("file", selectedImage);
      }

      const response = await baseURL.put(`/User/${decode?.UserId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      if (response?.data?.profileImage) {
        setImagePreview(`${IMAGE_BASE_URL}${response.data.profileImage}`);
      }

      toast.success("Profile Updated Successfully ✅");

      navigate("/profile");
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Update Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center p-3">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 relative">
        {/* BACK BUTTON */}
        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>

        {/* TITLE */}
        <h2 className="text-center text-2xl font-bold text-purple-700 mb-6">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* PROFILE IMAGE */}
          <div className="relative w-28 h-28 mx-auto mb-6">
            <img
              src={imagePreview || userImg}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-purple-500"
            />

            <label className="absolute bottom-1 right-1 bg-purple-600 p-2 rounded-full cursor-pointer">
              <IoCamera className="text-white" size={18} />

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* FIRST NAME */}
          <input
            type="text"
            className="w-full mb-4 p-3 rounded-xl bg-purple-50 border outline-none"
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />

          {/* LAST NAME */}
          <input
            type="text"
            className="w-full mb-4 p-3 rounded-xl bg-purple-50 border outline-none"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition"
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
