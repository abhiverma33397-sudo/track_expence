
import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import baseURL from "../../services/baseurl";

function AddIncome() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(dayjs());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleAddIncome = async () => {
    try {
      if (!amount) {
        alert("Amount is required");
        return;
      }

      if (!note) {
        alert("Note is required");
        return;
      }

      setLoading(true);

      const payload = {
        amount: Number(amount),
        note: note,
        date: date.format("YYYY-MM-DD"),
        transactionCategoryId: 6,
      };

      console.log("Income Payload:", payload);

      const response = await baseURL.post(
        "/Transaction",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Income Added:", response.data);

      navigate("/Dashboard");
    }
     catch (error) {
      console.log(error);

      console.error(
        "Income Error:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#f7f9fc] w-80 max-w-sm rounded-3xl shadow-xl p-6 font-serif relative">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/Dashboard")}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>

        {/* HEADING */}
        <h2 className="text-center text-lg font-semibold text-purple-600 mb-6">
          Add Income
        </h2>

        {/* AMOUNT */}
        <div className="bg-white rounded-full py-3 mb-6 flex items-center justify-center shadow">
          <span className="text-gray-400 text-xl mr-1">₹</span>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
            className="w-24 text-4xl font-semibold text-green-500 text-center outline-none bg-transparent"
          />
        </div>

        {/* NOTE */}
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Note"
          className="w-full bg-white p-3 rounded-xl mb-4 shadow outline-none"
        />

        {/* DATE */}
        <div className="w-full bg-white rounded-xl shadow p-3 mb-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              format="DD-MM-YYYY"
              sx={{ width: "100%" }}
            />
          </LocalizationProvider>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleAddIncome}
          disabled={loading}
          className="w-full mt-6 bg-purple-600 text-white py-2 rounded-xl"
        >
          {loading ? "Adding..." : "Add Income"}
        </button>
      </div>
    </div>
  );
}

export default AddIncome;