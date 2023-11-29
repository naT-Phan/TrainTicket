import React from "react";

const CustomButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 text-center uppercase w-full bg-blue-500 text-white rounded-xl hover:bg-blue-400 ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
