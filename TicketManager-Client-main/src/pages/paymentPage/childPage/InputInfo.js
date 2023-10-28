import React, { useEffect, useState } from "react";
import ChoosingSeatGeneral from "../choosingSeat/ChoosingSeatGeneral";
import { Steps } from "antd";
import SelectSeat from "../choosingSeat/SelectSeat";
import CreditCard from "../paymentMethod/CreditCard";
import InputInfoComponent from "../InputInfoComponent";
import { useDispatch } from "react-redux";
import { resetContinueState } from "../../../slices/seatBookingSlice";

const InputInfo = ({ isDark, process, SetProcess }) => {
  const { Step } = Steps;

  const [timeRemain, setTimeRemain] = useState(180);
  useEffect(() => {
    setTimeout(() => {
      setTimeRemain(timeRemain - 1);
    }, 1000);
  });

  const dispatch = useDispatch();
  const ChangeProcess = (value) => {
    if (value === 2) {
      if (enableContinue) {
        SetProcess(value);
        return;
      } else return;
    }
    if (value === 0) {
      dispatch(resetContinueState());
    }
    SetProcess(value);
  };

  const [enableContinue, setEnableContinue] = useState(false);

  return (
    <>
      <div className="flex relative gap-4 mt-4 mx-8 lg:mx-4 px-0 xl:flex-col">
        {/* left pannel general info */}
        <div className="flex flex-col min-w-[900px] lg:min-w-[300px]">
          <div className={`${!true ? "mr-[150px]" : ""}`}>
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
              className={`payment-process lg:hidden  dark:!text-white min-h-[60px] rounded-lg bg-white dark:!bg-dark_primary_pnl mt-0 shadow-sm grid ${
                isDark ? "dark" : ""
              }`}
            >
              <div className="flex justify-between h-full items-center  px-8 ">
                <Steps
                  size="small"
                  className="dark:!text-white"
                  current={1}
                  onChange={ChangeProcess}
                >
                  <Step className="dark:text-white" title="Select Set" />
                  <Step title="Information" />
                  <Step title="Payment" />
                </Steps>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white min-h-[400px] dark:!bg-dark_primary_pnl mt-4 px-10 pt-5">
            <InputInfoComponent setEnableContinue={setEnableContinue} />
          </div>
        </div>

        {/* right pannel general info */}
        <ChoosingSeatGeneral
          handleContinue={ChangeProcess}
          isOpenTab={true}
          type="nonedit"
          enableContinue={enableContinue}
        />
        {/* <div className="w-[500px]"></div> */}
      </div>
    </>
  );
};

export default InputInfo;
