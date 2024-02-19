import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface IPDetailState {
  isLoading: boolean;
  ipDetail: {
    ipAddress: string;
    location: string;
    latitude: number;
    longitude: number;
    ispProvider: string;
    timeOffset: string;
  };
}

const initialState: IPDetailState = {
  isLoading: false,
  ipDetail: {
    ipAddress: "",
    location: "",
    latitude: 0,
    longitude: 0,
    ispProvider: "",
    timeOffset: "",
  },
};

export const fetchIPData = createAsyncThunk(
  "ip-detail/fetchIPData", //take note of "ip-detail/fetchIPData" where ip-detail is the slice name and fetchIPData is the action name
  async (ipAddress: string) => {
    console.log(ipAddress);
    return axios
      .get(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=de0fb72673f946cf92101236820fb553&ip_address=${ipAddress}`,
      )
      .then((response) => response.data);
  },
);

export const IPDetailSlice = createSlice({
  name: "ip-detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIPData.pending, (state) => {
        //notice "fetchIPData", this was the action name used in createAsyncThunk "ip-detail/fetchIPData"
        state.isLoading = true;
      })
      .addCase(fetchIPData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ipDetail.ipAddress = action.payload.ip_address;
        state.ipDetail.location = `${action.payload.city}, ${action.payload.country}`;
        state.ipDetail.latitude = action.payload.latitude;
        state.ipDetail.longitude = action.payload.longitude;
        state.ipDetail.ispProvider = action.payload.connection.isp_name;
        state.ipDetail.timeOffset = action.payload.timezone.gmt_offset;
      })
      .addCase(fetchIPData.rejected, () => {
        alert(
          "Monthly API request for Api GEOLOCATION limit reached, Please try again next month.",
        );
      });
  },
});

export const selectIPDetail = (state: RootState) => state.ipDetail; //state.ipDetail is from the store.ts

export const selectPlanReducer = IPDetailSlice.reducer;
