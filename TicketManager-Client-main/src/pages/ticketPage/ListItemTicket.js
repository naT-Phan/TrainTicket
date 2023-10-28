import React, { useState } from "react";
import { useSelector } from "react-redux";
import { tripFilterSelector, tripSelector } from "../../redux/tripSelector";
import NoItem from "./NoItem";
import TicketItem from "./TicketItem";

const ListItemTicket = () => {
  const trip = useSelector(tripSelector);

  const [type, setType] = useState(1);
  console.log(trip);
  return (
    <div className="bg-transparent dark:!text-white dark:!bg-dark_primary_bg w-full h-full min-h-[800px] flex flex-col gap-4 ">
      <div className=" min-h-[60px] rounded-lg bg-white dark:!bg-dark_primary_pnl  flex justify-between items-center pl-6 mb-1">
        <div className="flex gap-2 items-center ">
          <div className="name text-lg font-bold pr-2 border-r-2 border-r-gray-100 sm:hidden">
            Tàu hoả
          </div>
          <div className="ssm:hidden">Total: </div>
          <div className="span text-primary">{trip.trip?.length} kết quả</div>
        </div>
        <div className="flex items-center gap-1 cursor-pointer mr-4">
          <div
            onClick={() => setType(1)}
            className={`px-4  !cursor-pointer hover:bg-gray-400 hover:text-white py-1 text-sm rounded-2xl ${
              type === 1 && "bg-gray-700 text-white"
            }`}
          >
            Theo giờ
          </div>
          <div
            onClick={() => setType(2)}
            className={`px-4  !cursor-pointer hover:bg-gray-400 hover:text-white py-1 text-sm rounded-2xl ${
              type === 2 && "bg-gray-700 text-white"
            }`}
          >
            Giá rẻ
          </div>
          <div className="px-4 hidden cursor-pointer hover:bg-gray-400 hover:text-white py-1 text-sm rounded-2xl bg-gray-50 dark:!bg-dark_primary_pnl ">
            Top rating
          </div>
        </div>
      </div>
      {trip.status === "loading" && <Loading />}
      {(!trip || trip.length <= 0) && <NoItem />}
      {trip.trip &&
        trip.status === "idle" &&
        (type === 2
          ? [...trip.trip]
              .sort((a, b) => a.fixed_price - b.fixed_price)
              .map((item, ind) => <TicketItem data={item} key={ind} />)
          : trip.trip.map((item, ind) => <TicketItem data={item} key={ind} />))}
    </div>
  );
};

const Loading = () => {
  return (
    <div className="flex  items-center min-h-[300px] justify-center ">
      <div className="w-16 rounded-full h-16 border-4 border-primary border-r-transparent animate-spin"></div>
    </div>
  );
};

export default ListItemTicket;
