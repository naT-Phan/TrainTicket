import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";
import { apiUrl } from "../utils/utils";

const initState = {
  isLoading: false,
  isErr: false,
  msg: "",
  ticketAvailables: [],
  ticketUseds: [],
  ticketCancels: [],
};

export const fetchAllUserTicket = createAsyncThunk(
  "userTicket/fetchAll",
  async (payload, thunkAPI) => {
    try {
      const url = `${apiUrl}/user/fetchUserTicket`;
      const { data } = await axios.post(url, payload);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userTicketSlice = createSlice({
  name: "userTicket",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUserTicket.pending, (state) => {
        state.isLoading = true;
        state.isErr = false;
        state.msg = "";
      })
      .addCase(fetchAllUserTicket.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isErr = false;
        if (payload.success) {
          if (payload.hadTrip) {
            state.ticketAvailables = payload.data.ticketAvailables || [];
            state.ticketCancels = payload.data.ticketCancels || [];
            state.ticketUseds = payload.data.ticketUseds || [];
          } else {
            state.ticketAvailables = [];
            state.ticketUseds = [];
            state.ticketCancels = [];
          }
        }
      })
      .addCase(fetchAllUserTicket.rejected, (state, action) => {
        state.isLoading = false;
        state.isErr = true;
        state.msg = action.payload;
      });
  },
});

export default userTicketSlice.reducer;
