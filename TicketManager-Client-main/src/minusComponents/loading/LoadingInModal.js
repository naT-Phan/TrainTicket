import React from "react";

const LoadingInModal = () => {
  return (
    <div className="absolute inset-0 bg-gray-400 rounded-xl bg-opacity-60 z-10 flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-r-transparent border-4 animate-spin border-white"></div>
    </div>
  );
};

export default LoadingInModal;
