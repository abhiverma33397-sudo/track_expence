
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // import { useUserDetail } from "../hooks/useuserdetails";
// // import {
// //   FaUtensils,
// //   FaBus,
// //   FaShoppingBag,
// //   FaHome,
// //   FaMoneyBillWave,
// //   FaBriefcase,
// //   FaArrowDown,
// //   FaArrowUp,
// // } from "react-icons/fa";

// // import baseURL from "../../services/baseurl";
// // import toast from "react-hot-toast";

// // const Category = () => {
// //   const navigate = useNavigate();
// //  const { decode } = useUserDetail();

// //   const [transactions, setTransactions] = useState([]);

  
// //   const [activeType, setActiveType] = useState("Expense");

// // const userIdd=decode?.UserId;
// // console.log(userIdd)
// //   useEffect(() => {
// //     if(userIdd){
// //     fetchTransaction();
// //     }
// //   }, [userIdd]);

// //   // Fetch API
// //   const fetchTransaction = async () => {
// //     try {
// //       const response = await baseURL.get("/Transaction",{
// //       params: {
// //         userId: userIdd,
// //       }}
// //       );

// //       console.log("Transaction Data:", response.data);

// //       // Save API data
// //       setTransactions(response.data || []);
// //     } catch (error) {
// //       console.log(error);
// //       toast.error("Failed to load transactions");
// //     }
// //   };

// //   const currentTransactions = transactions.filter(
// //   (item) =>
// //     item.type?.toLowerCase() === activeType.toLowerCase()
// // );

  
// //   const handleAddNew = () => {
// //     if (activeType === "Expense") {
// //       navigate("/add-custom-expense");
// //     } else {
// //       navigate("/custom-income");
// //     }
// //   };

 
// //   const getIcon = (category) => {
// //     switch (category) {
// //       case "Food":
// //         return <FaUtensils />;

// //       case "Travel":
// //         return <FaBus />;

// //       case "Shopping":
// //         return <FaShoppingBag />;

// //       case "Rent":
// //         return <FaHome />;

// //       case "Salary":
// //         return <FaMoneyBillWave />;

// //       case "Business":
// //         return <FaBriefcase />;

// //       default:
// //         return <FaMoneyBillWave />;
// //     }
// //   };

// //   return (
// //     <div className="h-screen bg-gray-50 flex items-center justify-center p-2 overflow-hidden">
// //       <div className="bg-white w-full max-w-md h-full rounded-3xl p-6 font-serif md:shadow-2xl flex flex-col">

// //         {/* Header */}
// //         <div className="text-center mb-6 flex-shrink-0">
// //           <h1 className="text-2xl font-bold text-purple-700">
// //             Categories
// //           </h1>

// //           <p className="text-sm text-gray-500 mt-1">
// //             Select category type
// //           </p>
// //         </div>

// //         {/* Type Buttons */}
// //         <div className="flex gap-3 mb-6 flex-shrink-0">

// //           {/* Expense Button */}
// //           <button
// //             type="button"
// //             onClick={() => setActiveType("Expense")}
// //             className={`flex-1 py-3 px-4 rounded-xl font-semibold text-base transition-all ${
// //               activeType === "Expense"
// //                 ? "bg-purple-600 text-white shadow-md"
// //                 : "bg-purple-50 text-purple-600 hover:bg-purple-100"
// //             }`}
// //           >
// //             <div className="flex items-center justify-center gap-2">
// //               <FaArrowDown className="text-lg" />
// //               <span>Expense</span>
// //             </div>
// //           </button>

// //           {/* Income Button */}
// //           <button
// //             type="button"
// //             onClick={() => setActiveType("Income")}
// //             className={`flex-1 py-3 px-4 rounded-xl font-semibold text-base transition-all ${
// //               activeType === "Income"
// //                 ? "bg-green-600 text-white shadow-md"
// //                 : "bg-green-50 text-green-600 hover:bg-green-100"
// //             }`}
// //           >
// //             <div className="flex items-center justify-center gap-2">
// //               <FaArrowUp className="text-lg" />
// //               <span>Income</span>
// //             </div>
// //           </button>
// //         </div>

// //         {/* Transactions */}
// //         <div className="flex-1 flex flex-col min-h-0">

// //           {/* Heading */}
// //           <div className="flex items-center justify-between mb-3 flex-shrink-0">
// //             <h3 className="text-sm font-semibold text-gray-600">
// //               Recent {activeType}
// //             </h3>

// //             <button
// //               type="button"
// //               className="text-xs text-purple-600 font-semibold hover:underline"
// //             >
// //               View All
// //             </button>
// //           </div>

// //           {/* Transaction List */}
// //           <div className="space-y-2 overflow-y-auto flex-1">

// //             {currentTransactions.length > 0 ? (
// //               currentTransactions.map((transaction) => (
// //                 <div
// //                   key={transaction._id}
// //                   className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition"
// //                 >
// //                   <div className="flex items-center justify-between">

// //                     {/* Left */}
// //                     <div className="flex items-center gap-3">

// //                       {/* Icon */}
// //                       <div
// //                         className={`w-12 h-12 rounded-full flex items-center justify-center text-lg
// //                         ${
// //                           activeType === "Income"
// //                             ? "bg-green-100 text-green-600"
// //                             : "bg-purple-100 text-purple-600"
// //                         }`}
// //                       >
// //                         {getIcon(transaction.category)}
// //                       </div>

// //                       {/* Details */}
// //                       <div>
// //                         <p className="font-semibold text-gray-800">
// //                           {transaction.category}
// //                         </p>

// //                         <p className="text-xs text-gray-500">
// //                           {transaction.date || "No Date"}
// //                         </p>
// //                       </div>
// //                     </div>

// //                     {/* Amount */}
// //                     <p
// //                       className={`font-bold text-lg ${
// //                         activeType === "Income"
// //                           ? "text-green-600"
// //                           : "text-red-600"
// //                       }`}
// //                     >
// //                       {activeType === "Income" ? "+" : "-"} ₹
// //                       {transaction.amount}
// //                     </p>

// //                   </div>
// //                 </div>
// //               ))
// //             ) : (
// //               <div className="flex justify-center items-center h-full">
// //                 <p className="text-gray-400 text-sm">
// //                   No {activeType} Transactions
// //                 </p>
// //               </div>
// //             )}

// //           </div>
// //         </div>

// //         {/* Add Button */}
// //         <button
// //           type="button"
// //           onClick={handleAddNew}
// //           className={`w-full mt-6 py-3 rounded-xl font-semibold text-white transition flex-shrink-0 ${
// //             activeType === "Income"
// //               ? "bg-green-600 hover:bg-green-700"
// //               : "bg-purple-600 hover:bg-purple-700"
// //           }`}
// //         >
// //           + Add New {activeType}
// //         </button>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Category;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUserDetail } from "../hooks/useuserdetails";

// import {
//   FaUtensils,
//   FaBus,
//   FaShoppingBag,
//   FaHome,
//   FaMoneyBillWave,
//   FaBriefcase,
//   FaArrowDown,
//   FaArrowUp,
//   FaQuestionCircle,
// } from "react-icons/fa";

// import baseURL from "../../services/baseurl";
// import toast from "react-hot-toast";

// const Category = () => {
//   const navigate = useNavigate();
//   const { decode } = useUserDetail();

//   const [transactions, setTransactions] = useState([]);
//   const [activeType, setActiveType] = useState("Expense");
//   const [loading, setLoading] = useState(false);

//   const userIdd = decode?.UserId;

//   useEffect(() => {
//     if (userIdd) {
//       fetchTransaction();
//     }
//   }, [userIdd]);

//   const fetchTransaction = async () => {
//     try {
//       setLoading(true);

//       const response = await baseURL.get("/Transaction", {
//         params: {
//           userId: userIdd,
//         },
//       });

//       setTransactions(response.data || []);
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to load transactions");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ FIXED: correct filter using category.type
//   // assumption:
//   // 1 = Income
//   // 2 = Expense
//   const typeMap = {
//     Income: 2,
//     Expense: 1,
//   };

//   const currentTransactions = transactions.filter(
//     (item) => item.category?.type === typeMap[activeType]
//   );

//   const handleAddNew = () => {
//     if (activeType === "Expense") {
//       navigate("/add-custom-expense");
//     } else {
//       navigate("/add-income/:id");
//     }
//   };

//   // ✅ FIXED: dynamic icon using category.name
//   const getIcon = (categoryName) => {
//     const icons = {
//       Food: <FaUtensils />,
//       Travel: <FaBus />,
//       Shopping: <FaShoppingBag />,
//       Rent: <FaHome />,
//       Salary: <FaMoneyBillWave />,
//       Business: <FaBriefcase />,
//     };

//     return icons[categoryName] || <FaQuestionCircle />;
//   };

//   const formatDate = (date) => {
//     if (!date) return "No Date";

//     return new Date(date).toLocaleDateString("en-IN", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   return (
//     <div className="h-screen bg-gray-50 flex items-center justify-center p-2 overflow-hidden">
//       <div className="bg-white w-full max-w-md h-full rounded-3xl p-6 font-serif md:shadow-2xl flex flex-col">

//         {/* Header */}
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-purple-700">
//             Categories
//           </h1>

//           <p className="text-sm text-gray-500 mt-1">
//             Total Transactions: {transactions.length}
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-3 mb-6">

//           <button
//             onClick={() => setActiveType("Expense")}
//             className={`flex-1 py-3 rounded-xl font-semibold ${
//               activeType === "Expense"
//                 ? "bg-purple-600 text-white"
//                 : "bg-purple-50 text-purple-600"
//             }`}
//           >
//             <div className="flex items-center justify-center gap-2">
//               <FaArrowDown />
//               Expense
//             </div>
//           </button>

//           <button
//             onClick={() => setActiveType("Income")}
//             className={`flex-1 py-3 rounded-xl font-semibold ${
//               activeType === "Income"
//                 ? "bg-green-600 text-white"
//                 : "bg-green-50 text-green-600"
//             }`}
//           >
//             <div className="flex items-center justify-center gap-2">
//               <FaArrowUp />
//               Income
//             </div>
//           </button>
//         </div>

//         {/* List */}
//         <div className="flex-1 overflow-y-auto">

//           {loading ? (
//             <p className="text-center text-gray-400">Loading...</p>
//           ) : currentTransactions.length > 0 ? (
//             <div className="space-y-3">

//               {currentTransactions.map((transaction) => (
//                 <div
//                   key={transaction.id}
//                   className="bg-gray-50 p-4 rounded-xl border"
//                 >
//                   <div className="flex justify-between items-center">

//                     {/* Left */}
//                     <div className="flex items-center gap-3">

//                       <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
//                         {getIcon(transaction.category?.name)}
//                       </div>

//                       <div>
//                         <p className="font-semibold">
//                           {transaction.category?.name}
//                         </p>

//                         <p className="text-xs text-gray-500">
//                           {formatDate(transaction.date)}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Right */}
//                     <div className="text-right">
//                       <p
//                         className={`font-bold ${
//                           activeType === "Income"
//                             ? "text-green-600"
//                             : "text-red-600"
//                         }`}
//                       >
//                         {activeType === "Income" ? "+" : "-"} ₹
//                         {transaction.amount}
//                       </p>
//                     </div>

//                   </div>
//                 </div>
//               ))}

//             </div>
//           ) : (
//             <p className="text-center text-gray-400">
//               No {activeType} Transactions Found
//             </p>
//           )}
//         </div>

//         {/* Add Button */}
//         <button
//           onClick={handleAddNew}
//           className={`w-full mt-4 py-3 rounded-xl text-white font-semibold ${
//             activeType === "Income"
//               ? "bg-green-600"
//               : "bg-purple-600"
//           }`}
//         >
//           + Add New {activeType}
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Category;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserDetail } from "../hooks/useuserdetails";

import {
  FaUtensils,
  FaBus,
  FaShoppingBag,
  FaHome,
  FaMoneyBillWave,
  FaBriefcase,
  FaArrowDown,
  FaArrowUp,
  FaQuestionCircle,
} from "react-icons/fa";

import baseURL from "../../services/baseurl";
import toast from "react-hot-toast";

const Category = () => {
  const navigate = useNavigate();
  const { decode } = useUserDetail();

  const [transactions, setTransactions] = useState([]);
  const [activeType, setActiveType] = useState("Expense");
  const [loading, setLoading] = useState(false);

  const userIdd = decode?.UserId;

  useEffect(() => {
    if (userIdd) fetchTransaction();
  }, [userIdd]);

  const fetchTransaction = async () => {
    try {
      setLoading(true);

      const response = await baseURL.get("/Transaction", {
        params: { userId: userIdd },
      });

      setTransactions(response.data || []);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load transactions");
    } finally {
      setLoading(false);
    }
  };

  // ✅ FIXED TYPE MAPPING (CORRECT)
  const typeMap = {
    Expense: 1,
    Income: 2
    
  };

  const currentTransactions = transactions.filter(
    (item) => item.category?.type === typeMap[activeType]
  );

  const handleAddNew = () => {
    if (activeType === "Expense") {
      navigate("/add-custom-expense");
    } else {
      navigate("/custom-income"); // ✅ FIXED
    }
  };

  const getIcon = (name) => {
    const icons = {
      Food: <FaUtensils />,
      Travel: <FaBus />,
      Shopping: <FaShoppingBag />,
      Rent: <FaHome />,
      Salary: <FaMoneyBillWave />,
      Business: <FaBriefcase />,
    };

    return icons[name] || <FaQuestionCircle />;
  };

  const formatDate = (date) => {
    if (!date) return "No Date";
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-3">
    <div className="bg-white w-full max-w-md h-[95vh] rounded-3xl shadow-2xl p-5 flex flex-col overflow-hidden">

      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">
          Categories
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Total Transactions: {transactions.length}
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-3 mb-5">

        {/* Expense */}
        <button
          onClick={() => setActiveType("Expense")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold transition-all duration-200 ${
            activeType === "Expense"
              ? "bg-purple-600 text-white shadow-md"
              : "bg-purple-100 text-purple-700 hover:bg-purple-200"
          }`}
        >
          <FaArrowDown />
          Expense
        </button>

        {/* Income */}
        <button
          onClick={() => setActiveType("Income")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold transition-all duration-200 ${
            activeType === "Income"
              ? "bg-green-600 text-white shadow-md"
              : "bg-green-100 text-green-700 hover:bg-green-200"
          }`}
        >
          <FaArrowUp />
          Income
        </button>
      </div>

      {/* Transactions */}
      <div className="flex-1 overflow-y-auto pr-1">

        {loading ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-400">Loading...</p>
          </div>
        ) : currentTransactions.length > 0 ? (
          <div className="space-y-3">

            {currentTransactions.map((t) => (
              <div
                key={t.id}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">

                  {/* Left */}
                  <div className="flex items-center gap-3">

                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg ${
                        activeType === "Income"
                          ? "bg-green-100 text-green-600"
                          : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {getIcon(t.category?.name)}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-800 capitalize">
                        {t.category?.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {formatDate(t.date)}
                      </p>
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <p
                      className={`font-bold text-lg ${
                        activeType === "Income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {activeType === "Income" ? "+" : "-"} ₹{t.amount}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-400 text-sm">
              No {activeType} Transactions Found
            </p>
          </div>
        )}
      </div>

      {/* Add Button */}
      <button
        onClick={handleAddNew}
        className={`w-full mt-5 py-3 rounded-2xl text-white font-semibold text-lg transition-all ${
          activeType === "Income"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-purple-600 hover:bg-purple-700"
        }`}
      >
        + Add New {activeType}
      </button>

    </div>
  </div>
)};

export default Category;