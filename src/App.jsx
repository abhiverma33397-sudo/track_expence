import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

/* -------- Public Pages -------- */
import Firstpage from "./component/Firstpage";
import Login from "./component/auth/Login";
import Register from "./component/Register";
import ForgetPassword from "./component/Forget";
import OTPpage from "./component/OTPpage";
import NewPassword from "./component/newpassword";

/* -------- Protected Pages -------- */
import Dashboard from "./component/Dashboard";
import AddExpense from "./component/AddExpense";
import AddIncome from "./component/AddIncome";
import Profile from "./component/Profile";
import Addcstm from "./component/Addcstm";
import CustomIncom from "./component/customIncom";
import Category from "./component/Category";
import EditProfile from "./component/EditProfile";
import ChangePassword from "./component/ChangePassword";

/* -------- Layout -------- */
import AppLayout from "./component/layout";

/* -------- Protected Route Component -------- */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <BrowserRouter>
        <Routes>

          {/* ---------- PUBLIC ROUTES ---------- */}
          <Route path="/" element={<Firstpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/otppage" element={<OTPpage />} />
          <Route path="/newpassword" element={<NewPassword />} />

          {/* ---------- PROTECTED ROUTES ---------- */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/addexpense"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <AddExpense />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/addincome"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <AddIncome />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Profile />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/addcstm"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Addcstm />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/customincom"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <CustomIncom />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/editprofile"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <EditProfile />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/changepassword"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <ChangePassword />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/category"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Category />
                </AppLayout>
              </ProtectedRoute>
            }
          />

      
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
