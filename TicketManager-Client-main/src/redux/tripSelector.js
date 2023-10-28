import { createSelector } from "@reduxjs/toolkit";

export const tripSelector = (state) => state.trip;
export const filterSelector = (state) => state.filter;
const citySelector = (state) => state.city;

const checkRightCity = (cities, city) => {
  for (let c of cities) {
    if (c.name === city) {
      return true;
    }
  }
  return false;
};

export const tripFilterSelector = createSelector(
  tripSelector,
  filterSelector,
  citySelector,
  (trip, filter, city) => {
    if (
      !checkRightCity(city.city, filter.start) ||
      !checkRightCity(city.city, filter.end)
    ) {
      return false;
    }
    return trip.trip.filter((trip) => {
      return true;
    });
  }
);
export const filterSelectorFixIndex = createSelector(
  filterSelector,
  citySelector,
  (filter, city) => {
    if (
      !checkRightCity(city.city, filter.start) ||
      !checkRightCity(city.city, filter.end)
    ) {
      return {
        success: false,
        data: [],
      };
    }
    let s = -1,
      e = -1;
    city.city.map((item) => {
      if (item.name === filter.start) s = item.indexCity;
      if (item.name === filter.end) e = item.indexCity;
    });
    return {
      data: { startIndex: s, endIndex: e, startDate: filter.date },
      success: true,
    };
  }
);
