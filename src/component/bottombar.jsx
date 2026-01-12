import { FaHome, FaListAlt, FaUser } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Bottombar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeClass = "text-purple-600 font-semibold";
  const inactiveClass = "text-gray-600";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-purple-100 flex justify-around items-center py-3 shadow-inner z-50">
      <div
        onClick={() => navigate("/Dashboard")}
        className={`flex flex-col items-center cursor-pointer ${
          location.pathname === "/Dashboard" ? activeClass : inactiveClass
        }`}
      >
        <FaHome size={22} />
        <span className="text-xs">Home</span>
      </div>

      <div
        onClick={() => navigate("/category")}
        className={`flex flex-col items-center cursor-pointer ${
          location.pathname === "/category" ? activeClass : inactiveClass
        }`}
      >
        <div onClick={()=>navigate("/category")}>
        <FaListAlt size={22} />
        <span className="text-xs">List</span>
        </div>
      </div>

      <div
        onClick={() => navigate("/Profile")}
        className={`flex flex-col items-center cursor-pointer ${
          location.pathname === "/Profile" ? activeClass : inactiveClass
        }`}
      >
        <FaUser size={22} />
        <span className="text-xs">Profile</span>
      </div>
    </div>
  );
};

export default Bottombar;
