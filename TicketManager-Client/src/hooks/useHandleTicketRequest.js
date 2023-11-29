import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../redux/tripSelector";
import { updateFiter } from "../slices/filterTicketSlice";

const useHandleTicketRequest = (type = 0) => {
  const { start, end, date } = useSelector(filterSelector);
  const [startLocation, setStartLocation] = useState(start);
  const [endLocation, setEndLocation] = useState(end);
  const [dateStart, setDateStart] = useState(date);

  const [input, setInput] = useState();

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const [fixbug, setFixBug] = useState(0);

  const handleChangeDate = (date, dateString) => {
    // if (type === 1) {
    //   alert("hong");
    //   if (fixbug === 0) {
    //     setFixBug((prev) => prev + 1);
    //     return;
    //   }
    // }
    // setDateStart(e._d.toISOString().substring(0, 10));
    setDateStart(dateString);
  };

  const dispatch = useDispatch();

  const handleSaveFilter = () => {};

  useEffect(() => {
    dispatch(
      updateFiter({
        start: startLocation,
        input: input,
        end: endLocation,
        date: dateStart,
        filter: {},
      })
    );
  }, [startLocation, input, endLocation, dateStart, dispatch]);

  return {
    startLocation,
    endLocation,
    dateStart,
    setStartLocation,
    setEndLocation,
    setDateStart,
    handleChangeDate,
    handleOnChange,
    input,
    setInput,
    handleSaveFilter,
  };
};
export default useHandleTicketRequest;
