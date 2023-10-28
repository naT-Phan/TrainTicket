import { createSelector } from "@reduxjs/toolkit";
import { UnsignedString } from "../utils/handleValue";
import { filterSelector } from "./tripSelector";

export const citySelector = (state) => state.city;
export const cityFilterSelectorStart = createSelector(
  citySelector,
  filterSelector,
  (city, filter) => {
    return city.city.filter((item) => {
      console.log(typeof item.name.toUpperCase());
      if (!filter.start) return true;
      if (filter.start && filter.start?.includes("Mọ")) return true;
      if (UnsignedString(item.name).includes(UnsignedString(filter.start)))
        return true;
    });
  }
);

export const cityFilterSelectorEnd = createSelector(
  citySelector,
  filterSelector,
  (city, filter) => {
    return city.city.filter((item) => {
      console.log(typeof item.name.toUpperCase());
      if (filter.end && filter.end?.includes("Mọ")) return true;
      if (!filter.end) return true;
      if (UnsignedString(item.name).includes(UnsignedString(filter.end)))
        return true;
    });
  }
);
