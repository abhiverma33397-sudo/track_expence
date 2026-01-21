import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
          Change Password
        </h2>

        {/* Form */}
        <div className="space-y-4">

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full bg-purple-50 p-3 rounded-xl outline-none border border-purple-200"
            />
          </div>

        </div>

        {/* Save Button */}
        <button
          onClick={() => navigate("/Profile")}
          className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl font-semibold"
        >
          Update Password
        </button>

      </div>
    </div>
  );
};

export default ChangePassword;
