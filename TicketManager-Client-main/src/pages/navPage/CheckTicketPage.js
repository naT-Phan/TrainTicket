import React, { useEffect, useState } from "react";
import { getDetailTicket } from "../../slices/userSlice";
import { toast } from "react-toastify";
const trainImg = require("../../asset/img/train1.jpeg");

const CheckTicketPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bookingCode, setBookingCode] = useState("");
  const [detailView, setDetailView] = useState(false);
  const [data, setData] = useState({});

  const onBack = async () => {
    setDetailView(false);

    setData({});
  };

  const onSubmit = async () => {
    const filter = { phoneNumber, bookingCode };

    setData(await getDetailTicket(filter));
    console.log(
      "🚀 ~ file: CheckTicketPage.js ~ line 24 ~ onSubmit ~ data",
      data.userBooking
    );
    if (!data.userBooking) {
      toast.error("Thông tin không chính xác");
    }
    setDetailView(true);
  };

  return (
    <div>
      <div className="w-full relative">
        <img src={trainImg} className="w-full h-screen object-cover" alt="" />
        {detailView && data?.userBooking ? (
          <div className="absolute top-[465px] left-1/2 w-[1200px] h-[900px] min-h-[700px] rounded-lg bg-white -translate-x-1/2 -translate-y-1/2 p-10 flex flex-col gap-4 overflow-y-scroll">
            <div
              className="w-[100px] text-white cursor-pointer py-3 text-center mt-4 bg-primary hover:bg-opacity-80 rounded-lg"
              onClick={onBack}
            >
              Quay lại
            </div>
            <div class="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
              <div>
                <h1 class="text-2xl  dark:text-white font-semibold leading-6 text-gray-800">
                  Thông tin người đặt vé
                </h1>
              </div>
              <div class="flex mt-7 flex-col items-end w-full space-y-6">
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Mã đặt vé
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.userBooking?.bookingCode}
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Tên
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.userBooking?.fullname}
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Email
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.userBooking?.email}
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    CMND/CCCD
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.userBooking?.identifyNumber}
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Số điện thoại
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.userBooking?.phoneNumber}
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Phương thức thanh toán
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.userBooking?.payment}
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Trạng thái
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.userBooking?.isPay
                      ? "Đã thanh toán"
                      : "Chưa thanh toán"}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
              <div>
                <h1 class="text-2xl  dark:text-white font-semibold leading-6 text-gray-800">
                  Tuyến đường
                </h1>
              </div>
              <div class="flex mt-7 flex-col items-end w-full space-y-6">
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Mã tàu
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.route?.idTrain}
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Công ty
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.route?.enterpriseName}
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Điểm đi
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.route?.cityNameStart}
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Điểm đến
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {data?.route?.cityNameEnd}
                  </p>
                </div>
                <div class="flex w-full items-center">
                  <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                    Ngày khởi hành
                  </p>
                  <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                    {new Date(data?.route?.startDate).toLocaleDateString(
                      "vi-VN"
                    )}
                  </p>
                </div>
              </div>
            </div>
            {data?.seats?.map((seat) => (
              <div
                role="listitem"
                class="bg-white  dark:bg-gray-800 cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
              >
                <div class="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                <div class="w-full p-8">
                  <div class="md:flex items-center justify-between">
                    <h2 class="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">
                      {seat.cusName}
                    </h2>
                  </div>
                  <div class="flex flex-col justify-start items-start bg-gray-50 dark:bg-gray-800 w-full p-6 md:p-14">
                    <div></div>
                    <div class="flex mt-7 flex-col items-end w-full space-y-6">
                      {!!seat.cusId && (
                        <div class="flex w-full items-center">
                          <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                            ID
                          </p>
                          <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                            {seat?.cusId}
                          </p>
                        </div>
                      )}
                      {!!seat.cusAge && (
                        <div class="flex w-full items-center">
                          <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                            Tuổi
                          </p>
                          <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                            {seat?.cusAge}
                          </p>
                        </div>
                      )}
                      <div class="flex w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                          Số ghế
                        </p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                          {seat?.numOfSeat}
                        </p>
                      </div>
                      <div class="flex w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                          Số toa
                        </p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                          {seat?.numOfWagon}
                        </p>
                      </div>
                      <div class="flex w-full items-center">
                        <p class="text-lg dark:text-gray-300 leading-4 text-gray-600 w-[300px]">
                          Giá
                        </p>
                        <p class="text-lg dark:text-gray-300 font-semibold leading-4 text-gray-600">
                          {seat?.price
                            .toString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") +
                            " VND"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="absolute top-1/2  left-1/2 sm:w-fit w-[500px] min-h-[300px] rounded-lg bg-white -translate-x-1/2 -translate-y-3/4 p-10 flex flex-col gap-4">
            <CustomInput
              required={true}
              title="Nhập Số Điện Thoại"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              inputType="Number"
              placeHolder=""
            />
            <CustomInput
              required={true}
              title="Nhập Mã Đặt Chỗ"
              value={bookingCode}
              onChange={(event) => setBookingCode(event.target.value)}
              inputType="Text"
              placeHolder=""
            />
            <div
              className="w-full text-white cursor-pointer py-3 text-center mt-4 bg-primary hover:bg-opacity-80 rounded-lg"
              onClick={onSubmit}
            >
              Kiểm tra
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CustomInput = ({
  required,
  title,
  inputType,
  placeHolder,
  name,
  onChange,
  value,
}) => {
  let className = "bg-blue-100 focus:border-blue-300 ";
  return (
    <div>
      <div className="opacity-70 text-base ">{title}</div>
      <input
        required={required}
        name={name}
        value={value}
        onChange={onChange}
        type={inputType}
        placeholder={placeHolder}
        className={`w-full px-6 py-2  text-base rounded-lg mt-2 outline-none  border-2  border-transparent ${className}`}
      />
    </div>
  );
};

export default CheckTicketPage;
