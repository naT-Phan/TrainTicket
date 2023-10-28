import React from "react";
import { useSelector } from "react-redux";

const CancelModal = ({ onClose, handleCancelTicket }) => {
  const { isLoading, isErr } = useSelector((state) => state.cusTicket);
  return (
    <div className="absolute modal flex flex-col justify-between top-full -left-full z-50 w-[280px] h-[200px] rounded-lg bg-white shadow-lg p-6">
      <div className="text-base">Chắc chắn huỷ vé 🥺</div>
      <div className="opacity-80">
        Bạn sẽ mất 50% giá trị vé, chúng tôi sẽ hoàn số tiền còn lại vào tài
        khoản của bạn
      </div>
      <div className=" items-center flex gap-2  justify-end">
        <div
          onClick={onClose}
          className="btn px-2 w-[80px] py-1 rounded-md bg-gray-200 hover:bg-opacity-80  text-center cursor-pointer"
        >
          Huỷ
        </div>
        <div
          onClick={handleCancelTicket}
          className="btn px-2 py-1 w-[80px] rounded-md bg-primary hover:bg-opacity-80 text-white text-center cursor-pointer"
        >
          {!isLoading && "Đồng ý"}
          {isLoading && (
            <div className="w-4 h-4 rounded-full border-2 border-primary border-r-transparent animate-spin"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
