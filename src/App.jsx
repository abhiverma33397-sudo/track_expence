import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Firstpage from "./pages/welcome/Welcome";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/Forget";
import OTPpage from "./pages/auth/OTPpage";
import NewPassword from "./pages/auth/newpassword";

import Dashboard from "./pages/dashboard/Dashboard";
import AddExpense from "./pages/expence/AddExpense";
import AddIncome from "./pages/income/AddIncome";
import Profile from "./pages/profile/Profile";
import Addcstm from "./pages/expence/Addcstmexpence";
import CustomIncom from "./pages/income/customIncom";
import AppLayout from "./pages/layouts/layout";
import Category from "./pages/category/Category";
import EditProfile from "./pages/profile/EditProfile";
import ChangePassword from "./pages/auth/ChangePassword";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" />
    <BrowserRouter>
      <Routes>

        {/* Category */}
       

        {/* Pages WITHOUT bottom bar */}
        <Route path="/" element={<Firstpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Forget" element={<ForgetPassword />} />
        <Route path="/OTPpage" element={<OTPpage />} />
        <Route path="/NewPassword" element={<NewPassword />} />

        {/* Pages WITH bottom bar */}
        <Route path="/Dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/AddExpense" element={<AppLayout><AddExpense /></AppLayout>} />
        <Route path="/AddIncome" element={<AppLayout><AddIncome /></AppLayout>} />
        <Route path="/Profile" element={<AppLayout><Profile /></AppLayout>} />
        <Route path="/Addcstm" element={<AppLayout><Addcstm /></AppLayout>} />
        <Route path="/CustomIncom" element={<AppLayout><CustomIncom /></AppLayout>} />
        <Route path="/EditProfile" element={<AppLayout><EditProfile /></AppLayout>} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/category" element={<AppLayout><Category /></AppLayout>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
