import GroupItemSeatType3 from "./GroupItemSeatType3";

const SeatPlaceType3 = () => {
  return (
    <div className="flex items-center lg:flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:gap-6 lg:justify-end lg:-mr-[100px] lg:mt-4 lg:-mb-10 items-start justify-between w-14   -mr-6 h-full  ml-4 mt-14 ">
        <div className="text-center  h-20 grid place-content-center">
          Tang 1
        </div>
        <div className="text-center  h-20 grid place-content-center">
          Tang 2
        </div>
      </div>
      <div className="grid  grid-flow-col lg:grid-flow-row  w-full h-full mx-1 mt-10 lg:mt-0 pr-4 gap-0 ">
        {new Array(7).fill(0).map((item, ind) => {
          return <GroupItemSeatType3 ind={ind * 4} />;
        })}
      </div>
    </div>
  );
};

export default SeatPlaceType3;
