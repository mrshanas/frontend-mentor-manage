import React from "react";

const Button: React.FC = () => {
  return (
    <button
      type="button"
      className="bg-red w-full h-full text-white text-xl p-2 rounded-3xl hover:text-paleblue"
    >
      Get Started
    </button>
  );
};

export default Button;
