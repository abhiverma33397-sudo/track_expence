import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Auth / Public Pages
import Firstpage from "./component/Firstpage";
import Login from "./component/auth/Login";

import Register from "./component/Register";
import ForgetPassword from "./component/Forget";
import OTPpage from "./component/OTPpage";
import NewPassword from "./component/newpassword";

// Protected / Dashboard Pages
import Dashboard from "./component/Dashboard";
import AddExpense from "./component/AddExpense";
import AddIncome from "./component/AddIncome";
import Profile from "./component/Profile";
import Addcstm from "./component/Addcstm";
import CustomIncom from "./component/customIncom";
import Category from "./component/Category";
import EditProfile from "./component/EditProfile";
import ChangePassword from "./component/ChangePassword";

// Layout
import AppLayout from "./component/layout";

function App() {
  return (
    <>
      {/* Toast messages */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Router */}
      <BrowserRouter>
        <Routes>

          {/* ---------- Pages WITHOUT layout (No bottom bar) ---------- */}
          <Route path="/" element={<Firstpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/otppage" element={<OTPpage />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/changepassword" element={<ChangePassword />} />

          {/* ---------- Pages WITH layout (Bottom bar / Navbar) ---------- */}
          <Route
            path="/dashboard"
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            }
          />

          <Route
            path="/addexpense"
            element={
              <AppLayout>
                <AddExpense />
              </AppLayout>
            }
          />

          <Route
            path="/addincome"
            element={
              <AppLayout>
                <AddIncome />
              </AppLayout>
            }
          />

          <Route
            path="/profile"
            element={
              <AppLayout>
                <Profile />
              </AppLayout>
            }
          />

          <Route
            path="/addcstm"
            element={
              <AppLayout>
                <Addcstm />
              </AppLayout>
            }
          />

          <Route
            path="/customincom"
            element={
              <AppLayout>
                <CustomIncom />
              </AppLayout>
            }
          />

          <Route
            path="/editprofile"
            element={
              <AppLayout>
                <EditProfile />
              </AppLayout>
            }
          />

          <Route
            path="/category"
            element={
              <AppLayout>
                <Category />
              </AppLayout>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
