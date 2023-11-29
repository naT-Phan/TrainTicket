import React from "react";
const trainImg = require("../../asset/img/train3.jpeg");

const GetInTouchPage = () => {
  return (
    <div>
      <div className="w-full h-screen relative">
        <img src={trainImg} className="w-full h-screen object-cover" alt="" />
        <div className="absolute shadow-lg top-10 right-20 sm:right-2 sm:px-2 sm:w-fit w-[500px] min-h-[300px] rounded-lg bg-white  p-10 flex flex-col gap-4">
          <div className="-mt-8 text-center font-bold opacity-80 w-full py-0 text-lg">
            Liên hệ với chúng tôi thông qua
          </div>
          <div className="mt-2 text-base">Tổng đài </div>
          <div className="flex flex-col gap-4">
            <div className=""> Khu vực miền Bắc: 1900 0109</div>
            <div className=""> Khu vực miền Nam: 1900 1520</div>
          </div>
          <div className="mt-2 text-base">Email </div>
          <div className="flex flex-col gap-4">
            <div className=""> support1@dsvn.vn</div>
            <div className="">support2@dsvn.vn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchPage;
