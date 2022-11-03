import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
});

export default AuthSlice.reducer;
