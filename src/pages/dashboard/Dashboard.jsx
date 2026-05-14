// import React, { useEffect, useMemo, useState } from "react";
// import user from "../../assets/images/user.jpg";
// import { useNavigate } from "react-router-dom";
// import { useUserDetail } from "../hooks/useuserdetails";

// import {
//   FaUtensils,
//   FaBus,
//   FaShoppingBag,
//   FaHome,
//   FaMoneyBillWave,
//   FaBriefcase,
//   FaEdit,
//   FaTrash,
// } from "react-icons/fa";

// import baseURL from "../../services/baseurl";
// import { set } from "date-fns";

// // Category Icons
// const categoryIconMap = {
//   Food: <FaUtensils />,
//   Travel: <FaBus />,
//   Shopping: <FaShoppingBag />,
//   Rent: <FaHome />,
//   Salary: <FaMoneyBillWave />,
//   Business: <FaBriefcase />,
// };

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const { decode } = useUserDetail();
//   const [categories, setCategories] = useState([]);
//   const [selectedExpense, setSelectedExpense] = useState("");
//   const [selectedIncome, setSelectedIncome] = useState("");
//   const [transactionSummary, setTransactionSummary] = useState(null);

//   // Fetch Categories
//   const getCategory = async () => {
//     try {
//       const response = await baseURL.get("Category");

//       console.log("Fetched Categories:", response.data);

//       setCategories(response.data || []);
//     } catch (error) {
//       console.log("Category Fetch Error:", error);
//     }
//   };
//   const getTransationSummery = async (token) => {
//     try {
//       const response = await baseURL.get("Transaction/Dashboard-Summery", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(response.data);
//       setTransactionSummary(response.data);
//     } catch (error) {
//       console.log("Transaction Summary Fetch Error:", error);
//     }
//   };
//   const categoryDelete = async (id, token) => {
//     try {
//       const response = await baseURL.delete(`Category/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(response.data);
//       getCategory();
//     } catch (error) {
//       console.log("Category Delete Error:", error);
//     }
//   };
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     console.log("Token:", token);

//     getCategory();
//     getTransationSummery(token);
//   }, []);

//   useEffect(() => {
//     console.log("Updated Categories:", categories);
//   }, [categories]);

//   // Expense Categories
//   const expenseCategories = useMemo(() => {
//     return categories
//       .filter((cat) => cat.type === 1)
//       .map((cat) => ({
//         id: cat.id,
//         name: cat.name,
//         icon: categoryIconMap[
//           cat.name.charAt(0).toUpperCase() + cat.name.slice(1).toLowerCase()
//         ] || <FaUtensils />,
//       }));
//   }, [categories]);

//   // Income Categories
//   const incomeCategories = useMemo(() => {
//     return categories
//       .filter((cat) => cat.type === 2)
//       .map((cat) => ({
//         id: cat.id,
//         name: cat.name,
//         icon: categoryIconMap[
//           cat.name.charAt(0).toUpperCase() + cat.name.slice(1).toLowerCase()
//         ] || <FaMoneyBillWave />,
//       }));
//   }, [categories]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-3 py-5">
//       <div className="bg-white w-full max-w-md rounded-3xl p-6 md:shadow-2xl">
//         {/* USER */}
//         <div className="text-center mb-6">
//           <img
//             src={user}
//             alt="user"
//             className="w-16 h-16 mx-auto rounded-full border-2 border-purple-500 shadow"
//           />

//           <p className="mt-3 text-purple-700 font-semibold">
//             {decode?.UserName}
//           </p>
//         </div>

//         {/* BALANCE CARD */}
//         <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6 text-center">
//           <p className="text-purple-600 text-lg">Total Balance</p>

//           <h2 className="text-3xl font-bold text-gray-800 mt-1">
//             ₹ {transactionSummary ? transactionSummary.totalBalance : "0"}
//           </h2>

//           <div className="flex justify-between mt-5">
//             <div>
//               <p className="text-purple-600 text-sm">Income</p>

//               <p className="font-semibold text-green-600 text-lg">
//                 ₹ {transactionSummary ? transactionSummary.totalIncome : "0"}
//               </p>
//             </div>

//             <div>
//               <p className="text-purple-600 text-sm">Expense</p>

//               <p className="font-semibold text-red-600 text-lg">
//                 ₹ {transactionSummary ? transactionSummary.totalExpense : "0"}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ===================== */}
//         {/* EXPENSE SECTION */}
//         {/* ===================== */}

//         <div className="mb-8">
//           <p className="text-sm text-gray-500">Choose where you spent money</p>

//           <h3 className="text-xl font-semibold text-purple-700">
//             Select Expense Category
//           </h3>

//           <div className="h-[2px] w-12 bg-purple-400 rounded mt-1 mb-4"></div>

//           <div className="grid grid-cols-2 gap-4">
//             {/* Expense Cards */}
//             {expenseCategories.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => setSelectedExpense(item.name)}
//                 className={`relative group cursor-pointer rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200
//                 ${
//                   selectedExpense === item.name
//                     ? "ring-2 ring-purple-500"
//                     : "hover:shadow-md"
//                 }`}
//               >
//                 {/* ACTION BUTTONS */}
//                 <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();

//                       navigate(`/edit-expense/${item.id}`);

//                       console.log("Edit Expense:", item.name);
//                     }}
//                     className="p-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100"
//                   >
//                     <FaEdit size={10} />
//                   </button>
//                   <button
//                     onClick={(e) => {
//                       categoryDelete(item.id, localStorage.getItem("token"));
//                       e.stopPropagation();
//                       console.log("Delete Expense:", item.name);
//                     }}
//                     className="p-1 rounded bg-red-50 text-red-500 hover:bg-red-100"
//                   >
//                     <FaTrash size={10} />
//                   </button>
//                 </div>

//                 {/* CARD CONTENT */}
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-purple-100 text-purple-600">
//                     {item.icon}
//                   </div>

//                   <div>
//                     <p className="font-semibold text-gray-700 text-sm capitalize">
//                       {item.name}
//                     </p>

//                     <p className="text-[10px] text-purple-500">- Expense</p>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* ADD EXPENSE BUTTON */}
//             <div
//               onClick={() => navigate("/add-custom-expense")}
//               className="cursor-pointer rounded-2xl border-2 border-dashed border-purple-300 flex items-center justify-center text-purple-600 text-3xl font-bold hover:bg-purple-50 transition min-h-[90px]"
//             >
//               +
//             </div>
//           </div>

//           {/* CONTINUE BUTTON */}
//           {selectedExpense && (
//             <button
//               onClick={() => navigate(`/add-expense/${selectedExpense.id}`)}
//               className="w-full mt-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
//             >
//               Continue with {selectedExpense}
//             </button>
//           )}
//         </div>

//         {/* ===================== */}
//         {/* INCOME SECTION */}
//         {/* ===================== */}

//         <div>
//           <p className="text-sm text-gray-500">Choose where money comes from</p>

//           <h3 className="text-xl font-semibold text-green-700">
//             Select Income Source
//           </h3>

//           <div className="h-[2px] w-12 bg-green-400 rounded mt-1 mb-4"></div>

//           <div className="grid grid-cols-2 gap-4">
//             {/* Income Cards */}
//             {incomeCategories.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => setSelectedIncome(item.name)}
//                 className={`relative group cursor-pointer rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200
//                 ${
//                   selectedIncome === item.name
//                     ? "ring-2 ring-green-500"
//                     : "hover:shadow-md"
//                 }`}
//               >
//                 {/* ACTION BUTTONS */}
//                 <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">
//  <button
//   onClick={(e) => {
//     e.stopPropagation();

//     navigate(`/edit-expense/${item.id}`);
//   }}
//   className="p-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100"
// >
//   <FaEdit size={10} />
// </button>
//       <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       console.log("Delete Income:", item.name);
//                     }}
//                     className="p-1 rounded bg-red-50 text-red-500 hover:bg-red-100"
//                   >
//                     <FaTrash size={10} />
//                   </button>
//                 </div>

//                 {/* CARD CONTENT */}
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-green-100 text-green-600">
//                     {item.icon}
//                   </div>

//                   <div>
//                     <p className="font-semibold text-gray-700 text-sm capitalize">
//                       {item.name}
//                     </p>

//                     <p className="text-[10px] text-green-600">+ Income</p>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* ADD INCOME BUTTON */}
//             <div
//               onClick={() => navigate("/custom-income")}
//               className="cursor-pointer rounded-2xl border-2 border-dashed border-green-300 flex items-center justify-center text-green-600 text-3xl font-bold hover:bg-green-50 transition min-h-[90px]"
//             >
//               +
//             </div>
//           </div>

//           {/* CONTINUE BUTTON */}
//           {selectedIncome && (
//             <button
//               onClick={() => navigate("/add-income")}
//               className="w-full mt-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
//             >
//               Continue with {selectedIncome}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useMemo, useState } from "react";
import user from "../../assets/images/user.jpg";
import { useNavigate } from "react-router-dom";
import { useUserDetail } from "../hooks/useuserdetails";
import {
  FaUtensils, FaBus, FaShoppingBag, FaHome,
  FaMoneyBillWave, FaBriefcase, FaEdit, FaTrash,
} from "react-icons/fa";
import baseURL from "../../services/baseurl";

const categoryIconMap = {
  Food: <FaUtensils />,
  Travel: <FaBus />,
  Shopping: <FaShoppingBag />,
  Rent: <FaHome />,
  Salary: <FaMoneyBillWave />,
  Business: <FaBriefcase />,
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { decode } = useUserDetail();
  const [categories, setCategories] = useState([]);

  // ✅ Ab poora item object store hoga, sirf name nahi
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [selectedIncome, setSelectedIncome] = useState(null);
  const [transactionSummary, setTransactionSummary] = useState(null);

  const getCategory = async () => {
    try {
      const response = await baseURL.get("Category");
      setCategories(response.data || []);
    } catch (error) {
      console.log("Category Fetch Error:", error);
    }
  };

  const getTransactionSummary = async (token) => {
    try {
      const response = await baseURL.get("Transaction/Dashboard-Summery", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactionSummary(response.data);
    } catch (error) {
      console.log("Transaction Summary Fetch Error:", error);
    }
  };

  const categoryDelete = async (id, token) => {
    try {
      await baseURL.delete(`Category/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      getCategory();
    } catch (error) {
      console.log("Category Delete Error:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    getCategory();
    getTransactionSummary(token);
  }, []);

  const expenseCategories = useMemo(() => {
    return categories
      .filter((cat) => cat.type === 1)
      .map((cat) => ({
        id: cat.id,
        name: cat.name,
        icon: categoryIconMap[
          cat.name.charAt(0).toUpperCase() + cat.name.slice(1).toLowerCase()
        ] || <FaUtensils />,
      }));
  }, [categories]);

  const incomeCategories = useMemo(() => {
    return categories
      .filter((cat) => cat.type === 2)
      .map((cat) => ({
        id: cat.id,
        name: cat.name,
        icon: categoryIconMap[
          cat.name.charAt(0).toUpperCase() + cat.name.slice(1).toLowerCase()
        ] || <FaMoneyBillWave />,
      }));
  }, [categories]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-3 py-5">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 md:shadow-2xl">

        {/* USER */}
        <div className="text-center mb-6">
          <img
            src={user}
            alt="user"
            className="w-16 h-16 mx-auto rounded-full border-2 border-purple-500 shadow"
          />
          <p className="mt-3 text-purple-700 font-semibold">{decode?.UserName}</p>
        </div>

        {/* BALANCE CARD */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6 text-center">
          <p className="text-purple-600 text-lg">Total Balance</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-1">
            ₹ {transactionSummary?.totalBalance ?? "0"}
          </h2>
          <div className="flex justify-between mt-5">
            <div>
              <p className="text-purple-600 text-sm">Income</p>
              <p className="font-semibold text-green-600 text-lg">
                ₹ {transactionSummary?.totalIncome ?? "0"}
              </p>
            </div>
            <div>
              <p className="text-purple-600 text-sm">Expense</p>
              <p className="font-semibold text-red-600 text-lg">
                ₹ {transactionSummary?.totalExpense ?? "0"}
              </p>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* EXPENSE SECTION */}
        {/* ===================== */}
        <div className="mb-8">
          <p className="text-sm text-gray-500">Choose where you spent money</p>
          <h3 className="text-xl font-semibold text-purple-700">Select Expense Category</h3>
          <div className="h-[2px] w-12 bg-purple-400 rounded mt-1 mb-4"></div>

          <div className="grid grid-cols-2 gap-4">
            {expenseCategories.map((item) => (
              <div
                key={item.id}
                // ✅ Poora item object set karo
                onClick={() => setSelectedExpense(item)}
                className={`relative group cursor-pointer rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200
                  ${selectedExpense?.id === item.id ? "ring-2 ring-purple-500" : "hover:shadow-md"}`}
              >
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/edit-expense/${item.id}`);
                    }}
                    className="p-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100"
                  >
                    <FaEdit size={10} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      categoryDelete(item.id, localStorage.getItem("token"));
                    }}
                    className="p-1 rounded bg-red-50 text-red-500 hover:bg-red-100"
                  >
                    <FaTrash size={10} />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-purple-100 text-purple-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">{item.name}</p>
                    <p className="text-[10px] text-purple-500">- Expense</p>
                  </div>
                </div>
              </div>
            ))}

            <div
              onClick={() => navigate("/add-custom-expense")}
              className="cursor-pointer rounded-2xl border-2 border-dashed border-purple-300 flex items-center justify-center text-purple-600 text-3xl font-bold hover:bg-purple-50 transition min-h-[90px]"
            >
              +
            </div>
          </div>

          {/* ✅ selectedExpense.id ab sahi se milega */}
          {selectedExpense && (
            <button
              onClick={() => navigate(`/add-expense/${selectedExpense.id}`)}
              className="w-full mt-4 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
            >
              Continue with {selectedExpense.name}
            </button>
          )}
        </div>

        {/* ===================== */}
        {/* INCOME SECTION */}
        {/* ===================== */}
        <div>
          <p className="text-sm text-gray-500">Choose where money comes from</p>
          <h3 className="text-xl font-semibold text-green-700">Select Income Source</h3>
          <div className="h-[2px] w-12 bg-green-400 rounded mt-1 mb-4"></div>

          <div className="grid grid-cols-2 gap-4">
            {incomeCategories.map((item) => (
              <div
                key={item.id}
                // ✅ Income ke liye bhi poora item object
                onClick={() => setSelectedIncome(item)}
                className={`relative group cursor-pointer rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200
                  ${selectedIncome?.id === item.id ? "ring-2 ring-green-500" : "hover:shadow-md"}`}
              >
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/edit-income/${item.id}`);
                    }}
                    className="p-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100"
                  >
                    <FaEdit size={10} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      categoryDelete(item.id, localStorage.getItem("token"));
                    }}
                    className="p-1 rounded bg-red-50 text-red-500 hover:bg-red-100"
                  >
                    <FaTrash size={10} />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-green-100 text-green-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">{item.name}</p>
                    <p className="text-[10px] text-green-600">+ Income</p>
                  </div>
                </div>
              </div>
            ))}

            <div
              onClick={() => navigate("/custom-income")}
              className="cursor-pointer rounded-2xl border-2 border-dashed border-green-300 flex items-center justify-center text-green-600 text-3xl font-bold hover:bg-green-50 transition min-h-[90px]"
            >
              +
            </div>
          </div>

          {/* ✅ selectedIncome.id navigate mein */}
          {selectedIncome && (
            <button
              onClick={() => navigate(`/add-income/${selectedIncome.id}`)}
              className="w-full mt-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
            >
              Continue with {selectedIncome.name}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;