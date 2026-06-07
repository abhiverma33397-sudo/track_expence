
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export const useUserDetail = () => {
  const [decode, setDecode] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setDecode(null);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      console.log("Decoded Token:", decoded);
      setDecode(decoded);
    } catch (error) {
      console.log("Invalid Token:", error);
      localStorage.removeItem("token");
      setDecode(null);
    }
  }, []);

  return { decode };
};

export default useUserDetail;