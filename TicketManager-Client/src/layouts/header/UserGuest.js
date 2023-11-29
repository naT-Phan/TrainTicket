import React from "react";
import { Link } from "react-router-dom";
import MenuTab from "../../components/menutab/MenuTab";
import useClickOutSide from "../../hooks/useClickOutSide";
import DartModeButton from "../../minusComponents/dartModeButton/DartModeButton";
import NavLink from "./NavLink";

const UserGuest = (props) => {
  const { show, setShow, nodeRef } = useClickOutSide(".modal");
  const handleDardMode = () => {
    if (localStorage.theme !== "dark") {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  const handleLogin = () => {
    props.onClickLogin();
    setShow(false);
  };
  const handleSignUp = () => {
    props.onClickRegister();
    setShow(false);
  };
  return (
    <div className="flex items-center gap-4">
      {" "}
      <NavLink className="mr-10" />
      <DartModeButton onClick={handleDardMode} />
      {localStorage.getItem("id") == null ? (
        <div className="relative">
          <div className="flex items-center sm:hidden">
            <div
              className="min-w-[160px] w-fit grid place-items-center  mr-4 text-base  py-2  rounded-lg  dark:text-white bg-gray-200  hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 cursor-pointer"
              onClick={props.onClickRegister}
              ref={props.nodeRefSecond}
            >
              Đăng ký
            </div>

            <div
              className="min-w-[160px] w-fit px- mr-6 text-base grid place-items-center py-2 rounded-lg border-transparent border-2 bg-blue-500 text-white hover:bg-blue-400 dark:bg-gray-600 dark:hover:bg-gray-500 cursor-pointer"
              onClick={props.onClickLogin}
              ref={props.nodeRef}
            >
              Đăng nhập
            </div>
          </div>
          <div
            ref={nodeRef}
            onClick={() => setShow(true)}
            className="my-auto mr-4 hidden sm:!flex cursor-pointer rounded-full p-4 hover:bg-gray-100 w-10 h-10  items-center justify-center"
          >
            <i class="fa-solid fa-bars text-xl"></i>
          </div>
          {show && (
            <MenuTab
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              setShow={setShow}
            />
          )}
        </div>
      ) : (
        <div className="header__login  js-btn-login">
          <a className="mybtn" href="/profile">
            <i className="btn-icon bx bx-user"></i>
            <span>
              {localStorage.getItem("firstName")}{" "}
              {localStorage.getItem("lastName")}
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default UserGuest;
