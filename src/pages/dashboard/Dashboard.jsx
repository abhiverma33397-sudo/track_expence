import React, { useState } from "react";
import user from "../../assets/images/user.jpg";
import { useNavigate } from "react-router-dom";
import { useUserDetail } from "../hooks/useuserdetails";
import {
  FaUtensils,
  FaBus,
  FaShoppingBag,
  FaHome,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const [selectedExpense, setSelectedExpense] = useState(null);
  const [selectedIncome, setSelectedIncome] = useState(null);
 const { decode } = useUserDetail();

  return (
    <div className="min-h-screen  flex items-center justify-center ">
      <div className="bg-white w-full max-w-md rounded-3xl  p-6 font-serif md:shadow-2xl md:mt-5">

        {/* User */}
        <div className="text-center mb-6">
          <img
            src={user}
            alt="user"
            className="w-16 h-16 mx-auto rounded-full border-2 border-purple-500 shadow"
          />
          <p className="mt-3 text-purple-700 font-semibold">
            {decode ?.Name}
          </p>
        </div>

        {/* Balance */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6 text-center">
          <p className="text-purple-600 text-lg">Total Balance</p>
          <p className="text-xl font-bold mt-1 text-gray-800">₹ 12,500</p>

          <div className="flex justify-between  mt-4">
            <div>
              <p className="text-base text-purple-600">Income</p>
              <p className="font-semibold text-green-600">₹ 8,000</p>
            </div>
            <div>
              <p className="text-base text-purple-600">Expense</p>
             
              <p className="font-semibold text-red-600">₹ 4,500</p>
            </div>
          </div>
        </div>

        {/* EXPENSE */}
        <Section 
          title="Select Expense Category"
          subtitle="Choose where you spent money"
          type="expense"
          selected={selectedExpense}
          setSelected={setSelectedExpense}
          onAdd={() => navigate("/Addcstm")}
          onSubmit={() => navigate("/AddExpense")}
          items={[
            { name: "Food", icon: <FaUtensils /> },
            { name: "Travel", icon: <FaBus /> },
            { name: "Shopping", icon: <FaShoppingBag /> },
            { name: "Rent", icon: <FaHome /> },
          ]}
        />

        {/* INCOME */}
        <Section
          title="Select Income Source"
          subtitle="Choose where money comes from"
          type="income"
          selected={selectedIncome}
          setSelected={setSelectedIncome}
          onAdd={() => navigate("/CustomIncom")}
          onSubmit={() => navigate("/AddIncome")}
          items={[
            { name: "Salary", icon: <FaMoneyBillWave /> },
            { name: "Business", icon: <FaBriefcase /> },
          ]}
        />


      </div>
    </div>


  );
};

{/* Section Component */} 
const Section = ({
  title,
  subtitle,
  items,
  type,
  selected,
  setSelected,
  onAdd,
  onSubmit,
}) => {
 
  const activeRing =
    type === "income"
      ? "ring-2 ring-green-500"
      : "ring-2 ring-purple-400";

  return (
    <div className="mb-7">
      <div className="mb-3">
        <p className="text-sm text-gray-500">{subtitle}</p>
        <h3 className="text-purple-700 font-semibold text-lg">
          {title}
        </h3>
        <div className="h-[2px] w-12 bg-purple-400 mt-1 rounded"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(item.name)}
            className={`cursor-pointer rounded-2xl border bg-white p-4 shadow-sm transition
              ${selected === item.name ? activeRing : "hover:shadow-md"}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg
                  ${
                    type === "income"
                      ? "bg-green-100 text-green-600"
                      : "bg-purple-100 text-purple-600"   // 🔥 CHANGE
                  }`}
              >
                {item.icon}
              </div>

              <div>
                <p className="font-semibold text-gray-700">
                  {item.name}
                </p>
                <p
                  className={`text-sm ${
                    type === "income"
                      ? "text-green-600"
                      : "text-purple-500"   // 🔥 CHANGE
                  }`}
                >
                  {type === "income" ? "+ Income" : "- Expense"}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Add Custom */}
        <div
          onClick={onAdd}
          className="cursor-pointer rounded-2xl border-2 border-dashed border-purple-300
          flex items-center justify-center text-purple-600 font-bold text-2xl
          hover:bg-purple-50 transition"
        >
          +
        </div>
      </div>

      {selected && (
        <button
          onClick={onSubmit}
          className={`w-full mt-4 py-3 rounded-xl font-semibold text-white
            ${
              type === "income"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
        >
          Continue with {selected}
        </button>
      )}


    </div>

    
  );
};

export default Dashboard;
