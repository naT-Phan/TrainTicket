import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const MenuTab = ({ setShow, handleLogin, handleSignUp }) => {
  return (
    <div className="fixed modal right-0 top-0 w-full bg-opacity-40 h-screen bg-black z-20">
      <div className="absolute menubar-anim right-0 top-0 h-full w-[300px] bg-white">
        <div className="flex mt-20 flex-col gap-2">
          <div
            onClick={handleLogin}
            className="flex px-10 py-4  items-center gap-4 text-lg rounded-md mx-4  cursor-pointer hover:bg-gray-200"
          >
            <i class="fa-solid fa-arrow-right-to-bracket"></i>
            <span>Đăng nhập</span>
          </div>

          <div
            onClick={handleSignUp}
            className="flex px-10 py-4  items-center gap-4 text-lg rounded-md mx-4  cursor-pointer hover:bg-gray-200"
          >
            <i class="fa-solid fa-user-plus"></i>
            <span>Đăng ký</span>
          </div>
        </div>
        <div className="w-2/3 mx-auto mt-4 h-[2px] bg-gray-200 "></div>

        <div className="mt-4 flex gap-2 flex-col">
          <div className="flex px-10 py-4  items-center gap-4 text-lg rounded-md mx-4  cursor-pointer hover:bg-gray-200">
            <i class="fa-solid fa-info"></i>
            <span>Giới thiệu</span>
          </div>
          <div className="flex px-10 py-4  items-center gap-4 text-lg rounded-md mx-4  cursor-pointer hover:bg-gray-200">
            <i class="fa-brands fa-teamspeak"></i>
            <span>Điều khoản</span>
          </div>
        </div>

        <div className="mt-8 w-full flex justify-center text-2xl">
          <i
            onClick={() => setShow(false)}
            class="fa-solid fa-xmark w-14 h-14  rounded-full cursor-pointer bg-gray-100 flex items-center justify-center hover:bg-gray-200 "
          ></i>
        </div>
      </div>
    </div>
  );
};

export default MenuTab;
