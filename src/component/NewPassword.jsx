import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const navigate = useNavigate();

      

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 text-center font-serif">
        {/* Heading */}
        <h2 className="text-purple-600 font-bold text-xl mb-6">
          Create New Password
        </h2>

        {/* New Password */}
        <div className="text-left mb-4">
          <label className="block mb-2 text-purple-600 font-semibold">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="text-left mb-6">
          <label className="block mb-2 text-purple-600 font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={handleSubmit}
            className="w-44 bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
          >
            Update Password
          </button>

            <button
    onClick={() => navigate(-1)}  
    className="w-44 bg-gray-200 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-300 transition"
  >
    Cancel
  </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;