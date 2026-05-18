
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import baseURL from "../../services/baseurl";

const CustomExpense = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

 
  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("Token:", token);

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

 
  const onSubmit = async (values) => {
    try {
      setLoading(true);

     
      const token = localStorage.getItem("token");

      const response = await baseURL.post(
        "Category",
        {
          name: values.category,
          type: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Category Added:", response.data);

      reset();

      // NAVIGATE
      navigate("/add-expense", {
        state: {
          category: values.category,
        },
      });

    } catch (error) {
      console.log(error);

      console.error(
        "API Error:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-pink-50">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">

        {/* HEADING */}
        <h2 className="text-purple-600 font-bold text-2xl text-center mb-6">
          Add Expense Category
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* INPUT */}
          <div className="mb-5">

            <label className="block mb-2 text-purple-700 font-semibold">
              Expense Category Name
            </label>

            <input
              type="text"
              placeholder="Enter category name"
              className="w-full border border-purple-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register("category", {
                required: "Expense category is required",
              })}
            />

            {/* ERROR */}
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-xl hover:bg-purple-700 transition disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Expense Category"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default CustomExpense;