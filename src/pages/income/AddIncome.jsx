import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function AddIncome() {
  const navigate=useNavigate();
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(dayjs());
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#f7f9fc] w-80 max-w-sm rounded-3xl shadow-xl p-6 font-serif relative">
<button
          onClick={() => navigate("/Dashboard")}
          className="absolute top-4 left-4 text-purple-600"
        >
          <IoArrowBack size={24} />
        </button>
        <h2 className="text-center text-lg font-semibold text-purple-600 mb-6">
          Add Income
        </h2>

        {/* Amount Input */}
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



        {/* Note */}
        <input
          type="text"
          placeholder="Note"
          className="w-full bg-white p-3 rounded-xl mb-4 shadow outline-none"
        />

        {/* Date */}
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


        <button  onClick={()=>navigate("/Dashboard")} className="w-full mt-6 bg-purple-600 text-white py-2 rounded-xl">
          Add Income
        </button>

      </div>
    </div>
  );
}

export default AddIncome;
