import React, { useEffect, useRef, useState } from "react";
import "./dartMode.scss";
const DartModeButton = ({ onClick }) => {
  const toggleRef = useRef();
  const [themeState, setThemeState] = useState(); //dark or light
  const handleToggle = () => {
    onClick();
    if (toggleRef.current) {
      toggleRef.current.classList.toggle("active");
    }
    setThemeState(localStorage.theme === "dark" ? "dark" : "light");
  };
  useEffect(() => {
    if (localStorage.theme === "dark") {
      toggleRef.current.classList.add("active");
    }
    setThemeState(localStorage.theme === "dark" ? "dark" : "light");
  }, []);
  return (
    <div
      className="custom-toggle lg:hidden"
      ref={toggleRef}
      onClick={handleToggle}
    >
      <div className="inner-cicle flex items-center justify-center transition-all duration-500 ">
        {themeState === "dark" ? (
          <i class="bx bx-moon"></i>
        ) : (
          <i class="bx bx-sun"></i>
        )}
      </div>
    </div>
  );
};

export default DartModeButton;
