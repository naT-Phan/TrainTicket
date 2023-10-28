import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../redux/authSelector";
import { convertNameWagon } from "../../utils/constValue";
import LogOutTab from "./LogOutTab";
import PasswordTab from "./PasswordTab";
import MyTicketTab from "./ticketTab/MyTicketTab";
import UserInfoTab from "./UserInfoTab";
import UserProfile from "./UserInfoTab";
const developImg = require("../../asset/img/developing.jpeg");

const ProfilePage = ({ index: tabIndex }) => {
  const [tab, setTab] = useState(0);

  const { user } = useSelector(userSelector);
  const listTabJson = [
    {
      title: "Thông tin tài khoản",
      icon: "fa-solid fa-user-astronaut",
      link: "/profile/user",
    },
    {
      title: "Vé của tôi",
      icon: "fa-solid fa-ticket",
      link: "/profile/myticket",
    },
    {
      title: "Vé đã lưu",
      icon: "fa-solid fa-bookmark",
      link: "/profile/saveticket",
    },
    {
      title: "Mã giảm giá",
      icon: "fa-solid fa-file-lines",
      link: "/profile/voucher",
    },
    {
      title: "Nhận xét của tôi",
      icon: "fa-solid fa-comment",
      link: "/profile/mycomment",
    },
    {
      title: "Đổi mật khẩu",
      icon: "fa-solid fa-lock",
      link: "/profile/password",
    },
    {
      title: "Đăng xuất",
      icon: "fa-solid fa-arrow-right-from-bracket",
      link: "/profile/logout",
    },
  ];
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  const handleChangeTab = (link, ind) => {
    handleNavigate(link);
    setTab(ind);
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  if (!user) {
    return <div></div>;
  } else
    return (
      <div className="w-full sm:w-fit">
        <div className="page-container sm:w-fit mt-6 flex items-stretch min-h-[600px] gap-2">
          <div className="p-4 pr-0 h-[500px] rounded-lg bg-white sm:hidden border-gray-200">
            <div className="flex text-base flex-col gap-4 items-center sm:hidden">
              {listTabJson.map((item, index) => {
                return (
                  <ItemTab
                    key={index}
                    setTab={() => setTab(index)}
                    onClick={() => handleChangeTab(item.link, index)}
                    icon={item.icon}
                    active={tabIndex === index}
                  >
                    {item.title}
                  </ItemTab>
                );
              })}
            </div>
          </div>

          <div className="flex-1 px-20 sm:px-4 sm:mx-4 sm:mb-8 sm:pb-8 bg-white min-h-[400px] rounded-md">
            <RenderTabItem tab={tabIndex} />
          </div>
        </div>
      </div>
    );
};
const RenderTabItem = ({ tab }) => {
  if (tab === 0) {
    return <UserInfoTab />;
  }
  if (tab === 1) {
    return <MyTicketTab />;
  }
  if (tab === 5) {
    return <PasswordTab />;
  }
  if (tab === 6) {
    return <LogOutTab />;
  } else {
    return <DevelopingItem />;
  }
};
const DevelopingItem = () => {
  return (
    <div className="w-full min-h-[300px] flex flex-col  mt-20 items-center ">
      <div className="w-[140px] h-fit ">
        <img className="opacity-50" src={developImg} alt="" />
      </div>
      <div className=" font-bold opacity-90 mt-4 text-lg">
        Tính năng này đang được phát triển
      </div>
      <div className="mt-4 text-md w-[420px] opacity-60 text-center">
        Cảm ơn sự tin tưởng của quý khách hàng vào trang web 5Ting ticket của
        chúng tôi
      </div>
    </div>
  );
};

const ItemTab = ({ icon, children, active, setTab, onClick }) => {
  let className = "";
  if (active) {
    className =
      "hover:bg-opacity-80 hover:bg-secondary bg-secondary text-white ";
  }

  return (
    <div
      onClick={onClick}
      className={`item px-10 py-3 flex items-center gap-4 cursor-pointer hover:bg-gray-200  w-[260px] text-center my-0  rounded-md rounded-r-none ${className} `}
    >
      <i className={icon}></i> {children}
    </div>
  );
};

export default ProfilePage;
