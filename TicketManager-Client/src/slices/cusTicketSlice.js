import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/utils";

const initState = {
  isLoading: false,
  msg: "",
  isErr: false,
  data: "",
};

export const cancelTicket = createAsyncThunk(
  "cusTicket/cancelTicet",
  async (payload, thunkAPI) => {
    try {
      const url = `${apiUrl}/custicket/cancelticket`;
      console.log("hongetsts", payload);
      const responseData = await axios.put(url, { id: payload });

      if (responseData.data.success) {
        return responseData.data;
      } else {
        return responseData.response;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cusTicketSlice = createSlice({
  name: "cusTicket",
  initialState: initState,
  extraReducers: (builder) => {
    builder.addCase(cancelTicket.pending, (state) => {
      state.isLoading = true;
      state.isErr = false;
      state.msg = "";
    });
    builder.addCase(cancelTicket.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(cancelTicket.rejected, (state, action) => {
      state.isErr = true;
      state.msg = action.payload;
    });
  },
});

export default cusTicketSlice.reducer;
