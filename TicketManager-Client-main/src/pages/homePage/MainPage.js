import React, { useEffect, useState } from "react";
import PickModal from "./PickModal";
import PickQuantityTicket from "./PickQuantityTicket";
import { Link, useNavigate } from "react-router-dom";

import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import "./mainPage.scss";
import moment from "moment";
import "moment/locale/zh-cn";

import useClickOutSide from "../../hooks/useClickOutSide";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoute } from "../../slices/routeSlice";
import { routeSelector } from "../../redux/routeSelector";
import { updateFiter } from "../../slices/filterTicketSlice";
import useHandleTicketRequest from "../../hooks/useHandleTicketRequest";
import { fetchCity } from "../../slices/citySlice";
import { citySelector } from "../../redux/citySelector";
import useClickOutSideWithEvent from "../../hooks/useClickOutSideWithEvent";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoute());
    dispatch(fetchCity());
  }, []);

  const city = useSelector(citySelector);
  const checkRightCity = (data) => {
    for (let c of city.city) {
      if (c.name === data) return true;
    }
    return false;
  };

  const [startTrue, setStartTrue] = useState(false);

  const [err, seterr] = useState({
    start: false,
    end: false,
    date: false,
  });
  const handleResetErr = () => {
    seterr({
      start: false,
      end: false,
      date: false,
    });
  };
  const handleResetLocation = () => {
    console.log("hongcheck", startLocation);
    if (!checkRightCity(startLocation)) {
      //setStartLocation("");
    }
    if (!checkRightCity(endLocation)) {
      //setEndLocation("");
    }
  };

  const {
    show: show1,
    setShow: setShow1,
    nodeRef: nodeRef1,
  } = useClickOutSideWithEvent(".modal");

  const {
    show: show2,
    setShow: setShow2,
    nodeRef: nodeRef2,
  } = useClickOutSide(".modal", handleResetLocation);

  const {
    show: showQuantity,
    setShow: setShowQuantity,
    nodeRef: nodeRefQuantity,
  } = useClickOutSide(".quantity-box");

  const [coords, setCoords] = useState({});

  const handleOpenModal1 = () => {
    handleResetErr();
    setShow1(true);
    console.log(nodeRef1.current.getBoundingClientRect());
    setCoords(nodeRef1.current.getBoundingClientRect());
  };
  const handleOpenModal2 = () => {
    handleResetErr();
    setShow2(true);
    console.log(nodeRef1.current.getBoundingClientRect());
    setCoords(nodeRef2.current.getBoundingClientRect());
  };
  const handleOpenModalQuantity = () => {
    setShowQuantity(true);
    setCoords(nodeRefQuantity.current.getBoundingClientRect());
  };

  const {
    startLocation,
    endLocation,
    dateStart,
    setStartLocation,
    setEndLocation,
    setDateStart,
    handleChangeDate,
    handleSaveFilter,
  } = useHandleTicketRequest();

  useEffect(() => {
    setCoords(nodeRef1.current.getBoundingClientRect());
    if (checkRightCity(startLocation)) {
      setStartTrue(true);
    } else {
      setStartTrue(false);
    }
  }, [startLocation]);
  useEffect(() => {
    setCoords(nodeRef2.current.getBoundingClientRect());
  }, [endLocation]);

  const navigate = useNavigate();
  const { city: cities } = useSelector(citySelector);
  const checkLocation = (data) => {
    for (let c in cities) {
      if (c.name === data) return true;
    }
    return false;
  };

  const handleSearch = () => {
    seterr({
      start: checkLocation(startLocation),
      end: checkLocation(endLocation),
      date: checkLocation(dateStart),
    });
    if (
      checkLocation(startLocation) ||
      checkLocation(endLocation) ||
      checkLocation(dateStart)
    ) {
      return;
    }
    handleSaveFilter();
    // alert(startLocation + endLocation + dateStart + cities[0].name);
    navigate("/ticket");
  };

  // tempt link: https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/f5b01j54xainwtaosf8r/TourNg%C3%A0yThamQuanGrandCanyonWestRimT%E1%BB%ABLasVegas.webp
  // tempt Link : https://images.unsplash.com/photo-1653047256226-ab0d16c758d5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170
  return (
    <div className="relative mb-[150px] !transition-colors !duration-1000 select-none">
      <div className="min-h-[200px]">
        <img
          className="w-full h-[500px] object-cover"
          src="https://store-images.s-microsoft.com/image/apps.3882.14122153954796588.4ab91a01-8893-48df-9ddc-dca8a0389098.011df5c6-3b60-4b8a-ab40-1999b8d50a7e"
          alt=""
        />
      </div>
      <div className="main-form rounded-lg bg-white   dark:!bg-[#2f2f2f] absolute pb-14 2xl:-bottom-16 lg:top-[150px] -translate-x-2/4 left-2/4 2xl:w-[1100px] lg:w-[85%] lg:mx-1 h-fit ">
        <div className="flex flex-col 2xl:px-14 lg:px-16 sm:px-8 pt-12 gap-10 ">
          <div className="flex justify-between  dark:text-white 2xl:flex-row lg:flex-col 2xl:border-b-gray-[#ccc] 2xl:border-b-2 lg:border-none ">
            <div className="flex content-center 2xl:gap-10 sm:gap-2 lg:border-b-gray-[#ccc] lg:border-b-2 ">
              <div className="flex  2xl:gap-3 lg:gap-2 text-lg leading-7 pr-1 mr-2  pb-3 cursor-pointer custom-border-b">
                <i class="fa-solid fa-bus text-base"></i>
                <span className="">Bus</span>
              </div>
              <div className=" 2xl:gap-3 lg:gap-2 text-lg leading-7 pr-1 mr-2 opacity-40 cursor-pointer hidden">
                <i class="fa-solid fa-cart-flatbed text-base"></i>
                <span className="">Transport</span>
              </div>
              <div className="hidden  2xl:gap-3 lg:gap-2 text-lg leading-7 pr-1 mr-2 opacity-40 cursor-pointer">
                <i class="fa-solid fa-hotel text-base"></i>
                <span className="">Hotel</span>
              </div>
            </div>
            <div
              ref={nodeRefQuantity}
              onClick={handleOpenModalQuantity}
              className="flex hidden gap-3 text-base items-center mb-4 2xl:mt-0 lg:mt-4 relative cursor-pointer"
            >
              <span className="w-fit block">1 Passenger</span>
              <i class="fa-solid fa-angle-down opacity-60"></i>
              {showQuantity && <PickQuantityTicket coords={coords} />}
            </div>
          </div>
          {show1 && (
            <PickModal
              type="start"
              setLocation={setStartLocation}
              handleClose={() => {
                setShow1(false);
              }}
              coords={coords}
            />
          )}
          {show2 && (
            <PickModal
              type="end"
              setLocation={setEndLocation}
              handleClose={() => setShow2(false)}
              coords={coords}
            />
          )}
          <div className="search-component content-between ">
            <div className="form-input  flex text-base 2xl:gap-2 lg:gap-4 2xl:flex-row lg:flex-col lg:-mt-10">
              <div
                ref={nodeRef1}
                onClick={handleOpenModal1}
                className="pl-8  min-w-[240px] pr-16 py-2   dark:bg-[#575757] dark:text-white rounded-lg bg-gray-100 flex flex-col relative cursor-pointer"
              >
                <span className="opacity-80">Điểm đi</span>
                <input
                  type="text"
                  className="py-1 mt-0 px-0 rounded-md bg-transparent  w-full  outline-none"
                  value={startLocation}
                  placeholder="Chọn điểm đi"
                  onChange={(e) => setStartLocation(e.target.value)}
                />
                <span className="opacity-40 hidden"></span>
                {err.start && <ErrorNotify> Vui Lòng chọn điểm đi</ErrorNotify>}
              </div>
              <div
                ref={nodeRef2}
                onClick={handleOpenModal2}
                className="pl-8  min-w-[240px] pr-16 py-2 dark:bg-[#575757] dark:text-white rounded-lg bg-gray-50 flex flex-col relative cursor-pointer"
              >
                <span className="opacity-80">Điểm đến</span>
                {/* <span className="opacity-40">
                  {endLocation || "Where do you go?"}
                </span> */}
                <input
                  type="text"
                  className="py-1 mt-0 px-0 rounded-md bg-transparent  w-full  outline-none"
                  value={endLocation}
                  placeholder="Chọn điểm đến"
                  onChange={(e) => setEndLocation(e.target.value)}
                />
                {err.end && <ErrorNotify> Vui Lòng chọn điểm đến</ErrorNotify>}
              </div>
              <div className="pl-6  pr-16 py-2 dark:bg-[#575757] dark:text-white rounded-lg bg-gray-50 flex flex-col relative cursor-pointer">
                <span className="opacity-80">Thời gian</span>
                <DatePicker
                  onChange={handleChangeDate}
                  value={dateStart ? moment(dateStart) : moment("2022-06-13")}
                  placeholder="Chọn"
                  onClick={handleResetErr}
                  className="w-full"
                ></DatePicker>
                {err.date && (
                  <ErrorNotify> Vui lòng chọn thời gian</ErrorNotify>
                )}
              </div>

              <div
                onClick={handleSearch}
                className="min-w-[160px] hover:text-white hover:bg-blue-400 cursor-pointer text-white btn-search bg-blue-500 2xl:ml-6 lg:ml-0 rounded-lg text-center grid content-center 2xl:max-w-[100px] lg:max-w-full min-h-[40px] lg:w-full 2xl:mt-0 lg:mt-6 lg:py-3"
              >
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const ErrorNotify = ({ children }) => {
  return (
    <div className="absolute -bottom-10 left-0 right-0 text-red-400 flex items-center gap-2 text-sm ml-2">
      <i class="fa-solid fa-triangle-exclamation "></i>
      {children}
    </div>
  );
};

export default MainPage;
