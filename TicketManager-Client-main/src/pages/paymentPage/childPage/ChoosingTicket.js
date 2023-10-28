import React, { useEffect, useState } from "react";
import ChoosingSeatGeneral from "../choosingSeat/ChoosingSeatGeneral";
import { Steps } from "antd";
import SelectSeat from "../choosingSeat/SelectSeat";
import CreditCard from "../paymentMethod/CreditCard";
import { useDispatch, useSelector } from "react-redux";
import { seatSelector } from "../../../redux/seatBookingSelector";
import { setInitWagon } from "../../../slices/seatBookingSlice";

const ChoosingTicket = ({ isDark, process, SetProcess }) => {
  const { Step } = Steps;

  const [isOpenTab, setIsOpenTab] = useState(true);
  const handleToggleOpenTab = () => {
    setIsOpenTab((prev) => !prev);
  };

  const [timeRemain, setTimeRemain] = useState(180);
  useEffect(() => {
    setTimeout(() => {
      setTimeRemain(timeRemain - 1);
    }, 1000);
  });

  const { wagon, currentWagon, wagonBooking } = useSelector(seatSelector);

  const checkTotalTicket = () => {
    let totalTicket = 0;

    for (let i = 0; i < wagon.length; i++) {
      totalTicket += wagon[i].seat.length;
    }
    return totalTicket;
  };

  const ChangeProcess = (value) => {
    if (checkTotalTicket() >= 1) SetProcess(value);
  };
  useEffect(() => {
    if (checkTotalTicket() >= 1) {
      setEnableContinue(true);
    } else setEnableContinue(false);
  });
  const [enableContinue, setEnableContinue] = useState(false);

  return (
    <>
      <div className="flex relative gap-4 mt-4 mx-8 ssm:mx-2 px-0 xl:flex-col">
        {/* left pannel general info */}
        <div className="flex flex-col min-w-[900px] lg:min-w-[300px]">
          <div className={`${!isOpenTab ? "mr-[150px]" : ""}`}>
            {/* <div className=" min-h-[60px] flex items-center   dark:!bg-dark_primary_pnl rounded-lg bg-white shadow-sm ">
              <div className="flex justify-between h-full w-full items-center px-8 ">
                <span className="text-lg opacity-80 font-bold dark:text-white">
                  Payment Options
                </span>
                <div className="flex gap-1 dark:text-white">
                  <span className="opacity-50">
                    The session will exprire in:
                  </span>
                  <span className="text-blue-500 dark:!text-white ">{`${timeRemain}s`}</span>
                </div>
              </div>
            </div> */}
            <div
              className={`payment-process lg:hidden dark:!text-white min-h-[60px] rounded-lg bg-white dark:!bg-dark_primary_pnl mt-0 shadow-sm grid ${
                isDark ? "dark" : ""
              }`}
            >
              <div className="flex justify-between h-full items-center  px-8">
                <Steps
                  size="small"
                  className="dark:!text-white"
                  current={process}
                  onChange={ChangeProcess}
                >
                  <Step className="dark:text-white" title="Select Set" />
                  <Step title="Information" />
                  <Step title="Payment" />
                </Steps>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white min-h-[400px] dark:!bg-dark_primary_pnl mt-4 px-10 sm:px-2 pt-5">
            <SelectSeat setEnableContinue={setEnableContinue} />
          </div>
        </div>

        {/* right pannel general info */}
        <ChoosingSeatGeneral
          isOpenTab={isOpenTab}
          setIsOpenTab={setIsOpenTab}
          handleToggleOpenTab={handleToggleOpenTab}
          handleContinue={ChangeProcess}
          enableContinue={enableContinue}
        />
      </div>
    </>
  );
};

export default ChoosingTicket;
