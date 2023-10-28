import ItemSeat from "./ItemSeat";
import React from "react";

const ItemSeatEven = ({ index }) => {
  return (
    <>
      {/* large screen */}
      <div className="flex flex-col gap-3 lg:hidden">
        <ItemSeat value={index + 4} />
        <ItemSeat value={index + 3} />
      </div>
      <div className="flex flex-col gap-3 lg:hidden">
        <ItemSeat value={index + 2} />
        <ItemSeat value={index + 1} />
      </div>
      {/* small screen */}
      <div className=" flex-col gap-3 lg:flex hidden">
        <ItemSeat value={index + 1} />
        <ItemSeat value={index + 2} />
      </div>
      <div className=" flex-col gap-3 lg:flex hidden">
        <ItemSeat value={index + 3} />
        <ItemSeat value={index + 4} />
      </div>
    </>
  );
};

export default ItemSeatEven;
