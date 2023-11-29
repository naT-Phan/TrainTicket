import { useRef, useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { updateMethodPayment } from "../../../slices/seatBookingSlice";

const CreditCard = () => {
  const [method, setMethod] = useState();

  const dispatch = useDispatch();
  const handleChangeMethod = (e) => {
    setMethod(e.target.value);

    dispatch(
      updateMethodPayment({
        payment: e.target.value === "0" ? "cash" : "creditcard",
        isPay: e.target.value === "0" ? "false" : "true",
      })
    );
  };
  return (
    <div className="creadit-card ">
      <div className="w-full text-center py-4 text-lg">
        Chọn phương thức thanh toán bên dưới
      </div>
      <div className="flex gap-10 justify-between flex-col">
        <div
          className={`w-fit ${method === "0" ? "opacity-100" : "opacity-100"}`}
        >
          <h3 className="mb-3 dark:text-white text-lg">Tiền Mặt </h3>
          <div className="text-sm mb-4 opacity-80 ">
            (Trả trực tiếp tại quầy hoặc đại lý)
          </div>

          <label className="method-cash">
            <input
              type="radio"
              name="credit-method"
              value="0"
              onClick={handleChangeMethod}
              className="hidden"
            />
            <span className="method-cash relative px-4 border-2 border-gray-100 min-w-[140px] h-[56px] rounded-md shadow-md flex items-center justify-center text-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute bg-white  rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                viewBox="0 0 20 20"
                fill="#00CC17"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Thanh Toán Trả Sau
            </span>
          </label>
        </div>
        <div className={`${method !== 0 ? "opacity-100" : "opacity-10"}`}>
          <h3 className="mb-3 dark:text-white ">Credit Cards</h3>
          {/* <div className="text-sm mb-4 opacity-80 ">
            (Chọn một trong các hình thức bên dưới)
          </div> */}
          {/* method paying */}
          <div className="flex sm:flex-col sm:gap-8 gap-4 sm:mb-8">
            <div className="item cursor-pointer bg-white dark:!bg-dark_secondary_pnl  border-2 border-gray-100 sm:w-[280px] rounded-lg min-w-[140px] min-h-[50px]">
              <label className="method-item w-full h-full cursor-pointer ">
                <input
                  type="radio"
                  className=""
                  value="1"
                  onClick={handleChangeMethod}
                  name="credit-method"
                />
                <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute bg-white  rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                    viewBox="0 0 20 20"
                    fill="#00CC17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="w-12 h-12">
                    {" "}
                    <img
                      className="w-full h-full object-contain"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png"
                      alt=""
                    />
                  </div>
                </div>
              </label>
            </div>

            <div className="item bg-white dark:!bg-dark_secondary_pnl border-2 border-gray-100 sm:w-[280px] rounded-lg min-w-[130px] min-h-[54px]">
              <label className="method-item w-full h-full cursor-pointer ">
                <input
                  type="radio"
                  className=""
                  value="2"
                  onClick={handleChangeMethod}
                  name="credit-method"
                />
                <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute bg-white rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                    viewBox="0 0 20 20"
                    fill="#00CC17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="w-12 h-12">
                    {" "}
                    <img
                      className="w-full h-full object-contain"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
                      alt=""
                    />
                  </div>
                </div>
              </label>
            </div>

            <div className="item  bg-white border-2 border-gray-100 sm:w-[280px]  dark:!bg-dark_secondary_pnl rounded-lg min-w-[130px] min-h-[54px]">
              <label className="method-item w-full h-full  cursor-pointer">
                <input
                  type="radio"
                  className=""
                  value="3"
                  onClick={handleChangeMethod}
                  name="credit-method"
                />
                <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute bg-white rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                    viewBox="0 0 20 20"
                    fill="#00CC17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="w-10 h-10">
                    {" "}
                    <img
                      className="w-full h-full object-contain"
                      src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1458245625/pwegh6kadcb37kuz0woj.png"
                      alt=""
                    />
                  </div>
                </div>
              </label>
            </div>

            <div className="item bg-white border-2 border-gray-100 sm:w-[280px]   dark:!bg-dark_secondary_pnl rounded-lg min-w-[130px] min-h-[54px]">
              <label className="method-item w-full h-full  cursor-pointer">
                <input
                  type="radio"
                  className=""
                  value="4"
                  onClick={handleChangeMethod}
                  name="credit-method"
                />
                <div className="method-inside relative w-full h-full rounded-lg  flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute bg-white rounded-full overflow-hidden right-0 top-0 translate-x-1/3 z-10 -translate-y-1/3"
                    viewBox="0 0 20 20"
                    fill="#00CC17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="w-12 h-12">
                    {" "}
                    <img
                      className="w-full h-full object-contain"
                      src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png"
                      alt=""
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          method === "0" ? "opacity-40" : ""
        } mt-10 hidden w-full bg-white dark:!bg-dark_primary_pnl rounded-lg`}
      >
        <div className="opacity-80 mb-2 dark:text-white">Name Card</div>
        <input
          type="text"
          className="w-full focus:border-blue-200 outline-none px-3 py-[10px] rounded-md bg-gray-100 border-2 border-gray-200  dark:!bg-dark_input  dark:!border-gray-800 dark:text-white "
        />
        <div className="flex gap-4 mt-4">
          <div className="item flex-[3]">
            <div className="opacity-80 mb-2 dark:text-white">Card Number</div>
            <input
              type="text"
              className="w-full focus:border-blue-200 outline-none px-3 py-[10px]  rounded-md bg-gray-100 dark:!bg-dark_input border-2 dark:!border-gray-800 dark:text-white  border-gray-200 "
            />
          </div>
          <div className="item">
            <div className="opacity-80 mb-2 dark:text-white">CCV</div>
            <input
              type="text"
              className="w-full focus:border-blue-200 outline-none px-3 py-[10px] rounded-md bg-gray-100 border-2 border-gray-200 dark:!bg-dark_input  dark:!border-gray-800 dark:text-white  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
