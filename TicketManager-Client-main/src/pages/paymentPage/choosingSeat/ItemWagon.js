import { useDispatch, useSelector } from "react-redux";
import { seatSelector } from "../../../redux/seatBookingSelector";
import { setCurrentWagon } from "../../../slices/seatBookingSlice";
import { convertNameWagon } from "../../../utils/constValue";

const ItemWagon = ({ active, ind, data }) => {
  let className = active ? "border-primary bg-blue-50" : "";
  const dispatch = useDispatch();
  const handleActiveWagon = () => {
    dispatch(setCurrentWagon(ind));
  };

  const { wagon } = useSelector(seatSelector);

  if (wagon[ind]?.seat?.length > 0 && !active) {
    className += " bg-red-50";
  }

  return (
    <div
      onClick={handleActiveWagon}
      className={`min-w-[160px] h-14 rounded-md border-2 border-t-8 text-[11px] opacity-90 grid content-center cursor-pointer hover:scale-105 duration-75 transition-transform ${className}`}
    >
      <span className="px-2">
        {" "}
        Toa {ind + 1}: {convertNameWagon(data.type)}
      </span>
    </div>
  );
};

export default ItemWagon;
