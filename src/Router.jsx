import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Firstpage from "./pages/welcome/Welcome";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/Forget";
import OTPpage from "./pages/auth/OTPpage";
import NewPassword from "./pages/auth/NewPassword";
import ChangePassword from "./pages/auth/ChangePassword";

import Dashboard from "./pages/dashboard/Dashboard";
import AddExpense from "./pages/expence/AddExpense";
import AddIncome from "./pages/income/AddIncome";
import Profile from "./pages/profile/Profile";
import Addcstm from "./pages/expence/Addcstmexpence";
import CustomIncom from "./pages/income/customIncom";
import Category from "./pages/category/Category";
import EditProfile from "./pages/profile/EditProfile";
import AppLayout from "./pages/layouts/layout";

function Router() {
  return (
    <>
      <Toaster position="top-center" />

      <BrowserRouter>
        <Routes>

          {/* 🔓 AUTH PAGES (NO LAYOUT) */}
          <Route path="/" element={<Firstpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/OTPpage" element={<OTPpage />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />

          {/* 🔐 APP PAGES (WITH LAYOUT) */}
          <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/add-expense" element={<AppLayout><AddExpense /></AppLayout>} />
          <Route path="/add-income" element={<AppLayout><AddIncome /></AppLayout>} />
          <Route path="/profile" element={<AppLayout><Profile /></AppLayout>} />
          <Route path="/edit-profile" element={<AppLayout><EditProfile /></AppLayout>} />
          <Route path="/add-custom-expense" element={<AppLayout><Addcstm /></AppLayout>} />
          <Route path="/custom-income" element={<AppLayout><CustomIncom /></AppLayout>} />
          
          <Route path="/category" element={<AppLayout><Category /></AppLayout>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
