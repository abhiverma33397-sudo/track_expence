import React, { useState } from "react";
import { Calendar } from "lucide-react";

const AddCustomExpense = () => {
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = () => {
    if (!expenseType.trim()) {
      alert("Expense type is required");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const data = {
      expenseType,
      amount: parseFloat(amount),
      description,
      date,
    };

    console.log("Expense Type Data:", data);
    alert("Expense type added successfully");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 text-center font-serif">
        {/* Heading */}
        <h2 className="text-purple-600 font-bold text-xl mb-6">
          Add Expense Type
        </h2>

        {/* Expense Type */}
        <div className="text-left mb-4">
          <label className="block mb-2 text-purple-600 font-semibold">
            Expense Type Name
          </label>
          <input
            type="text"
            value={expenseType}
            onChange={(e) => setExpenseType(e.target.value)}
            placeholder="Enter expense type"
            className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Amount */}
        <div className="text-left mb-4">
          <label className="block mb-2 text-purple-600 font-semibold">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            min="0"
            step="0.01"
            className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Description */}
        <div className="text-left mb-4">
          <label className="block mb-2 text-purple-600 font-semibold">
            Description (Optional)
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            rows="3"
            className="w-full border border-purple-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Date Picker */}
        <div className="text-left mb-6">
          <label className="block mb-2 text-purple-600 font-semibold">
            Select Date
          </label>

          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500" size={20} />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-purple-300 bg-gradient-to-r from-purple-50 to-purple-100 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 justify-center">
          <button
            onClick={handleSubmit}
            className="w-44 bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
          >
            Add Expense
          </button>

          <button
            onClick={() => window.history.back()}
            className="w-44 bg-gray-200 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomExpense;