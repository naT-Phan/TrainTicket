import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTicketWithIndex } from "../../../redux/filterTicketSelector";
import { seatSelector } from "../../../redux/seatBookingSelector";
import { filterSelector } from "../../../redux/tripSelector";
import {
  goPayment,
  resetContinueState,
  setMissingContinue,
} from "../../../slices/seatBookingSlice";
import { calculateDiscount, handleMoney } from "../../../utils/handleValue";
import ItemSeatDetail from "./ItemSeatDetail";

const TickeChoosing = ({ type, handleContinue, enableContinue }) => {
  const { wagon, wagonData, currentWagon, wagonBooking } =
    useSelector(seatSelector);

  const {
    start: startLocation,
    end: endLocation,
    date,
  } = useSelector(filterSelector);

  const checkTotalTicket = () => {
    let totalTicket = 0;

    for (let i = 0; i < wagon.length; i++) {
      totalTicket += wagon[i].seat.length;
    }
    return totalTicket;
  };
  const dispatch = useDispatch();
  const handleContinueFix = () => {
    if (type === "edit") {
      if (enableContinue) handleContinue(1);
    } else {
      let currentContinueStatus = "";

      const userWagon = wagonBooking.user;
      if (
        !userWagon.name ||
        !userWagon.email ||
        !userWagon.sdt ||
        !userWagon.identify
      ) {
        currentContinueStatus = "missingValue";
      }
      for (let i of wagonBooking.listUserTicket) {
        if (!i.name || !i.identifyOrAge) {
          currentContinueStatus = "missingValue";
        }
      }

      // dispatch(goPayment());
      if (currentContinueStatus === "missingValue") {
        dispatch(setMissingContinue());
        return;
      }
      if (enableContinue) {
        handleContinue(2);
        dispatch(resetContinueState());
      }
    }
  };

  const { start, end } = useSelector(filterTicketWithIndex);
  let totalMoney = 0;

  useEffect(() => {}, []);
  return (
    <div className="p-2 duration-75 transition-all ">
      <div className="w-full py-4 px-2">
        <div className="flex items-center gap-4 ">
          <div className="border rounded-md w-12 h-12 overflow-hidden grid place-content-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/%C4%90svn.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[2px]">
            <div className="px-2  w-fit text-center grid place-content-center text-[10px] rounded-lg bg-gray-100">
              Chiều đi
            </div>
            <div className="font-bold">
              <span>Ga {startLocation}</span>
              <span> - </span>
              <span>Ga {endLocation}</span>
            </div>
            <div className="opacity-80 text-[12px]">
              Tàu {wagonData[0]?.currentVehical} - T
              {new Date(date).getDay() + 1}, Ngày{" "}
              {new Date(date).toLocaleDateString("vi-VN")}
            </div>
          </div>
        </div>
        <div className="mt-10">
          {/* {wagon.map((item, index) => {
            return (
              wagon[index].seat &&
              wagon[index].seat.map((item, ind) => (
                <ItemSeatDetail
                  type={type}
                  data={{ seat: item, wagon: index }}
                  key={ind}
                />
              ))
            );
          })} */}
          {wagonBooking.listUserTicket.map((item, ind) => {
            if (ind === 0) totalMoney = 0;
            let itemMoney =
              item.price *
              Math.abs(start - end) *
              (1 - calculateDiscount(item.typeTicket));
            totalMoney += itemMoney;
            return (
              <ItemSeatDetail
                type={type}
                money={itemMoney}
                // data={{ seat: item.numOfSeat, wagon: index }}
                data={item}
                wagon={item.numOfWagon}
                key={ind}
              />
            );
          })}
        </div>
        <div className=" w-full ml-auto mt-10 flex flex-col items-start gap-2  px-4 py-3 shadow-md rounded-lg">
          <span className="font-bold text-base opacity-90 mb-2">
            Tổng cộng:
          </span>
          <div className="flex gap-2 items-center">
            <span className="opacity-80">Số vé:</span>
            <span className="font-bold"> {checkTotalTicket()} vé</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="opacity-80"> Số tiền:</span>
            <span className="font-bold">{handleMoney(totalMoney)}</span>
          </div>
          <div
            className={`btn w-full lg:py-3 lg:my-4 px-4 py-2 rounded-lg duration-100 transition-all bg-primary mt-2 cursor-pointer hover:bg-opacity-80 text-center text-white ${
              checkTotalTicket() === 0
                ? "!opacity-20 hover:bg-opacity-100 bg-gray-500"
                : ""
            }`}
            onClick={handleContinueFix}
          >
            Tiếp tục
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickeChoosing;
