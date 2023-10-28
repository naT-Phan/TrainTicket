import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelectorFixIndex, tripSelector } from "../../redux/tripSelector";
import { fetchTrip } from "../../slices/tripSlice";
import FilterSearch from "./filterSearch";
import ListItemTicket from "./ListItemTicket";
import SearchHeader from "./SearchHeader";

const TicketPage = () => {
  const dispatch = useDispatch();

  const { data, success } = useSelector(filterSelectorFixIndex);

  const { start, end } = useSelector(tripSelector);

  useEffect(() => {
    dispatch(fetchTrip(data));
  }, [data, dispatch]);

  return (
    <div className="lg:px-6 xl:px-10 px-[100px]">
      <SearchHeader />
      <div className="page-container mt-4">
        <div className="flex lg:flex-col  gap-10">
          {/* <FilterSearch /> */}
          <ListItemTicket />
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
