import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import CustomInput, { ErrorNotify } from "./CustomInput";
import { Checkbox } from "antd";
import CustomButton from "./CustomButton";
import { register } from "../../slices/authSlice";
import { userSelector } from "../../redux/authSelector";

const SignUp = ({ setAuthType }) => {
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignUp = () => {
    dispatch(
      register({
        ...signUpForm,
        username: uuidv4(),
        contactNumber: uuidv4(),
      })
    );
  };

  const { msg } = useSelector(userSelector);
  return (
    <Fragment>
      {/* for sign up */}
      <div className="input-field flex flex-col gap-3 ">
        <div className="flex items-center gap-4">
          <CustomInput
            inputType="text"
            name="firstName"
            value={signUpForm.firstName}
            onChange={handleOnChange}
            placeHolder="First Name"
            title="First Name"
          />
          <CustomInput
            name="lastName"
            value={signUpForm.lastName}
            onChange={handleOnChange}
            inputType="text"
            placeHolder="Last Name"
            title="Last Name"
          />
        </div>
        <CustomInput
          name="email"
          value={signUpForm.email}
          onChange={handleOnChange}
          inputType="email"
          placeHolder="Email here..."
          title="Email"
        />
        <CustomInput
          name="password"
          value={signUpForm.password}
          onChange={handleOnChange}
          inputType="password"
          placeHolder="Password..."
          title="Password"
        />
      </div>
      <div className="mt-4">{msg && <ErrorNotify>{msg}</ErrorNotify>}</div>

      <div className="flex my-5  justify-start gap-3">
        <Checkbox></Checkbox>
        <div className="text-left opacity-90 text-sm  mr-1 ">
          I've read and accepted
          <span className="text-blue-500 cursor-pointer">
            {" "}
            Terms of Services{" "}
          </span>
          and{" "}
          <span className="text-blue-500 cursor-pointer"> Privacy Policy </span>
        </div>
      </div>

      <CustomButton onClick={handleSignUp}> Sign up</CustomButton>

      <div className="mt-3 text-center">
        Had an account ?{" "}
        <span
          onClick={() => setAuthType("login")}
          className="text-blue-400 cursor-pointer"
        >
          Sign in
        </span>
      </div>
    </Fragment>
  );
};

export default SignUp;
