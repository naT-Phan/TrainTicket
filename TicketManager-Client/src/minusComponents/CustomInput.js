import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";
import { ErrorNotify } from "../pages/homePage/MainPage";

const CustomInput = ({
  placeholder,
  type,
  className,
  name,
  handleOnChange,
  nodeRef,
  err,
  value,
}) => {
  return (
    <div className={`flex flex-col items-start gap-1 w-full relative`}>
      <p className="ml-1">{placeholder}</p>
      <input
        ref={nodeRef}
        onChange={handleOnChange}
        name={name}
        value={value}
        type={type}
        className={`${className} text-base w-full px-4 py-2 rounded-md bg-gray-100 border-2 border-gray-200 outline-none focus:!border-blue-200`}
      ></input>

      {err && (
        <div className="absolute md:relative md:bottom-0 md:mb-0 md:mt-4 -bottom-8 left-0 right-0 text-red-400 flex items-center gap-2 text-sm ml-2">
          <i class="fa-solid fa-triangle-exclamation "></i>
          {err}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
