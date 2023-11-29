import React from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import {
  cityFilterSelectorEnd,
  cityFilterSelectorStart,
  citySelector,
} from "../../redux/citySelector";
import { routeSelector } from "../../redux/routeSelector";
import { everywhere } from "../../utils/constValue";

const PickModal = ({ coords, type, setLocation, handleClose }) => {
  const cityStart = useSelector(cityFilterSelectorStart);
  const cityEnd = useSelector(cityFilterSelectorEnd);

  const location = Array.from(
    new Set(
      type === "start"
        ? cityStart.map((city) => city.name)
        : cityEnd.map((city) => city.name)
    )
  );
  location.unshift(everywhere);

  const handleChoosingItem = (item) => {
    setLocation(item);
    handleClose();
  };

  return ReactDom.createPortal(
    <div
      style={{
        top: coords.top + window.scrollY + coords.height,
        left: coords.left,
        minWidth: coords.width,
      }}
      className="absolute modal z-10 min-w-[300px] max-h-[350px] min-h-[50px] !bg-white rounded-xl top-full mt-2 -ml-2 overflow-y-scroll no-scrollbar  shadow-2xl"
    >
      {location &&
        location.map((item, ind) => (
          <div
            key={ind}
            onClick={() => handleChoosingItem(item)}
            className=" border-b-2 bg-white border-b-gray-50 flex gap-4 items-center hover:bg-gray-100 cursor-pointer px-6 py-3 pr-10 pt-4"
          >
            <i class="fa-solid fa-location-dot"></i>
            <div className="flex flex-col">
              <span className="">{item}</span>
              {ind !== 0 ? (
                <span className="desc text-sm block mt-1 text-[#637280]">
                  Tỉnh {item}, Viet Nam
                </span>
              ) : null}
            </div>
          </div>
        ))}
    </div>,
    document.querySelector("body")
  );
};

export default PickModal;
