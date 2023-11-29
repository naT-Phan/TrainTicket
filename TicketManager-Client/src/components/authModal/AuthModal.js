import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingInModal from "../../minusComponents/loading/LoadingInModal";
import { userSelector } from "../../redux/authSelector";
import { reset } from "../../slices/authSlice";

import Login from "./Login";
import SignUp from "./SignUp";

const AuthModal = ({ handleClose, authType, setAuthType }) => {
  const { isLoading } = useSelector(userSelector);

  const dispatch = useDispatch();
  const resetForm = () => {
    dispatch(reset());
  };
  return ReactDom.createPortal(
    <div className="fixed inset-0 modal-login ">
      <div className="overlay absolute inset-0 bg-[#0000009a]"></div>
      <div className="relative w-screen inset-0 h-screen flex items-center justify-center">
        <div className="w-[450px] sm:w-[340px] sm:px-6 min-h-[400px] rounded-2xl px-10 py-6 bg-white relative">
          <div className="heading text-2xl font-bold mb-10">
            Welcome to Ticket Booking
          </div>
          {/* <div className="method-login flex items-center gap-3 text-base cursor-pointer my-6">
            <div className="login-gg flex-1 px-6 py-3 rounded-xl bg-blue-500 text-white flex h-[46px] items-center justify-center gap-4">
              <i class="fa-brands fa-google"></i>
              {authType === "login" ? "Sign in" : "Sign up"} with Google
            </div>
            <div className="login-fb rounded-xl bg-gray-800  text-white w-[46px] h-[46px] grid place-items-center">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </div>

          <div className="mb-6 txt-orlogin mt-4 text-center relative before:absolute before:content-[''] before:w-[30%] before:border-2 before:border-gray-100 before:left-2 before:top-2/4 after:absolute after:content-[''] after:w-[30%] after:right-2 after:border-2 after:border-gray-100 after:top-2/4">
            or continue with
          </div> */}

          {authType === "login" ? (
            <Login setAuthType={setAuthType} />
          ) : (
            <SignUp setAuthType={setAuthType} />
          )}

          {/* exit  */}
          <div
            onClick={() => {
              resetForm();
              handleClose();
            }}
            className="absolute z-30 right-0 top-0 w-[50px] h-[50px] rounded-full shadow-xl mt-2 mr-2 translate-x-2/4 -translate-y-2/4 text-4xl cursor-pointer  bg-white hover:!bg-blue-100   grid place-items-center"
          >
            <i class="bx bx-x opacity-70 text-2xl"></i>
          </div>

          {isLoading && <LoadingInModal />}
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default AuthModal;
