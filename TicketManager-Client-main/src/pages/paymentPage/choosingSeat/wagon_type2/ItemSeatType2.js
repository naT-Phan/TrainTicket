import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seatSelector } from "../../../../redux/seatBookingSelector";
import { addSeat } from "../../../../slices/seatBookingSlice";

const ItemSeatType2 = ({ ind }) => {
  const [className, setClassName] = useState();
  const [classNamesub, setClassNamesub] = useState();

  const dispatch = useDispatch();
  const handleAddSeat = () => {
    dispatch(addSeat(ind));
  };
  const { wagon, currentWagon, wagonBooked } = useSelector(seatSelector);

  useEffect(() => {
    setClassNamesub("bg-gray-200");
    setClassName("bg-white border-2 hover:bg-gray-100");
  }, []);
  useEffect(() => {
    if (wagon[currentWagon].seat.includes(ind)) {
      setClassName(
        "bg-white border-2 border-primary bg-blue-50 bg-opacity-60 hover:bg-gray-100"
      );
      setClassNamesub("bg-primary bg-opacity-20");
    } else {
      setClassNamesub("bg-gray-200 ");
      setClassName("bg-white border-2 hover:bg-gray-100");
    }
    if (wagonBooked[currentWagon].includes(ind)) {
      setClassName("bg-gray-200 border-2 hover:bg-gray-200 cursor-default");
      setClassNamesub("bg-gray-200");
    }
  }, [wagon[currentWagon]]);
  return (
    <div
      onClick={handleAddSeat}
      className={`w-10 h-16 cursor-pointer relative  rounded-md grid place-content-center ${className}`}
    >
      <div
        className={`top-1 w-6 h-3 absolute left-1/2 -translate-x-1/2 rounded-sm bg-gray-200 ${classNamesub}`}
      ></div>
      {ind}
    </div>
  );
};
export default ItemSeatType2;
