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
import AddExpense from "./pages/expence/Addexpense";
import Profile from "./pages/profile/Profile";
import Category from "./pages/category/Category";
import EditProfile from "./pages/profile/EditProfile";
import AppLayout from "./pages/layouts/layout";
import EditExpensePage from "./pages/dashboard/EditExpensePage";
import CustomExpense from "./pages/expence/CustomExpense";

import CustomIncom from"./pages/income/CustomIncom";
import AddIncome from "./pages/income/AddIncome";




function Router() {
  return (
    <>
      <Toaster position="top-center" />

      <BrowserRouter>
        <Routes>

          {/* AUTH PAGES */}
          <Route path="/" element={<Firstpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/OTPpage" element={<OTPpage />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />

          {/* DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            }
          />

          {/* ADD EXPENSE */}
          <Route
            path="/add-expense/:id"
            element={
              <AppLayout>
                <Addexpense />
              </AppLayout>
            }
          />

          {/* ADD INCOME */}
          <Route
            path="/add-income/:id"
            element={
              <AppLayout>
                <AddIncome />
              </AppLayout>
            }
          />

          {/* PROFILE */}
          <Route
            path="/profile"
            element={
              <AppLayout>
                <Profile />
              </AppLayout>
            }
          />

       
          <Route
            path="/edit-profile"
            element={
              <AppLayout>
                <EditProfile />
              </AppLayout>
            }
          />

        
          <Route
            path="/add-custom-expense"
            element={
              <AppLayout>
                <CustomExpense/>
              </AppLayout>
            }
          />

        
          <Route
            path="/custom-income"
            element={
              <AppLayout>
                <CustomIncom/>
              </AppLayout>
            }
          />

          {/* CATEGORY */}
          <Route
            path="/category"
            element={
              <AppLayout>
                <Category />
              </AppLayout>
            }
          />

          {/* EDIT EXPENSE */}
          <Route
            path="/edit-expense/:id"
            element={
              <AppLayout>
                <EditExpensePage />
              </AppLayout>
            }
          />

         
          <Route path="/edit-income/:id" element={<AppLayout><EditExpensePage/></AppLayout>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;