import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import bookingSlice from "./slice/bookingSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    booking: bookingSlice,
  },
});
