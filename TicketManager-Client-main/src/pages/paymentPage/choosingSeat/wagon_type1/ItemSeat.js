import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seatSelector } from "../../../../redux/seatBookingSelector";
import { addSeat, checkSeat } from "../../../../slices/seatBookingSlice";

const ItemSeat = ({ value, status = "" }) => {
  const [className, setClassName] = useState();
  const [classNamesub, setClassNamesub] = useState();
  // if (status === "choosen") {
  //   classNamesub = "bg-gray-200";
  //   className = "bg-gray-200 border-2";
  // }
  // if (status === "active") {
  //   classNamesub = "bg-primary bg-opacity-20 border-primary";
  //   className = "bg-primary bg-opacity-20 border-primary border-2";
  // }

  const dispatch = useDispatch();
  const handleAddSeat = (ind) => {
    dispatch(addSeat(ind));
  };
  const [active, setActive] = useState(false);

  const { wagon, currentWagon, wagonBooked } = useSelector(seatSelector);
  // const checkActiveSeat = () => {
  //   for (let item of wagonData) {
  //     if (item.numOfWagon === currentWagon) {
  //       console.log(
  //         "itemitemitemitemitem",
  //         item.numOfWagon,
  //         currentWagon,
  //         item.filteredSeats
  //       );

  //       for (let seat of item.filteredSeats) {
  //         console.log(seat, value);
  //         if (seat.numOfSeat === value) {
  //           console.log("lovevevee");
  //           setClassName("bg-gray-200 border-2");
  //           setClassNamesub("bg-gray-200");
  //           setActive(true);
  //         }
  //       }
  //     }
  //   }
  // };

  useEffect(() => {
    setClassName("bg-white border-2 ");
    setClassNamesub("bg-white");
    // if (handleCheckChoosing(value)) {
    //   setClassName("bg-gray-200 border-2");
    //   setClassNamesub("bg-gray-200");
    // }
    // checkActiveSeat();
  }, []);

  const handleCheckSeat = () => {
    if (wagon[currentWagon].seat.includes(value)) {
      setClassNamesub("bg-primary bg-opacity-20 border-primary");
      setClassName(
        "bg-primary bg-opacity-20 border-primary border-2 hover:bg-white"
      );
    } else {
      setClassName("bg-white  border-2 ");
      setClassNamesub("bg-white");
    }
    if (wagonBooked[currentWagon].includes(value)) {
      setClassName("bg-gray-200 border-2 hover:bg-gray-200 cursor-default");
      setClassNamesub("bg-gray-200");
    }
  };
  useEffect(() => {
    handleCheckSeat();
  }, [wagon[currentWagon].seat]);
  return (
    <div
      className="flex flex-col items-start gap-[3px] "
      onClick={() => handleAddSeat(value)}
    >
      <div className={`w-6 h-2 rounded-md   border ${classNamesub}`}></div>
      <div
        className={`w-10 h-10 rounded-md text-center flex items-center justify-center cursor-pointer hover:bg-gray-300 ${className}`}
      >
        {value}
      </div>
      <div className={`w-6 h-2 rounded-md border ${classNamesub}`}></div>
    </div>
  );
};

export default ItemSeat;
