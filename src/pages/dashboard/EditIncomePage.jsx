// EditIncomePage.jsx

import React, { useEffect, useState } from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import toast from "react-hot-toast";

import baseURL from "../../services/baseurl";

const EditIncomePage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [incomeName, setIncomeName] = useState("");

  const [incomeType, setIncomeType] = useState("");

  const [loading, setLoading] = useState(false);

 
  useEffect(() => {
    fetchCategory();
  }, []);


  const fetchCategory = async () => {

    try {

      const response = await baseURL.get(`/Category/${id}`);

      console.log("Income Category Data:", response.data);

      const data = response.data;

      setIncomeName(data.name || "");

      setIncomeType(data.type || "");

    } catch (error) {

      console.log(error);

      toast.error("Failed to fetch income category");
    }
  };

  // UPDATE CATEGORY
  const handleUpdate = async (e) => {

    e.preventDefault();

    if (!incomeName) {
      toast.error("Income name is required");
      return;
    }

    try {

      setLoading(true);

      const payload = {
        id: Number(id),

        name: incomeName,

        type: incomeType,
      };

      console.log("Income Update Payload:", payload);

      await baseURL.put(
        `/Category/${id}`,
        payload
      );

      toast.success("Income category updated");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      toast.error("Update failed");

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-300 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* HEADING */}
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Edit Income Category
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleUpdate}
          className="space-y-5"
        >

          {/* CATEGORY NAME */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Income Category Name
            </label>

            <input
              type="text"
              value={incomeName}
              onChange={(e) =>
                setIncomeName(e.target.value)
              }
              placeholder="Enter income category name"
              className="w-full border border-green-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          {/* CATEGORY TYPE */}
          <div>

            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Income Type
            </label>

            <input
              type="text"
              value={incomeType}
              onChange={(e) =>
                setIncomeType(e.target.value)
              }
              placeholder="Enter income type"
              className="w-full border border-green-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

          </div>

          {/* UPDATE BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {loading
              ? "Updating..."
              : "Update Income Category"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditIncomePage;