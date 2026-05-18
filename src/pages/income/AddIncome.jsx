import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

import { useNavigate, useParams, useLocation } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dayjs from "dayjs";

import baseURL from "../../services/baseurl";

function AddIncome() {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();

  const token = localStorage.getItem("token");

  const selectedCategory = location.state?.category;

  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: dayjs(),
    },
  });

  // LOGIN CHECK
  useEffect(() => {
    console.log("Income Category Id:", id);

    if (!token) {
      navigate("/login");
    }
  }, [token, navigate, id]);

  // SUBMIT
  const onSubmit = async (values) => {
    try {
      setLoading(true);

      // VALIDATION
      if (!id) {
        alert("Category Id missing");
        return;
      }

      console.log("Form Values:", values);

      const payload = {
        amount: Number(values.amount),

        note: values.note,

        date: values.date.format("YYYY-MM-DD"),

    
        transactionCategoryId: Number(id),
      };

      console.log("Income Payload:", payload);

      const response = await baseURL.post("/Transaction", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Income Added:", response.data);

      // RESET
      reset({
        amount: "",
        note: "",
        date: dayjs(),
      });

     
      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      console.error("Income Error:", error.response?.data || error.message);

      alert(error.response?.data?.message || "Failed to add income");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="bg-[#f7f9fc] w-full max-w-sm rounded-3xl shadow-xl p-6 relative">
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/dashboard")}
          className="absolute top-4 left-4 text-green-600"
        >
          <IoArrowBack size={24} />
        </button>

        {/* HEADING */}
        <h2 className="text-center text-2xl font-bold text-green-600 mb-2">
          Add Income
        </h2>

        {/* CATEGORY */}
        {selectedCategory && (
          <p className="text-center text-sm text-green-500 mb-6">
            Category:
            <span className="font-semibold capitalize">
              {" "}
              {selectedCategory}
            </span>
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* AMOUNT */}
          <div className="bg-white rounded-full py-3 mb-2 flex items-center justify-center shadow">
            <span className="text-gray-400 text-xl mr-1">₹</span>

            <input
              type="number"
              placeholder="0"
              className="w-28 text-4xl font-bold text-green-500 text-center outline-none bg-transparent"
              {...register("amount", {
                required: "Amount is required",
              })}
            />
          </div>

          {/* AMOUNT ERROR */}
          {errors.amount && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {errors.amount.message}
            </p>
          )}

          {/* NOTE */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter note"
              className="w-full bg-white p-3 rounded-xl shadow outline-none"
              {...register("note", {
                required: "Note is required",
              })}
            />

            {errors.note && (
              <p className="text-red-500 text-sm mt-1">{errors.note.message}</p>
            )}
          </div>

          {/* DATE PICKER */}
          <div className="w-full bg-white rounded-xl shadow p-3 mb-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                name="date"
                control={control}
                rules={{
                  required: "Date is required",
                }}
                render={({ field }) => (
                  <DatePicker
                    label="Select Date"
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)}
                    format="DD-MM-YYYY"
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </LocalizationProvider>

            {/* DATE ERROR */}
            {errors.date && (
              <p className="text-red-500 text-sm mt-2">{errors.date.message}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Income"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddIncome;
