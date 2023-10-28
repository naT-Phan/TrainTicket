import React, { useEffect, useState } from "react";

import { checkDark } from "../../utils/darkMode";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchDataDetailTrip,
  setInitWagon,
} from "../../slices/seatBookingSlice";
import ChoosingTicket from "./childPage/ChoosingTicket";
import Payment from "./childPage/Payment";
import InputInfo from "./childPage/InputInfo";
import { useNavigate, useParams } from "react-router-dom";
import { filterTicketWithIndex } from "../../redux/filterTicketSelector";
import {
  filterSelector,
  filterSelectorFixIndex,
} from "../../redux/tripSelector";

const PaymentPage = () => {
  const isDark = checkDark();

  const navigate = useNavigate();

  const { start, end } = useSelector(filterSelector);
  useEffect(() => {
    if (!start) {
      navigate("/");
    }
  }, []);

  const [process, SetProcess] = useState(0);

  const dispatch = useDispatch();
  const { data: dataFilter, success } = useSelector(filterSelectorFixIndex);
  const { id } = useParams();
  useEffect(() => {
    dispatch(setInitWagon(9));

    dispatch(
      fetchDataDetailTrip({
        idTrip: id,
        startIndex: dataFilter.startIndex,
        endIndex: dataFilter.endIndex,
      })
    );
  }, []);

  if (start)
    return (
      <div className="dark:!bg-dark_primary_bg select-none">
        <ComponentProcess process={process} SetProcess={SetProcess} />
      </div>
    );
};
const ComponentProcess = ({ process, SetProcess }) => {
  if (process === 0) {
    return <ChoosingTicket SetProcess={SetProcess} />;
  }
  if (process === 2) {
    return <Payment SetProcess={SetProcess} />;
  }

  if (process === 1) {
    return <InputInfo SetProcess={SetProcess} />;
  }
};

export default PaymentPage;
