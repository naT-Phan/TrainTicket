import { createSelector } from "@reduxjs/toolkit";
import { citySelector } from "./citySelector";

export const filterTicketSelector = (state) => state.filter;
export const filterTicketWithIndex = createSelector(
  filterTicketSelector,
  citySelector,
  (filter, city) => {
    return {
      start: city.city.find((item) => item.name === filter.start).indexCity,
      end: city.city.find((item) => item.name === filter.end).indexCity,
    };
  }
);
