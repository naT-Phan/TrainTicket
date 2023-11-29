import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logOut } from "../../slices/authSlice";
const logoutImg = require("../../asset/img/logout.png");

const LogOutTab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className="w-full min-h-[300px] flex flex-col  mt-20 items-center ">
      <div className="w-[120px] h-fit mb-6">
        <img className="opacity-50" src={logoutImg} alt="" />
      </div>
      <div className=" font-bold opacity-90 mt-4 text-lg">
        Bạn có chắc chắn muốn đăng xuất
      </div>
      <div className="mt-4 text-md w-[420px] opacity-60 text-center">
        Giữ trạng thái đăng nhập sẽ giúp bạn đặt vé dễ dàng hơn
      </div>

      <div className="mt-10 w-full flex gap-6 justify-center">
        <div
          onClick={handleGoHome}
          className="min-w-[200px] cursor-pointer w-fit text-center text-base px-2 py-3 rounded-lg bg-gray-200 hover:bg-opacity-90"
        >
          Về trang chủ
        </div>
        <div
          onClick={handleLogOut}
          className="min-w-[200px] cursor-pointer w-fit text-center text-base px-2 py-3 rounded-lg bg-primary text-white hover:bg-opacity-90"
        >
          Đăng xuất
        </div>
      </div>
    </div>
  );
};
export default LogOutTab;
