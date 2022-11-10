import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { OpenAlert } from "../store/Alert";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/auth",
});

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  loading: false,
};

export const SellerHandler = createAsyncThunk(
  "seller/post",
  async (sellerData) => {
    try {
      const { data } = await API.post("/seller", sellerData);
      if (data) {
        window.location.href = "/sellerprofile";
      }
      return data;
    } catch (err) {
      return err;
    }
  }
);

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
      const { data } = await API.post(`/login`, authForm);

      const { access_token: token } = data;
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
      const { data } = await API.post(`/register`, authForm);
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
    LogoutHandler(state) {
      state.user = null;
      sessionStorage.setItem("user", JSON.stringify(state.user));
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
    builder.addCase(SellerHandler.fulfilled, (state, { payload }) => {
      state.user = payload ? payload : null;
      sessionStorage.setItem("user", JSON.stringify(state.user));
      return state;
    });
  },
});

export const { LogoutHandler, GoogleLoginHandler } = AuthSlice.actions;
export default AuthSlice.reducer;
