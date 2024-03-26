import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getUser = createAsyncThunk("users/add", async (user) => {
  const res = await axios.post(
    "https://staging.api.hr-portals.com/api/v1/Auth/login",
    user
  );
  return res.data;
});

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    userData: {},
    userToken: null,
    error: null,
    success: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.company = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      });
  },
});

// Selectors
export const selectUser = (state) => state.auth.userData;
export const selectLoadingState = (state) => state.auth.loading;
export const selectErrorState = (state) => state.auth.error;
export const accessToken = (state) => state.auth.accessToken;

export default AuthSlice.reducer;
