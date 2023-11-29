import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/utils";

const user = JSON.parse(localStorage.getItem("ticket-user"));

const initState = {
  user: user ? user : null,
  isLoading: false,
  isErr: false,
  isSuccess: false,
  msg: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const url = `${apiUrl}/signup`;
      const response = await axios.post(url, userData);
      console.log("hongdata", userData);
      console.log("hongdata1", response);
      if (response.data) {
        localStorage.setItem("ticket-user", JSON.stringify(response.data));
      }

      return response.data || response.response;
    } catch (error) {
      console.log("error when register: ", error);
      const msg = error.response.data.error || error.response.data.message;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const url = `${apiUrl}/signin`;
      const response = await axios.post(url, userData);
      if (response.data) {
        localStorage.setItem("ticket-user", JSON.stringify(response.data));
      }

      return response.data;
    } catch (error) {
      console.log("fail", error);
      const msg = error.response.data.error || error.response.data.message;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (passwordData, thunkAPI) => {
    try {
      const url = `${apiUrl}/user/changepassword/${passwordData.id}`;
      const response = await axios.put(url, passwordData);
      return response.data || response.response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const updateUserInfo = createAsyncThunk(
  "user/update",
  async (userData, thunkAPI) => {
    try {
      const url = `${apiUrl}/user/${userData.id}`;
      const response = await axios.put(url, userData);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    reset: (state) => {
      state.isErr = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.msg = "";
    },
    logOut: (state) => {
      state.user = null;
      state.isErr = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.msg = "";
      localStorage.removeItem("ticket-user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload || null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isErr = true;
        state.msg = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isErr = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isErr = true;
        state.msg = action.payload;
      })
      .addCase(updateUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        const userItem = JSON.parse(localStorage.getItem("ticket-user"));
        localStorage.removeItem("ticket-user");
        localStorage.setItem(
          "ticket-user",
          JSON.stringify({
            ...userItem,
            user: action.payload.user,
          })
        );
        state.user.user = action.payload.user;
      })
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
        state.msg = "";
        state.isErr = false;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("hong1", action.payload);
        state.isErr = false;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.msg = action.payload.message;
        state.isErr = true;
      });
  },
});
export const { logOut, reset } = authSlice.actions;
export default authSlice.reducer;
