import React from "react";
import ReactDom from "react-dom";
import "./mainPage.scss";

const PickQuantityTicket = ({ coords }) => {
  return ReactDom.createPortal(
    <div
      style={{
        top: coords.top + window.scrollY,
        left: coords.left,
        marginLeft: "-200px",
        marginTop: "-300px",
      }}
      className="absolute quantity-box open-pop-up min-w-[200px] min-h-[100px] bg-white rounded-lg shadow-lg p-4"
    >
      <div className="item p-3 flex items-center content-center gap-20 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gray-100 after:w-[90%] after:mx-4">
        <div className="flex flex-col items-start gap-1">
          <span className="text-lg">Adults</span>
          <span className="text-base  text-[#6372807f] text-md">
            Age 13 or above
          </span>
        </div>
        <div className="flex items-center gap-4 ">
          <button className="relative   bg-white rounded-full min-w-4 min-h-4 w-10 h-10 border-2 border-2-gray-400 text-gray-400 grid content-center text-xl hover:!bg-blue-400 hover:border-transparent active:!bg-blue-500 hover:text-white">
            -
          </button>
          <div className="text-xl text-gray-400">0</div>
          <button className="relative bg-white rounded-full min-w-4 min-h-4 w-10 h-10 border-2 border-2-gray-400  text-gray-400 grid content-center text-xl hover:!bg-blue-400 hover:border-transparent active:!bg-blue-500 hover:text-white">
            +
          </button>
        </div>
      </div>

      <div className="item p-3 flex content-between gap-20 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gray-100 after:w-[90%] after:mx-4">
        <div className="flex flex-col items-start gap-1 flex-1">
          <span className="text-lg">Children</span>
          <span className="text-base text-[#6372807f] text-md">Ages 2-12</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative   bg-white rounded-full min-w-4 min-h-4 w-10 h-10 border-2 border-2-gray-400 text-gray-400 grid content-center text-xl hover:!bg-blue-400 hover:border-transparent active:!bg-blue-500 hover:text-white">
            -
          </button>
          <div className="text-xl text-gray-400">0</div>
          <button className="relative bg-white rounded-full min-w-4 min-h-4 w-10 h-10 border-2 border-2-gray-400  text-gray-400 grid content-center text-xl hover:!bg-blue-400 hover:border-transparent active:!bg-blue-500 hover:text-white">
            +
          </button>
        </div>
      </div>

      <div className="item p-3 flex content-between items-center  gap-20 relative ">
        <div className="flex flex-col items-start gap-1 flex-1">
          <span className="text-lg">Infants</span>
          <span className="text-base  text-[#6372807f] text-md">Under 2</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative   bg-white rounded-full min-w-4 min-h-4 w-10 h-10 border-2 border-2-gray-400 text-gray-400 grid content-center text-xl hover:!bg-blue-400 hover:border-transparent active:!bg-blue-500 hover:text-white">
            -
          </button>
          <div className="text-xl text-gray-400">0</div>
          <button className="relative bg-white rounded-full min-w-4 min-h-4 w-10 h-10 border-2 border-2-gray-400  text-gray-400 grid content-center text-xl hover:!bg-blue-400 hover:border-transparent active:!bg-blue-500 hover:text-white">
            +
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default PickQuantityTicket;
