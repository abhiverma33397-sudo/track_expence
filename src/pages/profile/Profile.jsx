import React from "react";
import { useUserDetail } from "../hooks/useuserdetails";

const Profile = () => {
  const { decode } = useUserDetail();
  console.log(decode);
  return (
    <div className="flex items-center gap-3 mt-4 md:mt-0">
      <div className="text-right">
        <p className="text-sm font-medium text-gray-700">
          {decode?.role}
        </p>
        <p className="text-xs text-gray-500">
          {decode ?.email}
        </p>
      </div>
      <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-semibold">
        A
      </div>
    </div>
  );
};

export default Profile;