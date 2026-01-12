import React from "react";
import img1 from "../assets/images/img-1.png";
import { useNavigate } from "react-router-dom";

const expenseHeadings = [
  "Save your money with a smart expense tracker",
  "Track every rupee, control your expenses",
  "Manage daily expenses without stress",
  "Your personal money manager in one app",
  "Spend wisely, save more every day",
  "Plan better, spend smarter",
  "Build better money habits",
];

function Firstpage() {
  const navigate = useNavigate();
  const randomText =
    expenseHeadings[Math.floor(Math.random() * expenseHeadings.length)];

  return (
    <div className="min-h-screen flex items-center justify-center  px-3 px-sm-5">
      <div
        className="
          bg-white
          w-96
          
          max-w-sm
          sm:max-w-md
          rounded-2xl
          sm:px-6
          sm:py-8
          text-center
        "
      >
       
        <img
          src={img1}
          alt="Wallet"
          className="
            w-72
            sm:w-48
            md:w-56
            mx-auto
            mb-5
          "
        />

        <p
          className="
            font-serif
            text-xl
            sm:text-base
            md:text-lg
            text-purple-600
            mb-6
            
            px-1
          "
        >
          {randomText}
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/login")}
          className="
            w-64
            sm:w-56
            mx-auto
            block
            bg-purple-600
            text-white
            font-semibold
            py-2.5
            rounded-md
            hover:bg-purple-700
            transition
            text-sm
            sm:text-base
          "
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Firstpage;
