import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Firstpage from "./component/Firstpage";
import Login from "./component/Login";
import Register from "./component/Register";
import ForgetPassword from "./component/Forget";
import OTPpage from "./component/OTPpage";
import NewPassword from "./component/newpassword";

import Dashboard from "./component/Dashboard";
import AddExpense from "./component/AddExpense";
import AddIncome from "./component/AddIncome";
import Profile from "./component/Profile";
import Addcstm from "./component/Addcstm";
import CustomIncom from "./component/customIncom";
import AppLayout from "./component/layout";
import Category from "./component/Category";
import EditProfile from "./component/EditProfile";
import ChangePassword from "./component/ChangePassword";

function App() {
  return (
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
  );
}

export default App;
