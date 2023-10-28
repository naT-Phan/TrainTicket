import ItemSeatEven from "./ItemSeatEven";
import ItemSeatOdd from "./ItemSeatOdd";

const SeatPlace = () => {
  return (
    <div className="flex lg:flex-col justify-between h-full items-stretch">
      <div className="px-4 mt-10 mb-10 flex-1 select-none ">
        <div className="grid grid-rows-2 grid-flow-col lg:grid-cols-4 lg:w-fit lg:gap-10 ssm:gap-4 lg:mx-auto lg:grid-flow-row gap-y-8  justify-between">
          {new Array(8)
            .fill(0)
            .map((item, ind) =>
              ind % 2 === 0 ? (
                <ItemSeatOdd index={ind * 4} />
              ) : (
                <ItemSeatEven index={ind * 4} />
              )
            )}
        </div>
      </div>
      <div className="w-2 lg:w-full lg:h-2 lg:px-8 lg:my-1 mx-1 my-14 rounded-sm overflow-hidden bg-white flex flex-col items-center justify-between">
        <div className="w-full h-20 bg-gray-200"></div>{" "}
        <div className="w-full h-20 bg-gray-200"></div>
      </div>
      <div className="px-4 mt-10 mb-10 flex-1 select-none ">
        <div className="grid grid-rows-2 grid-flow-col lg:grid-cols-4 lg:w-fit lg:gap-10 ssm:gap-4 lg:mx-auto lg:grid-flow-row gap-y-8  justify-between">
          {new Array(8)
            .fill(0)
            .map((item, ind) =>
              ind % 2 === 0 ? (
                <ItemSeatOdd index={32 + ind * 4} />
              ) : (
                <ItemSeatEven index={32 + ind * 4} />
              )
            )}
        </div>
      </div>
    </div>
  );
};
export default SeatPlace;
