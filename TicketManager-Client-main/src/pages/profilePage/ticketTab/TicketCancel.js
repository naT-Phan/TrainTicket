import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { ticketSelector } from "../../../redux/userTicketSelector";
import ItemTicket from "./ItemTicket";
import NoneTicket from "./NoneTicket";
const ticketImg = require("../../../asset/img/ticketvector.png");

const TicketCancel = () => {
  const { ticketAvailables, ticketCancels, ticketUseds, isLoading } =
    useSelector(ticketSelector);

  return (
    <Fragment>
      {ticketCancels?.length > 0 &&
        ticketCancels.map((item, ind) => {
          return <ItemTicket type="cancel" ind={ind} data={item} key={ind} />;
        })}

      {ticketCancels?.length <= 0 && <NoneTicket>Không có vé huỷ</NoneTicket>}
    </Fragment>
  );
};

export default TicketCancel;
