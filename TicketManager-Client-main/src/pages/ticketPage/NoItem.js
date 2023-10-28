import React from "react";
const notfound = require("../../asset/img/notfound.png");

const NoItem = () => {
  return (
    <div className="w-full min-h-[370px] mt-0 round-lg py-10 px-4 gap-4 flex items-center flex-col bg-white">
      <div className="w-[200px] h-fit">
        <img src={notfound} className="w-full h-full object-cover" alt="" />
      </div>
      <h3 className="text-2xl w-fit">Hiện tại không có vé nào</h3>
      <p className="opacity-60 text-base w-[400px] text-center">
        Chúng tôi không có vé như yêu cầu của bạn, <br />
        hãy thay đổi bộ lọc
      </p>
    </div>
  );
};

export default NoItem;
