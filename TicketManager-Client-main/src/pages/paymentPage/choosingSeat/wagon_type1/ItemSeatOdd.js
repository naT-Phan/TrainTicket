import React from "react";
import ItemSeat from "./ItemSeat";
const ItemSeatOdd = ({ index }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <ItemSeat value={index + 1} />
        <ItemSeat value={index + 2} />
      </div>
      <div className="flex flex-col gap-3">
        <ItemSeat value={index + 3} />
        <ItemSeat value={index + 4} />
      </div>
    </>
  );
};
export default ItemSeatOdd;
