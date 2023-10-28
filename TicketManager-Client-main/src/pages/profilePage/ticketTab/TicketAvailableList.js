import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ticketSelector } from "../../../redux/userTicketSelector";
import ItemTicket from "./ItemTicket";

const ticketImg = require("../../../asset/img/ticketvector.png");
const TicketAvailableList = () => {
  const { ticketAvailables, ticketCancels, ticketUseds, isLoading } =
    useSelector(ticketSelector);

  return (
    <Fragment>
      {isLoading && (
        <div className="w-full  h-[200px] flex items-center justify-center  text-center ">
          <div className="w-8 h-8 rounded-full border-4 border-primary border-r-transparent animate-spin"></div>
        </div>
      )}

      {!isLoading &&
        ticketAvailables?.length > 0 &&
        [...ticketAvailables].reverse().map((item, ind) => {
          return <ItemTicket ind={ind} data={item} key={ind} />;
        })}

      {!isLoading && ticketAvailables?.length <= 0 && <NoneTicketAvailable />}
    </Fragment>
  );
};

const NoneTicketAvailable = () => {
  return (
    <div className="w-full min-h-[300px] flex flex-col  mt-4 items-center ">
      <div className="w-[140px] h-fit ">
        <img className="opacity-50" src={ticketImg} alt="" />
      </div>
      <div className=" font-bold opacity-90 mt-2 text-lg">
        Hiện tại bạn chưa có vé nào cả
      </div>
      <div className="mt-4 text-md w-[420px] sm:w-[300px] sm:text-base opacity-60 text-center">
        Nếu có ý định di chuyển bằng tàu lửa, hãy mau chóng đặt vé trên 5Ting
        ticket, vừa đơn giản vừa tiết kiệm
      </div>
    </div>
  );
};

export default TicketAvailableList;
