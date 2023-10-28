import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../utils/utils";

const initState = {
  status: "idle",
  currentWagon: 0,
  wagon: [
    {
      type: "",
      seat: [],
    },
  ],
  wagonData: [],
  wagonBooked: [],
  wagonBooking: {
    user: {
      name: "",
      identify: "",
      sdt: "",
      email: "",
      idUser: "",
    },
    listUserTicket: [],
    payment: "",
    isPay: "",
    continueStatus: "",
    enableContinue: false,
  },
  successUserbooking: {},
};

export const createInvoice = createAsyncThunk(
  "seatBooking/createInvoice",
  async (reqdata, thunkAPI) => {
    try {
      const urlInvoice = `${apiUrl}/invoice/create`;

      const { data } = await axios.post(urlInvoice, reqdata.data);
      let userBooking = {};

      if (data) {
        const seatUrl = `${apiUrl}/seat/create`;
        const cusTicketUrl = `${apiUrl}/cusTicket/create`;
        const userBookingUrl = `${apiUrl}/userBooking/create`;
        const userBookingData = {
          idType:
            reqdata.typeHumanBooking === "user"
              ? reqdata.userID
              : "5ting_guest",
          type: reqdata.typeHumanBooking,
          idInvoice: data._id,
          fullname: reqdata.user.name,
          phoneNumber: Math.floor(reqdata.user.sdt),
          email: reqdata.user.email,
          identifyNumber: reqdata.user.identify,
          startLocation: reqdata.startLocation,
          endLocation: reqdata.endLocation,
          date: reqdata.date,
        };
        const { data: dataUserBooking } = await axios.post(
          userBookingUrl,
          userBookingData
        );
        userBooking = dataUserBooking;
        for (let i in reqdata.list) {
          const userTicket = reqdata.list[i];
          const userTicketData = {
            idWagonTicket: userTicket.idWagon,
            numOfSeat: userTicket.numOfSeat,
            startIndex: reqdata.tripLocation.startIndex,
            endIndex: reqdata.tripLocation.endIndex,
          };
          console.log(userTicketData);
          const { data: seatDataReturn } = await axios.post(
            seatUrl,
            userTicketData
          );

          const userInfoTicket = {
            idSeat: seatDataReturn._id,
            idInvoice: data._id,
            cusName: userTicket.name,
            cusID: userTicket.identifyOrAge,
            cusAge: "0",
            cusPriceTicket: reqdata.listMoney[i],
            cusTypeTicket: userTicket.typeTicket,
          };

          await axios.post(cusTicketUrl, userInfoTicket);
        }
      }
      return userBooking.userBooking;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const fetchDataDetailTrip = createAsyncThunk(
  "seatBooking/fetchData",
  async (payload, thunkAPI) => {
    try {
      const url = `${apiUrl}/wagonTicket/getAllByidTrip`;

      const { data } = await axios.post(url, payload);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const seatBookingSlice = createSlice({
  name: "seatBooking",
  initialState: initState,
  reducers: {
    addSeat: (state, action) => {
      if (state.wagonBooked[state.currentWagon].includes(action.payload)) {
        return;
      }
      if (state.wagon[state.currentWagon].seat.includes(action.payload)) {
        state.wagon[state.currentWagon].seat = state.wagon[
          state.currentWagon
        ].seat.filter((item) => item !== action.payload);

        state.wagonBooking.listUserTicket =
          state.wagonBooking.listUserTicket.filter((itemticket) => {
            if (
              itemticket.numOfWagon === state.currentWagon &&
              itemticket.numOfSeat === action.payload
            ) {
              return false;
            } else return true;
          });

        return;
      } else {
        state.wagon[state.currentWagon].seat = [
          ...state.wagon[state.currentWagon].seat,
          action.payload,
        ];

        state.wagonBooking.listUserTicket.push({
          idWagon: state.wagonData[state.currentWagon]._id,
          price: state.wagonData[state.currentWagon].price,
          numOfSeat: action.payload,
          numOfWagon: state.currentWagon,
          name: "",
          typeWagon: state.wagonData[state.currentWagon].wagonType,
          identifyOrAge: "",
          typeTicket: "",
        });
      }
    },
    updateInfo: (state, action) => {
      state.wagonBooking.listUserTicket[action.payload.index] = {
        ...state.wagonBooking.listUserTicket[action.payload.index],
        name: action.payload.name,
        identifyOrAge: action.payload.info,
        typeTicket: action.payload.typeTicket,
      };
    },
    updateInfoUserBooking: (state, action) => {
      state.wagonBooking.user.name = action.payload.name;
      state.wagonBooking.user.identify = action.payload.identify;
      state.wagonBooking.user.sdt = action.payload.phone;
      state.wagonBooking.user.email = action.payload.email;
      state.wagonBooking.user.idUser = action.payload.idUser;
    },
    updateMethod: (state, action) => {
      state.wagonBooking.payment = action.payload.payment;
      state.wagonBooking.isPay = action.payload.isPay;
    },
    removeSeat: (state, action) => {
      state.wagon[action.payload.wagon].seat = state.wagon[
        action.payload.wagon
      ].seat.filter((item) => item !== action.payload.numOfSeat);
      state.wagonBooking.listUserTicket =
        state.wagonBooking.listUserTicket.filter(
          (item) =>
            item.numOfWagon === action.payload.wagon &&
            item.numOfSeat !== action.payload.numOfSeat
        );
    },
    checkSeat: (state, action) => {
      if (state.wagon[state.currentWagon].seat?.includes(action.payload))
        return true;
      return false;
    },
    setCurrentWagon: (state, action) => {
      state.currentWagon = action.payload;
    },
    setInitWagon: (state, action) => {
      state.wagonBooking.listUserTicket = [];
      state.wagonBooking.continueStatus = "";
      state.wagonBooking.payment = "";
      state.wagonBooking.isPay = "";
    },
    goPayment: (state, action) => {
      if (state.wagonBooking.continueStatus === "errorValue") {
        return;
      }
      const userWagon = state.wagonBooking.user;
      if (
        !userWagon.name ||
        !userWagon.email ||
        !userWagon.sdt ||
        !userWagon.identify
      ) {
        state.wagonBooking.continueStatus = "missingValue";
        return;
      }
      for (let i of state.wagonBooking.listUserTicket) {
        if (!i.name || !i.identifyOrAge) {
          state.wagonBooking.continueStatus = "missingValue";
          return;
        }
      }
      state.wagonBooking.continueStatus = "ok";
    },
    setMissingContinue: (state, action) => {
      state.wagonBooking.continueStatus = "missing";
    },
    resetContinueState: (state) => {
      state.wagonBooking.continueStatus = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchDataDetailTrip.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataDetailTrip.fulfilled, (state, action) => {
        state.wagonData = action.payload;
        state.status = "idle";
        state.wagon = [];

        const sortList = action.payload.sort(
          (a, b) => a.numOfWagon - b.numOfWagon
        );
        state.wagonBooked = [];
        sortList &&
          sortList.map((itemWagon) => {
            state.wagon.push({
              type: itemWagon.wagonType,
              seat: [],
            });
            state.wagonBooked.push([]);
            for (let i of itemWagon.filteredSeats) {
              state.wagonBooked[itemWagon.numOfWagon].push(i.numOfSeat);
            }
          });
      })
      .addCase(createInvoice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createInvoice.fulfilled, (state, action) => {
        state.status = "idle";
        state.successUserbooking = action.payload;
      })
      .addCase(createInvoice.rejected, (state, action) => {
        state.status = "idle";
        alert("gap loi", action.payload);
      });
  },
});

export const {
  addSeat,
  checkSeat,
  setCurrentWagon,
  setInitWagon,
  removeSeat,
  updateInfo,
  updateInfoUserBooking,
  updateMethod: updateMethodPayment,
  goPayment,
  resetContinueState,
  setMissingContinue,
} = seatBookingSlice.actions;
export default seatBookingSlice.reducer;
