import { useDispatch, useSelector } from "react-redux";

import { removeSeat } from "../../../slices/seatBookingSlice";
import { convertNameWagon } from "../../../utils/constValue";
import { handleMoney } from "../../../utils/handleValue";

const ItemSeatDetail = ({
  data: { numOfSeat, typeWagon, price, name, identifyOrAge, typeTicket },
  wagon,
  type,
  money,
}) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeSeat({ numOfSeat, wagon }));
  };

  return (
    <div className="w-full px-3 py-3 flex justify-between items-center rounded-md border my-4">
      <div className="flex flex-col gap-1 items-start">
        <div className="text-[10px]">{convertNameWagon(typeWagon)}</div>
        <div className="font-bold">
          Ghế {numOfSeat} - Toa {wagon + 1}
        </div>
      </div>

      <div className="flex items-center gap-1 text-[12px] flex-col">
        <div
          className={`opacity-60 ${name && "!opacity-100 !text-base"} ${
            type !== "edit" ? "" : "hidden "
          }`}
        >
          {name ? name : "Chưa nhập thông tin"}
        </div>
        <span className="font-bold lowercase ">{handleMoney(money)}</span>
        <div
          onClick={handleRemoveItem}
          className={`${
            type === "edit" ? "" : "hidden "
          } btn px-2 py-1 rounded-md border hover:bg-gray-200 cursor-pointer`}
        >
          Bỏ chọn
        </div>
      </div>
    </div>
  );
};
export default ItemSeatDetail;
