import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInputUser from "./CustomInputUser";
import { userSelector } from "../../redux/authSelector";
import { updateUserInfo } from "../../slices/authSlice";
import { toast } from "react-toastify";

const UserInfoTab = () => {
  const {
    user: { user },
    isLoading,
  } = useSelector(userSelector);
  const [form, setForm] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    contactNumber: user?.contactNumber,
    email: user?.email,
  });
  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (!isLoading) setChangeStatus(true);
  };
  const [changeStatus, setChangeStatus] = useState(false);

  const dispatch = useDispatch();
  const handleSave = () => {
    setChangeStatus(false);
    dispatch(
      updateUserInfo({
        firstName: form.firstName,
        lastName: form.lastName,
        contactNumber: form.contactNumber,
        email: form.email,
        id: user._id,
      })
    );
    toast("Thay đổi thông tin thành công");
  };
  return (
    <div className="mt-8">
      <div className="w-fit mb-10 text-center text-lg font-bold">
        Cài đặt tài khoản
      </div>
      <div className="mt-10 mb-5 font-bold text-base">Thông tin người dùng</div>
      <div className="flex flex-wrap text-base gap-y-6 gap-x-10">
        <CustomInputUser
          onChange={handleOnChange}
          name="firstName"
          value={form.firstName}
        >
          Họ
        </CustomInputUser>
        <CustomInputUser
          onChange={handleOnChange}
          name="lastName"
          value={form.lastName}
        >
          Tên
        </CustomInputUser>
        <CustomInputUser
          onChange={handleOnChange}
          name="contactNumber"
          value={form.contactNumber}
        >
          SDT
        </CustomInputUser>

        <CustomInputUser name="email" value={form.email}>
          Email <span className="opacity-60 pl-1">(không thể chỉnh sửa)</span>
        </CustomInputUser>
      </div>

      <div className="mt-10 mb-5 font-bold text-base">Thông tin người dùng</div>
      <div className="flex mb-4 flex-wrap text-base gap-10">
        <CustomInputUser value={user?.email}>Email nhận vé</CustomInputUser>
        <CustomInputUser value={user?.xx}>CMND / CCCD / GPLX</CustomInputUser>
      </div>

      <div className="mt-10 w-full flex justify-start">
        <div
          onClick={handleSave}
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

export default UserInfoTab;
