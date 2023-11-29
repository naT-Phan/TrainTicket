import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorNotify } from "../../components/authModal/CustomInput";
import { userSelector } from "../../redux/authSelector";
import { updatePassword } from "../../slices/authSlice";
import CustomInputUser from "./CustomInputUser";
import { toast } from "react-toastify";

const PasswordTab = () => {
  const {
    user: { user },
    isErr,
    isLoading,
    msg,
  } = useSelector(userSelector);
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordAgain: "",
  });
  const handleOnChange = (e) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value,
    });
    if (
      passwordForm.newPassword.length > 6 &&
      passwordForm.oldPassword.length > 6 &&
      passwordForm.newPasswordAgain.length > 6
    )
      setChangeStatus(true);
    else setChangeStatus(false);

    setErr("");
  };

  const [err, setErr] = useState("");

  const [changeStatus, setChangeStatus] = useState(false);
  const dispatch = useDispatch();
  const handleChangePassword = () => {
    setChangeStatus(false);
    if (passwordForm.newPassword !== passwordForm.newPasswordAgain) {
      setErr("Mật khẩu mới không giống nhau");
      return;
    }
    const data = {
      id: user._id,
      oldPassword: passwordForm.oldPassword,
      newPassword: passwordForm.newPassword,
    };
    dispatch(updatePassword(data));
  };
  useEffect(() => {
    setErr(msg);
    // if (!msg) {
    //   if (!isErr && !isLoading) notify();
    // }
  }, [isErr]);

  const notify = () => {
    toast("Đổi mật khẩu thành công");
  };
  return (
    <div className="mt-8">
      <div className="mt-10 mb-5 font-bold text-base">Đổi mật khẩu</div>
      <div className=" mb-4 flex flex-col text-base gap-10">
        <CustomInputUser
          onChange={handleOnChange}
          value={passwordForm.oldPassword}
          type="password"
          name="oldPassword"
        >
          Mật khẩu cũ
        </CustomInputUser>
        <div className="flex items-center gap-10">
          <CustomInputUser
            onChange={handleOnChange}
            value={passwordForm.newPassword}
            name="newPassword"
            type="password"
          >
            Mật khẩu mới
          </CustomInputUser>
          <CustomInputUser
            onChange={handleOnChange}
            name="newPasswordAgain"
            value={passwordForm.newPasswordAgain}
            type="password"
          >
            Nhập lại khẩu mới
          </CustomInputUser>
        </div>
      </div>
      {err && <ErrorNotify className=" !text-base">{err}</ErrorNotify>}

      <div className="mt-8 w-full flex justify-start">
        <div
          onClick={handleChangePassword}
          className={`min-w-[200px] flex items-center gap-2 justify-center cursor-pointer w-fit text-center text-base px-2 py-3 rounded-lg bg-primary text-white hover:bg-opacity-90 ${
            !changeStatus && !isLoading
              ? "bg-gray-300 opacity-50"
              : "bg-primary opacity-100"
          }`}
        >
          {isLoading && (
            <div className="w-6 h-6 rounded-full border-2 animate-spin border-r-transparent"></div>
          )}
          Lưu
        </div>
      </div>
    </div>
  );
};

export default PasswordTab;
