import React, { Fragment, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import AuthModal from "../../components/authModal/AuthModal";
import { userSelector } from "../../redux/authSelector";
import UserGuest from "./UserGuest";
import { UserLogin } from "./UserLogined";

const logo = require("../../asset/img/logoOfficial2.png");

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [authType, setAuthType] = useState("login");

  const openLoginModal = () => {
    setShowModal((prev) => !prev);
    setAuthType("login");
  };
  const openRegisterModal = () => {
    setShowModal(true);
    setAuthType("register");
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const { user } = useSelector(userSelector);
  useEffect(() => {
    if (user) {
      setShowModal(false);
    }
  }, []);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <div className="min-h-[80px] bg-white shadow-md dark:!bg-black !transition-colors !duration-500 2xl:px-16 md:px-1 w-200 flex items-center">
        <div className=" flex items-center w-screen justify-between">
          <div className="header__logo flex-1 ssm:w-[180px] ml-2 ">
            <div
              className="img-logo w-fit h-20 cursor-pointer"
              onClick={handleNavigate}
            >
              <img className="w-full h-full object-cover" src={logo} alt="" />
            </div>
          </div>
          <div className="header__nav hidden">
            <ul className="mynavbar">
              <li className="navbar__item navbar__item--actived">Thuê xe</li>
              <li className="navbar__item ">Quản lý đơn hàng</li>
              <li className="navbar__item ">Trở thành đối tác</li>
            </ul>
          </div>
          {user ? (
            <UserLogin></UserLogin>
          ) : (
            <UserGuest
              onClickRegister={openRegisterModal}
              onClickLogin={openLoginModal}
            ></UserGuest>
          )}
        </div>
      </div>
      {/* {showModal ? <ModalLogin close={openModal} /> : null} */}
      {showModal && !user ? (
        <AuthModal
          setAuthType={setAuthType}
          authType={authType}
          handleClose={closeModal}
        />
      ) : null}
      <Outlet />
    </Fragment>
  );
};

export default Header;
