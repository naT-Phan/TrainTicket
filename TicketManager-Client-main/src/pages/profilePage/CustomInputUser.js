import React from "react";
const CustomInputUser = ({
  children,
  name,
  onChange,
  type = "text",
  value = "",
}) => {
  return (
    <div className="item">
      <div className="label mb-1  opacity-80">{children}</div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id=""
        className="opacity-90 px-6 min-w-[300px] outline-none border-2 border-gray-200 py-3 rounded-md bg-gray-100 focus:border-blue-200"
      />
    </div>
  );
};

export default CustomInputUser;
