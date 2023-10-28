import React, { useEffect, useState } from "react";
import ChoosingSeatGeneral from "../choosingSeat/ChoosingSeatGeneral";
import { Steps } from "antd";
import SelectSeat from "../choosingSeat/SelectSeat";
import CreditCard from "../paymentMethod/CreditCard";
import SumaryResultTicket from "../paymentMethod/SumaryResultTicket";

const Payment = ({ isDark, process, SetProcess }) => {
  const { Step } = Steps;

  const [timeRemain, setTimeRemain] = useState(180);
  useEffect(() => {
    setTimeout(() => {
      setTimeRemain(timeRemain - 1);
    }, 1000);
  });
  const ChangeProcess = (value) => {
    SetProcess(value);
  };

  return (
    <>
      <div className="flex relative gap-4 mt-4 mx-8 sm:mx-3 px-0 lg:flex-col">
        {/* left pannel general info */}
        <div className="flex flex-col min-w-[900px] xl:min-w-[300px]">
          <div className="">
            <div
              className={`payment-process xl:hidden dark:!text-white min-h-[60px] rounded-lg bg-white dark:!bg-dark_primary_pnl mt-0 shadow-sm grid ${
                isDark ? "dark" : ""
              }`}
            >
              <div className="flex justify-between h-full items-center  px-8">
                <Steps
                  size="small"
                  className="dark:!text-white"
                  current={2}
                  onChange={ChangeProcess}
                >
                  <Step className="dark:text-white" title="Select Set" />
                  <Step title="Information" />
                  <Step title="Payment" />
                </Steps>
              </div>
            </div>

            <div className=" min-h-[60px] mt-2 flex items-center   dark:!bg-dark_primary_pnl rounded-lg bg-white shadow-sm ">
              <div className="flex justify-between h-full w-full items-center px-8 ">
                <span className="text-lg opacity-80 font-bold dark:text-white">
                  Thanh Toán
                </span>
                <div className="flex gap-1 dark:text-white sm:hidden">
                  <span className="opacity-50">
                    Phiên giao dịch sẽ bị huỷ sau:
                  </span>
                  <span className="text-blue-500 dark:!text-white ">{`${timeRemain}s`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white min-h-[400px] dark:!bg-dark_primary_pnl mt-4 px-10 pt-5">
            <CreditCard />
          </div>
        </div>

        {/* right pannel general info */}
        <SumaryResultTicket />
      </div>
    </>
  );
};

export default Payment;
