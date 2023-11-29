import ItemSeatType2 from "./ItemSeatType2";

const GroupItemSeatType3 = ({ ind }) => {
  return (
    <div className="mt-6">
      <div className="flex items-stretch lg:items-center lg:flex-col  h-full gap-2 mx-2  justify-around">
        <div className="relative lg:flex lg:gap-4 lg:items-center lg:mx-auto">
          <div className="absolute lg:w-fit lg:px-4 lg:relative w-full text-center lg:top-0 -top-10  opacity-60">
            Khoang {ind / 4 + 1}
          </div>
          <div className="grid grid-cols-2 grid-rows-2  grid-flow-row gap-4 lg:hidden">
            <ItemSeatType2 ind={ind + 1} />
            <ItemSeatType2 ind={ind + 3} />
            <ItemSeatType2 ind={ind + 2} />
            <ItemSeatType2 ind={ind + 4} />
          </div>
          <div className=" grid-cols-2 grid-rows-2  grid-flow-row gap-4 hidden lg:grid">
            <ItemSeatType2 ind={ind + 1} />
            <ItemSeatType2 ind={ind + 2} />
            <ItemSeatType2 ind={ind + 3} />
            <ItemSeatType2 ind={ind + 4} />
          </div>
        </div>
        <div className="w-1 bg-gray-200 rounded-md ssm:w-[160px] lg:w-[200px] lg:h-[2px] lg:mt-2 lg:!mx-auto"></div>
      </div>
    </div>
  );
};

export default GroupItemSeatType3;
