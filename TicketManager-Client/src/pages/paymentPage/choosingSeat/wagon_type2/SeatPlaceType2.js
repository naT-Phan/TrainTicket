import GroupItemSeatType2 from "./GroupItemSeatType2.js";

const SeatPlaceType2 = () => {
  return (
    <div className="flex items-center lg:flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:gap-6 lg:justify-end lg:-mr-[160px]  lg:mt-8 lg:-mb-20  items-start justify-between w-14  -mr-6 h-full  ml-4 mt-14 ">
        <div className="text-center  h-20 grid place-content-center">
          Tang 3
        </div>
        <div className="text-center  h-20 grid place-content-center">
          Tang 2
        </div>
        <div className="text-center  h-20 grid place-content-center">
          Tang 1
        </div>
      </div>
      <div className="grid  lg:grid-flow-row grid-flow-col  w-full h-full mx-1 mt-10 pr-4 gap-0 ">
        {new Array(7).fill(0).map((item, ind) => {
          return <GroupItemSeatType2 ind={ind * 6} />;
        })}
      </div>
    </div>
  );
};
export default SeatPlaceType2;
