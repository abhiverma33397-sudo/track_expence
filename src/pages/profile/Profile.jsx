import React, { use, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaUserEdit, FaSignOutAlt, FaHome, FaListAlt, FaUser } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import user from "../../assets/images/user.jpg";
import { useUserdetails } from "../hooks/useuserdetails";

const Profile = () => {
  const { decode } = useUserDetail();
  console.log(decode);
  
  const navigate = useNavigate();
  const location = useLocation();
  const decode = useUserdetails();
  console.log(decode)


  const activeClass = "text-purple-600 font-semibold";
  const inactiveClass = "text-gray-600";
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

   const handleLogout=()=>{
  localStorage.removeItem("token");
  navigate("/Login");
}

  return (
    <div className="w-screen fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative font-serif">

        <button
          onClick={() => navigate("/dashboard")}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>

        <h2 className="text-center text-xl font-semibold text-purple-600 mb-6">
          Profile
        </h2>

        {/*  User Image */}
        <img
          src={user}
          alt="User"
          className="w-20 h-20 mx-auto rounded-full border-2 border-purple-500 shadow mb-3"
        />

        {/*  User Info */}
        <div className="text-center mb-6">
          <p>
          {decode && decode[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ]}
        </p>
          <p>
          {decode && decode[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
            ]}
        </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => navigate("/editprofile")}
            className="w-full flex items-center justify-between bg-purple-100 text-purple-700 px-4 py-3 rounded-xl"
          >
            Edit Profile <FaUserEdit />
          </button>

          <button
            onClick={() => navigate("/changepassword")}
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
