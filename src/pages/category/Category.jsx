import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUtensils,
  FaBus,
  FaShoppingBag,
  FaHome,
  FaMoneyBillWave,
  FaBriefcase,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";

const Category = () => {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState("Expense");

  // Sample recent transactions
  const recentExpenses = [
    { id: 1, category: "Food", amount: 250, date: "Today, 2:30 PM", icon: <FaUtensils /> },
    { id: 2, category: "Travel", amount: 150, date: "Yesterday, 5:00 PM", icon: <FaBus /> },
    { id: 3, category: "Shopping", amount: 1200, date: "2 days ago", icon: <FaShoppingBag /> },
    { id: 4, category: "Rent", amount: 5000, date: "5 days ago", icon: <FaHome /> },
        { id: 5, category: "Food", amount: 250, date: "Today, 2:30 PM", icon: <FaUtensils /> },
    { id: 6, category: "Travel", amount: 150, date: "Yesterday, 5:00 PM", icon: <FaBus /> },
  ];

  const recentIncomes = [
    { id: 1, category: "Salary", amount: 5000, date: "1 week ago", icon: <FaMoneyBillWave /> },
    { id: 2, category: "Business", amount: 5000, date: "1 week ago", icon: <FaMoneyBillWave /> },
    { id: 3, category: "Salary", amount: 3000, date: "2 weeks ago", icon: <FaBriefcase /> },
     { id: 4, category: "Business", amount: 5000, date: "1 week ago", icon: <FaMoneyBillWave /> },
    { id: 5, category: "Salary", amount: 5000, date: "1 month ago", icon: <FaMoneyBillWave /> },
  ];

  const currentTransactions = activeType === "Expense" ? recentExpenses : recentIncomes;

  // Handle Add New button click
  const handleAddNew = () => {
    if (activeType === "Expense") {
      navigate("/Addcstm");
    } else {
      navigate("/CustomIncom");
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-2 overflow-hidden">
      <div className="bg-white w-full max-w-md h-full rounded-3xl p-6 font-serif md:shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="text-center mb-6 flex-shrink-0">
          <h1 className="text-2xl font-bold text-purple-700">Categories</h1>
          <p className="text-sm text-gray-500 mt-1">Select category type</p>
        </div>

        {/* Type Selector Buttons */}
        <div className="flex gap-3 mb-6 flex-shrink-0">
          <button
            onClick={() => setActiveType("Expense")}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-base transition-all ${
              activeType === "Expense"
                ? "bg-purple-600 text-white shadow-md"
                : "bg-purple-50 text-purple-600 hover:bg-purple-100"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <FaArrowDown className="text-lg" />
              <span>Expense</span>
            </div>
          </button>

          <button
            onClick={() => setActiveType("Income")}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold text-base transition-all ${
              activeType === "Income"
                ? "bg-green-600 text-white shadow-md"
                : "bg-green-50 text-green-600 hover:bg-green-100"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <FaArrowUp className="text-lg" />
              <span>Income</span>
            </div>
          </button>
        </div>

        {/* Recent Transactions */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center justify-between mb-3 flex-shrink-0">
            <h3 className="text-sm font-semibold text-gray-600">
              Recent {activeType}
            </h3>
            <button className="text-xs text-purple-600 font-semibold hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-2 overflow-y-auto flex-1">
            {currentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg
                        ${
                          activeType === "Income"
                            ? "bg-green-100 text-green-600"
                            : "bg-purple-100 text-purple-600"
                        }`}
                    >
                      {transaction.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {transaction.category}
                      </p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <p
                    className={`font-bold text-lg ${
                      activeType === "Income" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {activeType === "Income" ? "+" : "-"} ₹{transaction.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Button */}
        <button 
          onClick={handleAddNew} 
          className={`w-full mt-6 py-3 rounded-xl font-semibold text-white transition flex-shrink-0 ${
            activeType === "Income" 
              ? "bg-green-600 hover:bg-green-700" 
              : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          + Add New {activeType}
        </button>
      </div>
    </div>
  );
};

export default Category;