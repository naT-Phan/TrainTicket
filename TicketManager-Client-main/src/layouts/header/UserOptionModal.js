import React from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../slices/authSlice";

const UserOptionModal = ({ coords, onClose, setShow }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    if (link === "logout") {
      //alert("logout");
      dispatch(logOut());
      navigate("/");
      return;
    }
    onClose();
    navigate(link);
  };

  const userOptionJson = [
    {
      icon: "fa-solid fa-user-astronaut",
      title: "Tài khoản",
      link: "/profile/user",
    },
    {
      title: "Vé của tôi",
      icon: "fa-solid fa-ticket",
      link: "/profile/myticket",
    },
    {
      icon: "fa-solid fa-arrow-right-from-bracket",
      title: "Đăng suất",
      link: "logout",
    },
  ];
  return ReactDom.createPortal(
    <div
      style={{
        top: coords.top + window.scrollY + coords.height,
        left: coords.left,
      }}
      className="modal absolute z-50 top-full -ml-16 mt-4  min-w-[200px] drop-shadow-lg min-h-[160px] rounded-lg bg-white flex flex-col justify-end "
    >
      {userOptionJson.map((item, ind) => {
        return (
          <ItemOption
            key={ind}
            icon={item.icon}
            onClick={() => handleNavigate(item.link)}
          >
            {item.title}
          </ItemOption>
        );
      })}
    </div>,
    document.querySelector("body")
  );
};

const ItemOption = ({ children, icon, onClick }) => {
  return (
    <div
      className="px-10 py-4 rounded-lg bg-white flex items-center gap-4 hover:bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <i className={icon}></i>
      <span>{children}</span>
    </div>
  );
};

export default UserOptionModal;
