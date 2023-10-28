import React from "react";
import { useSelector } from "react-redux";
import ScrollContainer from "react-indiana-drag-scroll";
import { seatSelector } from "../../../redux/seatBookingSelector";

import ItemWagon from "./ItemWagon";
import SeatPlace from "./wagon_type1/SeatPlace";
import SeatPlaceType2 from "./wagon_type2/SeatPlaceType2";
import SeatPlaceType3 from "./wagon_type3/SeatPlaceType3";
const SelectSeat = () => {
  const { wagon, currentWagon } = useSelector(seatSelector);

  return (
    <div className="">
      <div className="flex items-center gap-4 ">
        <ScrollContainer className="scroll-container flex items-center gap-4">
          <div className="!w-14 mr-2 h-14 rounded-tl-full border-8 border-gray-300 border-r-transparent border-b-transparent bg-gray-100">
            <div className="w-14"></div>
          </div>
          {/* {new Array(9).fill(0).map((item, ind) => {
            return <ItemWagon ind={ind} active={ind === currentWagon} />;
          })} */}

          {wagon &&
            wagon.map((item, ind) => {
              return (
                <ItemWagon
                  data={item}
                  ind={ind}
                  active={ind === currentWagon}
                />
              );
            })}
        </ScrollContainer>
      </div>

      <div className="mt-4 w-full min-h-[350px] mb-6 overflow-hidden rounded-md border-4 border-gray-100">
        <div className="h-10 grid content-center bg-gray-100 text-center shrink-0">
          Toa {currentWagon + 1}: Ngồi mềm điều hòa
        </div>
        <div className="mt-6 w-full flex sm:flex-col items-center gap-6 justify-center">
          <div className="item flex sm:w-[160px] items-center gap-2">
            <div className="w-6 h-6 rounded-md border-2"></div>
            Ghe Trong
          </div>

          <div className="item flex sm:w-[160px] items-center gap-2">
            <div className="w-6 h-6 rounded-md border-2 bg-blue-50 border-blue-400"></div>
            Ghe Dang Chon
          </div>

          <div className="item flex sm:w-[160px] items-center gap-2">
            <div className="w-6 h-6 rounded-md border-2 bg-gray-200"></div>
            Ghe Da Chon
          </div>
        </div>

        <ChoosingWagonRender type={wagon[currentWagon]?.type} />
      </div>
    </div>
  );
};

const ChoosingWagonRender = ({ type }) => {
  switch (type) {
    case "nmdh":
      return <SeatPlace />;
    case "nk4dh":
      return <SeatPlaceType3 />;
    case "nk6dh":
      return <SeatPlaceType2 />;
    case "ncdh":
      return <SeatPlace />;
    default:
      break;
  }
};

export default SelectSeat;
