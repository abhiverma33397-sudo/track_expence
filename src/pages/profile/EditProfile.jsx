import React, { useState, useEffect } from "react";
import { IoArrowBack, IoCamera } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import userImg from "../../assets/images/user.jpg";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUserDetail } from "../hooks/useuserdetails"; 

const EditProfile = () => {
  const navigate = useNavigate();
  const { decode } = useUserDetail(); 

  const { register, handleSubmit, setValue } = useForm();
  const [imagePreview, setImagePreview] = useState(userImg);

  useEffect(() => {
    if (decode) {
      setValue("name", decode?.Name || "");
      setValue("email", decode?.Email || "");
    }
  }, [decode, setValue]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  const onSubmit = async (data) => {
    console.log("Updated Profile Data 👉", data);
    toast.success("Profile Updated Successfully! ✅");
    navigate("/profile"); 
  };

  return (
    <div className="w-screen flex md:items-center md:justify-center overflow-hidden fixed inset-0">
      <div className="bg-white w-full max-w-md rounded-2xl md:shadow-xl p-6 font-serif relative">

        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>

        <h2 className="text-center text-xl font-semibold text-purple-600 mb-6">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="relative w-24 h-24 mx-auto mb-6">
            <img
              src={imagePreview}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-2 border-purple-500 shadow"
            />

            <label className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full cursor-pointer shadow">
              <IoCamera className="text-white" size={16} />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
                {...register("name", { required: "Name is required" })}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                disabled 
                className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200 opacity-70"
                {...register("email", { required: "Email is required" })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl font-semibold"
          >
            Save Changes
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditProfile;