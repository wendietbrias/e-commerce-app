import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { OpenAlert, CloseAlert } from "../store/Alert";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  loading: false,
};

export const SignInHandler = createAsyncThunk(
  `login/post`,
  async ({ authForm, dispatch, remember }) => {
    dispatch(
      OpenAlert({
        open: true,
        variant: "bg-blue-100",
        textVariant: "text-blue-500",
        message: "Mengecek...",
      })
    );
    try {
      const { data } = await axios.post(
        `http://127.0.0.1:8000/api/auth/login`,
        authForm
      );
      const { token } = data;
      if (token) {
        if (typeof remember === "boolean" && remember) {
          sessionStorage.setItem("remember", JSON.stringify(authForm));
        }
        window.location.href = "/";
      }
      return token;
    } catch (err) {
      const {
        response: { data },
      } = err;
      dispatch(
        OpenAlert({
          open: true,
          variant: "bg-red-100",
          textVariant: "text-red-500",
          message: data.message,
        })
      );

      return null;
    }
  }
);

export const SignUpHandler = createAsyncThunk(
  "register/post",
  async ({ authForm, dispatch }) => {
    dispatch(
      OpenAlert({
        open: true,
        variant: "bg-blue-100",
        textVariant: "text-blue-500",
        message: "Mengecek...",
      })
    );
    try {
      const { data } = await axios.post(
        `http://127.0.0.1:8000/api/auth/register`,
        authForm
      );
      if (data) {
        window.location.href = "/";
      }
    } catch (err) {
      const {
        response: { data },
      } = err;
      dispatch(
        OpenAlert({
          open: true,
          variant: "bg-red-100",
          textVariant: "text-red-500",
          message: data,
        })
      );
      return data;
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    GoogleLoginHandler(state, { payload }) {
      if (typeof payload === "string") {
        state.user = payload;
        sessionStorage.setItem("user", JSON.stringify(state.user));
        window.location.href = "/";
        return state;
      }
    },
    LogoutHandler(state, { payload }) {
      state.user = null;
      sessionStorage.setItem("user", JSON.stringify(state.user));
      payload.setOpenUserModal(false);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SignInHandler.pending, (state, { payload }) => {
      state.loading = true;
      return state;
    });
    builder.addCase(SignInHandler.fulfilled, (state, { payload }) => {
      state.user = payload ? payload : null;
      sessionStorage.setItem("user", JSON.stringify(state.user));
      return state;
    });
    builder.addCase(SignInHandler.rejected, (state, { payload }) => {
      state.user = null;
      sessionStorage.setItem("user", JSON.stringify(state.user));
      return state;
    });
  },
});

export const { LogoutHandler, GoogleLoginHandler } = AuthSlice.actions;
export default AuthSlice.reducer;
