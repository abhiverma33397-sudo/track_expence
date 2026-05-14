
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseURL from "../../services/baseurl";

const AddCustomIncome = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [incomeType, setIncomeType] = useState("");
  const [loading, setLoading] = useState(false);

  // ADD CUSTOM INCOME CATEGORY
  const handleSubmit = async () => {
    try {
      if (!incomeType.trim()) {
        alert("Income type is required");
        return;
      }

      setLoading(true);

      // PAYLOAD
      const payload = {
        name: incomeType,
        type: 2,
      };

      console.log("Payload:", payload);

      // API CALL
      const response = await baseURL.post(
        "/Category",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Category Added:", response.data);

      alert("Income category added successfully");

      // REDIRECT TO ADD INCOME PAGE
      navigate("/add-income", {
        state: {
          category: response.data?.name || incomeType,
          categoryId: response.data?.id,
        },
      });

    } catch (error) {
      console.log(error);

      console.error(
        "Error:",
        error.response?.data || error.message
      );

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 text-center font-serif">

        {/* HEADING */}
        <h2 className="text-purple-600 font-bold text-2xl mb-8">
          Add Custom Income
        </h2>

        {/* INPUT */}
        <div className="text-left mb-6">
          <label className="block mb-2 text-purple-600 font-semibold">
            Income Type Name
          </label>

          <input
            type="text"
            value={incomeType}
            onChange={(e) => setIncomeType(e.target.value)}
            placeholder="Enter income type"
            className="w-full border border-purple-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Income"}
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomIncome;