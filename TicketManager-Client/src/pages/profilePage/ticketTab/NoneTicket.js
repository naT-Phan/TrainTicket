import React, { Fragment } from "react";
const ticketImg = require("../../../asset/img/ticketvector.png");

const NoneTicket = ({ children }) => {
  return (
    <Fragment>
      <div className="w-full min-h-[300px] flex flex-col  mt-4 items-center ">
        <div className="w-[140px] h-fit ">
          <img className="opacity-10" src={ticketImg} alt="" />
        </div>
        <div className=" font-bold opacity-30 mt-2 text-lg">{children}</div>
      </div>
    </Fragment>
  );
};
export default NoneTicket;
