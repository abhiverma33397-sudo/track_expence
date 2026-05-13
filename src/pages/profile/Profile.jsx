import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaUserEdit, FaSignOutAlt, FaHome, FaListAlt, FaUser } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import user from "../../assets/images/user.jpg";
import { useUserDetail } from "../hooks/useuserdetails";



const Profile = () => {
  const navigate = useNavigate();
  const { decode } = useUserDetail();
 console.log(decode)
  const handleLogout = () => {
    localStorage.removeItem("token");   
    localStorage.removeItem("email");   
    navigate("/"); 
  };

  return (
  <div className=" w-screen flex md:items-center md:justify-center overflow-hidden fixed inset-0">
     
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
          src={user}            
          alt="User"
          className="w-20 h-20 mx-auto rounded-full border-2 border-purple-500 shadow mb-3"
        />

        <div className="text-center mb-6">
          <p>
          {decode?.UserName}
        </p>

        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/edit-profile")}
            className="w-full flex items-center justify-between bg-purple-100 text-purple-700 px-4 py-3 rounded-xl"
          >
            Edit Profile <FaUserEdit />
          </button>

          <button
            onClick={() => navigate("/ChangePassword")}
            className="w-full flex items-center justify-between bg-purple-100 text-purple-700 px-4 py-3 rounded-xl"
          >
            Change Password <FaUserEdit />
          </button>


          {/* Logout Button */}
            <button onClick={handleLogout} 
            
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