import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import user from "../../assets/images/user.jpg";
import { useUserDetail } from "../hooks/useuserdetails";
import baseURL from "../../services/baseurl";

const Profile = () => {
  const navigate = useNavigate();
  const { decode } = useUserDetail();

  const { register, handleSubmit, setValue } = useForm();

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const IMAGE_BASE_URL = "https://localhost:7213/";

  const userIdd = decode?.UserId;

  const getuser = async (userId) => {
    try {
      const response = await baseURL.get(`User/${userId}`);

    setFirstName(response.data.firstName || "");
    setLastName(response.data.lastName || "");

      if (response?.data?.profileImage) {
        setImagePreview(
          `${IMAGE_BASE_URL}${response.data.profileImage}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (decode) {
      getuser(userIdd);
    }
  }, [userIdd]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("User not authenticated");
        return;
      }

      console.log(data);

      toast.success("Profile Updated");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    navigate("/");
  };

  return (
    <div className="w-screen flex md:items-center md:justify-center overflow-hidden fixed inset-0">
      <div className="bg-white w-full max-w-md rounded-2xl md:shadow-xl p-6 font-serif relative">
        
        {/* Back */}
        <button
          onClick={() => navigate("/Dashboard")}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>

        <h2 className="text-center text-xl font-semibold text-purple-600 mb-6">
          Profile
        </h2>

        
          
          <img
            src={imagePreview || user}
            alt="User"
            className="w-20 h-20 mx-auto rounded-full border-2 border-purple-500 shadow mb-3"
          />

          <div className="text-center mb-6">
            <p>{firstName} {lastName}</p>
          </div>

          <div className="space-y-4">
            
            <button
              type="button"
              onClick={() => navigate("/edit-profile")}
              className="w-full flex items-center justify-between bg-purple-100 text-purple-700 px-4 py-3 rounded-xl"
            >
              Edit Profile <FaUserEdit />
            </button>

            <button
              type="button"
              onClick={() => navigate("/ChangePassword")}
              className="w-full flex items-center justify-between bg-purple-100 text-purple-700 px-4 py-3 rounded-xl"
            >
              Change Password <FaUserEdit />
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center justify-between bg-red-100 text-red-600 px-4 py-3 rounded-xl"
            >
              Logout <FaSignOutAlt />
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default Profile;