import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {},
});

export default AuthSlice.reducer;
