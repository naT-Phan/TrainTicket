import React from "react";

const Policy = () => {
  return (
    <div className="w-full h-full p-6 custom-anim-right">
      <div className="content">
        <div className="title font-bold text-base mb-3">
          1. Thời gian, mức phí đổi trả vé:
        </div>
        <span className="font-bold">- Đổi vé:</span>{" "}
        <div className="leading-8">
          Vé cá nhân đổi trước giờ tàu chạy 24 giờ trở lên, lệ phí là 20.000
          đồng/vé; không áp dụng đổi vé đối với vé tập thể.
        </div>
        <span className="font-bold">- Trả vé:</span>
        <div className="leading-8 my-1">
          + Vé cá nhân: Trả vé trước giờ tàu chạy từ 4 giờ đến dưới 24 giờ, lệ
          phí là 20% giá vé; từ 24 giờ trở lên lệ phí là 10% giá vé.
        </div>
        <div className="leading-8 my-1">
          + Vé tập thể: Trả vé trước giờ tàu chạy từ 24 giờ đến dưới 72 giờ, lệ
          phí là 20% giá vé; từ 72 giờ trở lên lệ phí là 10% giá vé.
        </div>
        <div className="title font-bold mb-2 mt-4 text-base">
          2. Hình thức trả vé.
        </div>
        <div className="leading-8">
          - Khi hành khách mua vé và thanh toán online qua website bán vé của
          Ngành Đường sắt, app bán vé hoặc các ứng dụng mua vé tàu hỏa của các
          đối tác thứ ba thì có thể trả vé online qua các website bán vé của
          Ngành Đường sắt hoặc đến trực tiếp nhà ga.
        </div>
        <div className="leading-8">
          - Khi hành khách mua vé bằng các hình thức khác, muốn đổi vé, trả vé
          hành khách đến trực tiếp nhà ga kèm theo giấy tờ tùy thân bản chính
          của người đi tàu (hoặc người mua vé) cho nhân viên đường sắt. Đồng
          thời, thông tin trên thẻ đi tàu phải trùng khớp với giấy tờ tùy thân
          của hành khách.
        </div>
        <div className="mt-2">Trân trọng cảm ơn!.</div>
      </div>
    </div>
  );
};

export default Policy;
