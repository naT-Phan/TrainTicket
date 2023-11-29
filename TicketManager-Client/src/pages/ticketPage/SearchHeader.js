import { DatePicker, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useClickOutSide from "../../hooks/useClickOutSide";
import useHandleTicketRequest from "../../hooks/useHandleTicketRequest";
import { fetchCity } from "../../slices/citySlice";
import moment from "moment";
import "moment/locale/zh-cn";
import PickModal from "../homePage/PickModal";
import { filterSelectorFixIndex } from "../../redux/tripSelector";

const SearchHeader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCity());
  }, []);
  const { Option } = Select;

  const { show, setShow, nodeRef } = useClickOutSide(".modal");
  const {
    show: show1,
    setShow: setShow1,
    nodeRef: nodeRef1,
  } = useClickOutSide(".modal");

  const [coords, setCoords] = useState({});

  const handleOpenModal = (e) => {
    setShow(true);
    console.log("open");
    setCoords(nodeRef.current.getBoundingClientRect());
  };

  const handleOpenModal1 = (e) => {
    setShow1(true);
    console.log("open");
    setCoords(nodeRef1.current.getBoundingClientRect());
  };

  const handleOnChange = (e) => {
    setStartLocation(e.target.value);
  };
  const handleOnChange1 = (e) => {
    setEndLocation(e.target.value);
  };
  const {
    startLocation,
    endLocation,
    dateStart,
    setStartLocation,
    handleChangeDate,
    setEndLocation,
    setDateStart,
  } = useHandleTicketRequest(1);
  const { start, end, date } = useSelector((state) => state.filter);
  useEffect(() => {
    setStartLocation(start);
    setDateStart(date);
    setEndLocation(end);
  }, []);

  return (
    <div className="page-container w-full min-h-[90px] pt-2 bg-white rounded-lg pr-10 shadow-sm  pl-10 mt-4 dark:!bg-dark_primary_pnl dark:!text-white ">
      <div className="flex gap-4 flex-wrap pb-6 pt-2">
        <div className="flex flex-col  gap-1">
          <span className="font-sm opacity-80">From</span>
          <div className="relative px-4 py-2 bg-gray-50   dark:!bg-dark_input  rounded-lg">
            <input
              className="bg-transparent outline-none "
              type="text"
              value={startLocation}
              onClick={handleOpenModal}
              onChange={handleOnChange}
              ref={nodeRef}
            />
            {show && (
              <PickModal
                type="start"
                setLocation={setStartLocation}
                handleClose={() => setShow(false)}
                coords={coords}
              ></PickModal>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="font-sm opacity-80">To</span>
          <div className="px-4 py-2 bg-gray-50 dark:!bg-dark_input rounded-lg">
            <input
              className="bg-transparent outline-none "
              type="text"
              value={endLocation}
              ref={nodeRef1}
              onClick={handleOpenModal1}
              onChange={handleOnChange1}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 w-[200px]">
          <span className="font-sm opacity-80">Time</span>
          <div className="px-4 w-full py-[2px] bg-gray-50  dark:!bg-dark_input  rounded-lg">
            <DatePicker
              placeholder="Chọn"
              className="w-full"
              onChange={handleChangeDate}
              value={dateStart ? moment(dateStart) : moment("2022-06-13")}
            ></DatePicker>
          </div>
        </div>

        {/* <div className="flex flex-col gap-1">
          <span className="font-sm opacity-80">Khoang</span>
          <div className="selected-option px-4 py-1 dark:!text-white dark:!bg-dark_input  bg-gray-50 rounded-lg">
            <Select defaultValue="lucy" style={{ width: 120 }}>
              <Option value="jack">1 seat</Option>
              <Option value="lucy">2 seat</Option>
              <Option value="disabled">3 seat</Option>
              <Option value="Yiminghe">4 seat</Option>
            </Select>
          </div>
        </div> */}
        <div className="flex-1 flex justify-end hidden ">
          <div className=" btn px-10 py-2 rounded-lg bg-black mt-3 text-white inline-block h-fit">
            Search
          </div>
        </div>

        {show1 && (
          <PickModal
            type="end"
            setLocation={setEndLocation}
            handleClose={() => setShow1(false)}
            coords={coords}
          ></PickModal>
        )}
      </div>
    </div>
  );
};

export default SearchHeader;
