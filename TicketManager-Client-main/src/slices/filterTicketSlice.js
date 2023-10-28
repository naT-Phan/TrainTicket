import { createSlice } from "@reduxjs/toolkit";

const initState = {
  start: "",
  end: "",
  input: "",
  date: "",
  filter: {},
};

const filterTicketSlice = createSlice({
  name: "filter",
  initialState: initState,
  reducers: {
    updateFiter: (state, action) => {
      state.start = action.payload.start;
      state.end = action.payload.end;
      if (action.payload.date) state.date = action.payload.date;
      state.input = action.payload.input;
    },
  },
});
export const { updateFiter } = filterTicketSlice.actions;

export default filterTicketSlice.reducer;
