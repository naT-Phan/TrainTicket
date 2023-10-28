import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/utils";

const citySlice = createSlice({
  name: "city",
  initialState: {
    status: "idle",
    city: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      state.city = action.payload;
    });
  },
});
export default citySlice.reducer;

export const fetchCity = createAsyncThunk(
  "route/fetchCities",
  async (thunkAPI) => {
    const url = `${apiUrl}/city`;

    try {
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      const msg = error.toString();
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
