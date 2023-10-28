import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useClickOutSide from "../../../hooks/useClickOutSide";
import { cancelTicket } from "../../../slices/cusTicketSlice";
import {
  handleMoney,
  handleTimeTicket,
  handleTimeTicketMinutes,
} from "../../../utils/handleValue";
import CancelModal from "./CancelModal";
import "./ticket.scss";
const ticketImg = require("../../../asset/img/ticketvector2.png");
const ModalTicketDetail = ({ closeModal, setIsChange, data, type }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 z-50 grid place-content-center">
      <div className="modal-ticket    active min-w-[900px] overflow-hidden h-[600px] bg-white rounded-lg">
        <div className="header py-3 bg-gray-100  w-full text-center text-lg font-bold relative">
          Thong tin chi tiet cua ve
          <div
            onClick={closeModal}
            className="absolute right-0 top-0 py-2 px-4 m-1 rounded-lg cursor-pointer hover:bg-gray-200 text-center"
          >
            X
          </div>
        </div>

        <div className="content py-4 pr-6 pl-20 flex-col flex gap-2 w-full h-full overflow-scroll ">
          <div className="text-lg  mt-4 mb-2 font-bold opacity-80">
            Thông tin chuyến đi
          </div>

          <div className="w-full h-[250px] relative">
            <div className="w-[300px] h-[300px] opacity-80 grid place-content-center">
              <div className="opacity-5 w-[300px] h-[300px]">
                <img
                  src={ticketImg}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </div>
            </div>
            <div className="inset-0 absolute">
              <div className="px-4 py-2  z-40 rounded-md w-fit border-2 border-gray-100">
                <div className="flex items-center flex-col pb-8 gap-6">
                  <div className="flex items-center pb-3 border-b-2 border-gray-200 w-fit gap-4 w-full justify-center">
                    <div className="border rounded-md w-12 h-12 overflow-hidden grid place-content-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/%C4%90svn.png"
                        alt=""
                      />
                    </div>
                    <span className="font-bold opacity-80 text-base">
                      {data.route.enterprise}
                    </span>
                  </div>

                  <div className="flex justify-center mt-4 text-center ">
                    <div className="flex items-center gap-1 w-fit ">
                      <div className="flex flex-col gap-1 text-sm">
                        <span className="font-bold opacity-90 mb-4 text-lg text-orange-400">
                          Ga {data.route.start}
                        </span>
                        <span className="time-start text-bold text-base">
                          {handleTimeTicket(data.route.timeStart)}
                        </span>
                        <div className=" text-sm opacity-60">
                          T{new Date(data.route.date).getDay() + 1}, Ngày{" "}
                          {new Date(data.route.date).toLocaleDateString(
                            "vi-VN"
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-center text-base ">
                        <div className="w-[100px] border-dotted border-b-2 "></div>
                        <span>
                          {handleTimeTicketMinutes(
                            data.route.timeEnd - data.route.timeStart
                          )}{" "}
                          giờ
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 text-sm">
                        <span className="font-bold opacity-90 mb-4 text-lg text-blue-400">
                          Ga {data.route.end}
                        </span>
                        <span className="time-start text-bold text-base">
                          {handleTimeTicket(data.route.timeEnd)}
                        </span>
                        <div className=" text-sm opacity-60">
                          {" "}
                          T{new Date(data.route.date).getDay() + 1}, Ngày{" "}
                          {new Date(data.route.date).toLocaleDateString(
                            "vi-VN"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-lg mt-4 mb-2 font-bold opacity-80">
            Thông tin khách hàng
          </div>

          {data &&
            data.seat.map((item, ind) => (
              <ItemTicket
                setIsChange={setIsChange}
                type={type}
                key={ind}
                data={item}
              />
            ))}

          <div className="text-lg mt-4 mb-2 font-bold opacity-80">
            Thông tin thanh toán
          </div>
          <PaymentInfo data={data} />

          <div className="mb-16"></div>
        </div>
      </div>
    </div>
  );
};

export default ModalTicketDetail;

const ItemTicket = ({ data, setIsChange, type }) => {
  const { show, setShow, nodeRef } = useClickOutSide(".modal");
  const dispatch = useDispatch();
  const { isLoading, isErr } = useSelector((state) => state.cusTicket);
  const [isCancel, setIsCancel] = useState(false);
  const handleCancelTicket = () => {
    setIsChange(true);
    dispatch(cancelTicket(data.idCusTicket));
    if (!isLoading) {
      setIsCancel(true);
    }
  };
  useEffect(() => {
    if (isLoading) {
      setShow(false);
    }
  }, [isCancel]);
  return (
    <div className="rounded-lg border-2 mb-2  border-gray-100 w-fit p-4">
      <div className="flex gap-6 items-center">
        <div className="flex items-center justify-center flex-col gap-2 pr-6 border-r-2 border-r-gray-200">
          <div className="text-base opacity-90 font-bold">Người lớn 1</div>
          <div className="opacity-80">
            Toa {data.numOfWagon + 1} - Ngồi Mềm điều hoà
          </div>
        </div>

        <div className="flex flex-col   min-w-[300px] gap-4 mb-4">
          <div className="flex items-center gap-2 justify-between ">
            <div className="opacity-80">Họ tên</div>
            <div className="text-base font-bold opacity-80">{data.cusName}</div>
          </div>
          <div className="flex items-center gap-2 justify-between ">
            <div className="opacity-80">CMND / CCCD / GPLX</div>
            <div className="text-base font-bold opacity-80">{data.cusId}</div>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div className="opacity-80">Chỗ ngồi</div>
            <div className="text-base font-bold opacity-80">
              Toa {data.numOfWagon + 1} - Ghế {data.numOfSeat}
            </div>
          </div>
        </div>

        <div ref={nodeRef} className="ml-10 relative flex flex-col gap-4">
          <div
            onClick={() => {
              if (isCancel) return;
              if (type === "cancel") return;
              setShow(true);
            }}
            className={`w-[140px] ${
              type === "cancel" &&
              "opacity-50 hover:!bg-gray-200 cursor-default"
            } py-3 text-center px-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 ${
              isCancel ? "opacity-40 hover:bg-gray-200 cursor-default" : ""
            }`}
          >
            {type === "available" && !isCancel
              ? "Huỷ vé"
              : type === "cancel" || isCancel
              ? "đã huỷ"
              : ""}
          </div>
          {show && (
            <CancelModal
              handleCancelTicket={handleCancelTicket}
              onClose={() => setShow(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const PaymentInfo = ({ data }) => {
  const [numSeat, setNumSeat] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  useEffect(() => {
    setNumSeat(0);
    setTotalMoney(0);
    for (let i of data.seat) {
      setNumSeat((prev) => prev + 1);
      setTotalMoney((prev) => prev + i.price);
    }
  }, [data]);
  return (
    <div className="rounded-lg border-2 mb-2 border-gray-100 w-full p-4">
      <div className="flex gap-6 items-center">
        <div className="flex items-center justify-center flex-col gap-2 pr-6 border-r-2 border-r-gray-200">
          <div className="text-base opacity-90 font-bold px-4 py-2 rounded-lg bg-green-50 text-green-500">
            Đã thanh toán
          </div>
          <div className="opacity-80 text-base font-bold">Tiền mặt</div>
        </div>

        <div className="flex flex-col   min-w-[340px] gap-4 mb-4 pr-6 border-r-2 border-r-gray-200">
          <div className="flex items-center gap-2 justify-between ">
            <div className="opacity-80">Họ tên</div>
            <div className="text-base font-bold opacity-80">
              {data.userBooking.fullname}
            </div>
          </div>
          <div className="flex items-center gap-2 justify-between ">
            <div className="opacity-80">CMND / CCCD / GPLX</div>
            <div className="text-base font-bold opacity-80">
              {data.userBooking.identifyNumber}
            </div>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div className="opacity-80">Email</div>
            <div className="text-base font-bold opacity-80">
              {data.userBooking.email}
            </div>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div className="opacity-80">SDT</div>
            <div className="text-base font-bold opacity-80">
              {data.userBooking.phoneNumber}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 justify-between">
            <div className="opacity-80">Số lượng vé</div>
            <div className="text-base font-bold opacity-80">{numSeat}</div>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div className="opacity-80">Giảm giá</div>
            <div className="text-base font-bold opacity-80">0</div>
          </div>
          <div className="flex items-center gap-2 justify-between">
            <div className="opacity-80">Tổng </div>
            <div className="text-base font-bold opacity-80">
              {handleMoney(totalMoney)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
