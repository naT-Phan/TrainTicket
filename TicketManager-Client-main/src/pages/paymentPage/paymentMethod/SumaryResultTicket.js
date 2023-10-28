import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { seatSelector } from "../../../redux/seatBookingSelector";
import {
  filterSelector,
  filterSelectorFixIndex,
} from "../../../redux/tripSelector";
import { createInvoice } from "../../../slices/seatBookingSlice";
import { handleMoney } from "../../../utils/handleValue";
import TotalMoney from "../choosingSeat/TotalMoney";

const SumaryResultTicket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { wagonData, wagonBooking, status } = useSelector(seatSelector);
  const {
    data: { startIndex, endIndex },
  } = useSelector(filterSelectorFixIndex);
  const {
    start: startLocation,
    end: endLocation,
    date: timeStart,
  } = useSelector(filterSelector);

  const { start, end, date } = useSelector(filterSelector);
  const [listMoney, setListMoney] = useState([]);
  const handlePay = () => {
    if (!wagonBooking.payment) {
      alert("Vui lòng chọn hình thức thanh toán");
      return;
    }
    let typeHumanBooking = "guest";
    let data = {
      idTicket: wagonData[0]?.idTicket,
      payment: wagonBooking.payment,
      isPay: wagonBooking.isPay,
    };
    if (wagonBooking.user.idUser) typeHumanBooking = "user";
    else typeHumanBooking = "guest";

    const tripLocation = {
      startIndex,
      endIndex,
    };
    dispatch(
      createInvoice({
        data: data,
        list: wagonBooking.listUserTicket,
        user: wagonBooking.user,
        userID: wagonBooking.user.idUser || "",
        tripLocation,
        typeHumanBooking,
        listMoney,
        startLocation,
        endLocation,
        date: timeStart,
      })
    );

    if (status === "idle") {
      navigate("/payment/completed");
    }
  };

  const [totalMoney, setTotalMoney] = useState(0);
  const calculateTotal = () => {
    const currentListMoney = [];
    let sum = 0;
    for (let i of wagonBooking.listUserTicket) {
      const moneyTicket = i.price * Math.abs(startIndex - endIndex);
      sum += moneyTicket;
      currentListMoney.push(moneyTicket);
    }
    setListMoney(currentListMoney);
    return sum;
  };

  useEffect(() => {
    setTotalMoney(handleMoney(calculateTotal()));
  }, []);

  return (
    <div className="flex-1 px-4 min-w-[300px] min-h-[400px] rounded-lg dark:!opacity-90 dark:!text-white  bg-white dark:!bg-dark_primary_pnl flex-col ">
      <div className="w-full px-1 h-6 bg-gray-200 bg-opacity-80 text-center py-6 flex items-center gap-2 justify-center cursor-pointer rounded-b-lg">
        Kiểm Tra Thông Tin
      </div>
      <div className="text-lg font-bold opacity-80 mt-4 px-0 mb-2">
        Thông Tin Vé
      </div>
      <div className="px-4 py-2 rounded-md border-2 border-gray-100">
        <div className="flex items-center justify-center gap-6">
          {/* <div className="border rounded-md w-12 h-12 overflow-hidden grid place-content-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/%C4%90svn.png"
              alt=""
            />
          </div> */}
          <div className="block border-r-2 border-r-gray-200  mt-2 pr-4 -ml-6">
            <div className="text-sm opacity-50">Ngay Di</div>
            <div className="text-sm opacity-90">
              T{new Date(date).getDay() + 1} ,{" "}
              {new Date(date).toLocaleDateString("vi-VN")}
            </div>
          </div>
          <div className="block">
            <div className="text-sm opacity-50 mt-2">So luong</div>
            <div className="text-sm  opacity-90">
              {wagonBooking.listUserTicket?.length || "0"} nguoi
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4 text-center">
          <div className="flex items-center gap-1 w-fit ">
            <div className="flex flex-col gap-1 text-sm">
              <span className="time-start">12:00 AM</span>
              <span className="font-bold opacity-90 text-orange-400">
                Ga {start}
              </span>
            </div>
            <div className="flex flex-col gap-1 items-center text-sm">
              <div className="w-[100px] border-dotted border-b-2"></div>
              <span>13 gio</span>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <span className="time-start">04:30 PM</span>
              <span className="font-bold opacity-90 text-blue-400">
                Ga {end}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-lg font-bold opacity-80 mt-4 px-0">Summary</div>
      <div className="mt-2 flex flex-col gap-3 text-sm dark:!text-white px-4 py-4 rounded-md border-2 border-gray-100">
        <div className="item flex justify-between px-3">
          <div className="opacity-60">3 Vé</div>
          <div className="font-bold">{totalMoney}</div>
        </div>
        <div className="item hidden flex justify-between px-3">
          <div className="opacity-60">Thuế & phí</div>
          <div className="font-bold">1.240.000 vnd</div>
        </div>
        <div className="item flex justify-between px-3">
          <div className="opacity-60">Dịch vụ</div>
          <div className="font-bold"> Miễn Phí</div>
        </div>
        <div className="item flex justify-between bg-gray-100 dark:!bg-opacity-10 dark:!text-white rounded-lg py-2 px-3 ">
          <div className="opacity-60">Tổng Cộng</div>
          <div className="font-bold">{totalMoney}</div>
        </div>
        <div className="text-lg opacity-80 font-bold">Hình thức thanh toán</div>
        <div className="mt-2 mb-2 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            {wagonBooking.payment === "creditcard" ? (
              <i class="fa-solid fa-credit-card text-green-400 font-bold text-lg"></i>
            ) : (
              <i class="fa-solid fa-check text-green-400 font-bold text-lg"></i>
            )}
          </div>
          <span>
            {wagonBooking.payment === "creditcard"
              ? "Thanh toán trực tuyến"
              : "Trả tiền mặt"}
          </span>
        </div>
        <div
          onClick={handlePay}
          className="px-4 py-[12px] rounded-lg bg-primary text-white text-center mt-3 mb-2"
        >
          Thanh toán
        </div>
      </div>

      {/* loading */}
      {status === "loading" && (
        <div className="absolute rounded-md inset-0 bg-gray-400 bg-opacity-60 flex items-center justify-center">
          <div className="w-14 h-14 border-4 duration-75  rounded-full border-primary border-r-transparent animate-spin"></div>
        </div>
      )}
    </div>
  );
};
export default SumaryResultTicket;
