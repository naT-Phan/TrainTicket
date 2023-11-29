import React from "react";
import { useSelector } from "react-redux";
import { filterSelector } from "../../../redux/tripSelector";
import {
  handleTimeTicket,
  handleTimeTicketMinutes,
} from "../../../utils/handleValue";

const Details = ({ data }) => {
  const { date } = useSelector(filterSelector);
  console.log("🚀 ~ file: Details.js ~ line 11 ~ Details ~ date", date);
  return (
    <div className="px-8 py-6  custom-anim-left">
      <div className="flex gap gap-8">
        <div className="tab py-4 px-6 rounded-md bg-gray-50  flex flex-col gap-2">
          <p className="font-bold text-base mb-2 text-primary opacity-80">
            <i class="fa-solid fa-ticket text-sm mr-2 text-primary opacity-80"></i>
            Thông tin vé xe :
          </p>
          <div className="flex items-center gap-2">
            <span className="opacity-60">Ngày khởi hành: </span>
            <span className="">
              {date && new Date(date).toLocaleDateString("vi-VN")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-60">Khởi hành: </span>
            <span className="">{handleTimeTicket(data.s)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-60">Thời gian dự kiến: </span>
            <span className="">
              {" "}
              {handleTimeTicketMinutes(Math.abs(data.e - data.s))} giờ
            </span>
          </div>
        </div>
        <div className="tab py-4 px-6 rounded-md bg-gray-50 bg-opacity-60  flex flex-col gap-2">
          <p className="font-bold text-base mb-2 text-primary opacity-80 ">
            <i class="fa-solid fa-suitcase-rolling text-sm text-primary opacity-80 font-sm mr-2"></i>
            Hành lý :
          </p>
          <div className="flex items-center gap-2">
            <span className="opacity-60">Xách tay: </span>
            <span className="">10kg</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="opacity-60">Ký gửi </span>
            <span className="">24kg</span>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full  ">
        <div className="w-full flex items-center ">
          <div className="min-w-[70px] flex-1 font-bold opacity-80">
            Tiện ích
          </div>
          <div className="w-full h-[2px] rounded-lg bg-gray-200 bg-opacity-50"></div>
        </div>
        <div className="mt-4 flex items-center gap-10 !text-sm">
          <div className="flex items-center gap-2">
            <i class="fas fa-thermometer-empty"></i>
            <span> Điều hòa</span>
          </div>
          <div className="flex items-center gap-2">
            <i class="fas fa-battery-three-quarters"></i>
            <span>Sạc điện thoại</span>
          </div>
          <div className="flex items-center gap-2">
            <i class="fas fa-wifi"></i>
            <span>Wifi</span>
          </div>

          <div className="flex items-center gap-2">
            <i class="fas fa-tv"></i>
            <span>Tivi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
