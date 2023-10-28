import { useSelector } from "react-redux";
import { seatSelector } from "../../../redux/seatBookingSelector";
import TickeChoosing from "./TicketChoosing";
import TotalMoney from "./TotalMoney";

const ChoosingSeatGeneral = ({
  isOpenTab,
  handleToggleOpenTab,
  type = "edit",
  handleContinue,
  enableContinue,
}) => {
  const { wagon, currentWagon } = useSelector(seatSelector);

  const checkTotalTicket = () => {
    let totalTicket = 0;

    for (let i = 0; i < wagon.length; i++) {
      totalTicket += wagon[i].seat.length;
    }
    return totalTicket;
  };
  return (
    <div
      className={`${
        isOpenTab
          ? "w-[600px] mx-auto lg:w-full lg:px-4 ssm:px-1"
          : "w-[130px] absolute right-0 top-0 shadow-sm"
      } min-h-[180px]   bg-white rounded-lg overflow-hidden transition-all duration-75`}
    >
      <div
        className="w-full px-1 h-6 bg-gray-200 bg-opacity-80 text-center py-6 flex items-center gap-2 justify-center cursor-pointer"
        onClick={handleToggleOpenTab}
      >
        <i
          class={`fa-solid fa-angle-left transition-all duration-100 ${
            isOpenTab ? "rotate-180" : ""
          } ${type === "nonedit" ? "hidden" : ""}`}
        ></i>
        {isOpenTab ? (
          " Chi tiết vé"
        ) : (
          <div className="">
            <span className="opacity-60 text-sm">Đã chọn:</span>{" "}
            <span className="ml-1">{checkTotalTicket()} vé</span>
          </div>
        )}
      </div>

      {isOpenTab && (
        <TickeChoosing
          enableContinue={enableContinue}
          type={type}
          handleContinue={handleContinue}
        />
      )}
      {!isOpenTab && <TotalMoney />}
    </div>
  );
};

export default ChoosingSeatGeneral;
