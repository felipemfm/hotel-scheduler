import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: "",
  userObj: {
    username: "",
    id: null,
    email: "",
  },
  status: "idle",
};

export const createToken = createAsyncThunk(
  "user/createToken",
  async (credentials) => {
    const response = await axios.post(
      "http://localhost:8000/api/auth/jwt/create",
      credentials
    );
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createToken.fulfilled, (state, action) => {
        state.status = "idle";
        state.token = action.payload;
      });
  },
});

export default userSlice.reducer;
