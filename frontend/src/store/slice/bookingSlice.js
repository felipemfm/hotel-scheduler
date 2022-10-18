import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotel: [],
  status: "idle",
};

export const fetchHotelData = createAsyncThunk(
  "booking/fetchHotelData",
  async (token) => {
    const response = await axios.get(
      "http://localhost:8000/schedule/hotels/",
      token
        ? {
            headers: {
              Authorization: `JWT ${token}`,
            },
          }
        : ""
    );
    return response.data;
  }
);

export const bookingSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotelData.fulfilled, (state, action) => {
        state.status = "idle";
        state.hotel = action.payload;
      });
  },
});

export default bookingSlice.reducer;
