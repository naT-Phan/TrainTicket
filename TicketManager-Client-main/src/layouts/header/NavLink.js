import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ className }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`flex items-center gap-10 list-none xl:hidden ${className}`}
    >
      <Link
        to="/"
        className={`${pathname === "/" ? "text-blue-600 font-bold" : ""}`}
      >
        Trang chủ
      </Link>
      <Link
        className={`${
          pathname === "/checkticket" ? "text-blue-600 font-bold" : ""
        }`}
        to="/checkticket"
      >
        Kiểm tra vé
      </Link>
      {/* <Link to="/news">Tin tức</Link> */}
      <Link
        className={`${
          pathname === "/getintouch" ? "text-blue-600 font-bold" : ""
        }`}
        to="/getintouch"
      >
        Liên hệ
      </Link>
    </div>
  );
};

export default NavLink;
