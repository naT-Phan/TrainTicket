import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/utils";

const routeSlice = createSlice({
  name: "route",
  initialState: { status: "idle", route: [] },
  reducers: {
    addRoute: (state, action) => {
      state.status = "loading";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRoute.fulfilled, (state, action) => {
      console.log(action);
      state.route = action.payload;
    });
  },
});
export const fetchRoute = createAsyncThunk("route/fetchRoute", async () => {
  const url = `${apiUrl}/route`;
  const { data } = await axios.get(url);

  return data;
});

export default routeSlice;
