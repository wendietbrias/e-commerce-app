import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  variant: "",
  textVariant: "",
};

const AlertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    OpenAlert(state, { type, payload }) {
      return {
        ...state,
        open: true,
        message: payload.message,
        variant: payload.variant,
        textVariant: payload.textVariant,
      };
    },
    CloseAlert(state) {
      return {
        ...state,
        open: false,
      };
    },
  },
});

export const { OpenAlert, CloseAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
