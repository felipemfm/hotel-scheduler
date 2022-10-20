import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotels: [],
  hotel: null,
  rooms: [],
  room: null,
  status: "idle",
};

export const fetchHotelData = createAsyncThunk(
  "booking/fetchHotelData",
  async () => {
    const response = await axios.get("http://localhost:8000/schedule/hotels/");
    return response.data;
  }
);

export const fetchRoomData = createAsyncThunk(
  "booking/fetchRoomData",
  async (hotelId) => {
    const response = await axios.get(
      `http://localhost:8000/schedule/hotels/${hotelId}/rooms`
    );
    return response.data;
  }
);

export const bookingSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setHotelId: (state, action) => {
      state.hotel = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotelData.fulfilled, (state, action) => {
        state.status = "idle";
        state.hotels = action.payload;
      })
      .addCase(fetchRoomData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRoomData.fulfilled, (state, action) => {
        state.status = "idle";
        state.rooms = action.payload;
      });
  },
});

export const { setHotelId } = bookingSlice.actions;

export default bookingSlice.reducer;
