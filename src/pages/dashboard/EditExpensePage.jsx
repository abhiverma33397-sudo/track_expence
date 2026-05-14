import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import baseURL from "../../services/baseurl";

const EditExpensePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [expenseName, setExpenseName] = useState("");
  const [expenseType, setExpenseType] = useState("");

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await baseURL.get(`/Category/${id}`);

      console.log("Category Data:", response.data);

      const data = response.data;

      setExpenseName(data.name || "");
      setExpenseType(data.type || "");
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch category");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const payload = {
      id: Number(id),
      name: expenseName,
      type:expenseType
    };

    console.log("Update Payload:", payload);

    try {
      await baseURL.put(`/Category/${id}`, payload);

      toast.success("Category updated successfully");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-300 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Edit Category
        </h1>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Category Name
            </label>

            <input
              type="text"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              placeholder="Enter category name"
              className="w-full border border-purple-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Update Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditExpensePage;