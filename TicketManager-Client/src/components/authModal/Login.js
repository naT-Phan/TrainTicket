import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHandleOnChange from "../../hooks/useHandleOnChange";
import { userSelector } from "../../redux/authSelector";
import { login } from "../../slices/authSlice";
import CustomButton from "./CustomButton";
import CustomInput, { ErrorNotify } from "./CustomInput";

const Login = ({ setAuthType }) => {
  const initState = {
    email: "",
    password: "",
  };
  const { formValue, setFormValue, handleOnChange } =
    useHandleOnChange(initState);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(formValue));
  };

  const { msg } = useSelector(userSelector);

  return (
    <Fragment>
      <div className="input-field flex flex-col gap-3 ">
        <CustomInput
          name="email"
          value={formValue.email}
          onChange={handleOnChange}
          inputType="email"
          placeHolder="Email here..."
          title="Email"
        />
        <CustomInput
          name="password"
          value={formValue.password}
          onChange={handleOnChange}
          inputType="password"
          placeHolder="Password..."
          title="Password"
        />
      </div>

      <div className="mt-4">{msg && <ErrorNotify>{msg}</ErrorNotify>}</div>

      <div className="text-right opacity-70 text-sm my-3 mr-1 ">
        Forgot your password?
      </div>

      <CustomButton onClick={handleLogin}>Login</CustomButton>
      <div className="mt-3 text-center">
        Dont have account ?{" "}
        <span
          onClick={() => setAuthType("signup")}
          className="text-blue-400 cursor-pointer"
        >
          Sign Up
        </span>
      </div>
    </Fragment>
  );
};

export default Login;
