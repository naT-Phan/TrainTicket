import { Checkbox, Select } from "antd";
import React, { useEffect } from "react";
import { checkDark } from "../../utils/darkMode";

const FilterSearch = () => {
  const { Option } = Select;
  const isDark = checkDark();
  useEffect(() => {}, []);
  return (
    <div className="min-w-[280px] h-fit bg-white dark:!bg-dark_primary_pnl dark:!text-white pb-6 rounded-lg overflow-hidden">
      <div className="mb-1 bg-gray-200 bg-opacity-80 min-h-[30px] p-3">
        <div className="text-center text-lg text-black">Filter</div>
      </div>
      <div
        className={`filter flex flex-col gap-2 pl-10 mt-4 ${
          isDark ? "dark" : ""
        }`}
      >
        <div className="text-base mt-2">* Important Filter</div>
        <div className="flex flex-col items-start gap-3 mt-2 font-normal">
          <div>
            <Checkbox>Co ma giam gia</Checkbox>
          </div>
          <div>
            <Checkbox>Top Rating</Checkbox>
          </div>
        </div>

        <div className="text-base mt-4">* Gia</div>
        <div className="flex  items-start gap-3 mt-2">
          <div>
            <Checkbox>Cao</Checkbox>
          </div>
          <div>
            <Checkbox>Thap</Checkbox>
          </div>
        </div>

        <div className="text-base mt-4">Nha xe</div>
        <div className="w-fit selected-option px-4 py-1 bg-gray-100 rounded-lg">
          <Select defaultValue="Tau 1" style={{ width: 100 }}>
            <Option value="jack">Tau 1</Option>
            <Option value="jack">Tau 2</Option>
            <Option value="jack">Tau 3</Option>
            <Option value="jack">Tau 4</Option>
          </Select>
        </div>
      </div>

      <div className="mt-10 text-sm flex justify-center gap-1 items-center p-2 rounded-lg hover:bg-gray-100 w-fit mx-auto px-4 cursor-pointer ">
        More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default FilterSearch;
