import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/utils";

const initState = {
  status: "idle",
  msg: "",
  trip: [],
};

export const fetchTrip = createAsyncThunk(
  "trip/fetch",
  async (data, thunkAPI) => {
    try {
      const url = `${apiUrl}/trip/fetch`;
      console.log(data);
      const response = await axios.post(url, data);
      console.log("hongtest1", response);
      return response.data;
    } catch (error) {
      const msg = error.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const tripSlice = createSlice({
  name: "trip",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrip.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrip.fulfilled, (state, action) => {
        state.status = "idle";
        state.trip = action.payload;
      });
  },
});

export default tripSlice.reducer;
