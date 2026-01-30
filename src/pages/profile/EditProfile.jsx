import React, { useState, useEffect } from "react";
import { IoArrowBack, IoCamera } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import userImg from "../../assets/images/user.jpg";

const EditProfile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("Abhishek Verma");
  const [email, setEmail] = useState("abhishek@gmail.com");
  const [profileImage, setProfileImage] = useState(userImg);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Image change handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-screen flex md:items-center md:justify-center overflow-hidden fixed inset-0">
      <div className="bg-white w-full max-w-md rounded-2xl md:shadow-xl p-6 font-serif relative">

        {/* Back */}
        <button
          onClick={() => navigate("/Profile")}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>

        <h2 className="text-center text-xl font-semibold text-purple-600 mb-6">
          Edit Profile
        </h2>

        {/* Profile Image with Camera */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <img
            src={profileImage}
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

        {/* Form */}
        <div className="space-y-4">

          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
            />
          </div>

        </div>

        {/* Save */}
        <button
          onClick={() => navigate("/Profile")}
          className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl font-semibold"
        >
          Save Changes
        </button>

      </div>
    </div>
  );
};

export default EditProfile;
