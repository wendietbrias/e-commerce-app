import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(sessionStorage.getItem("user"));

const initialState = {
  carts: [],
};

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/cart",
});

API.interceptors.request.use((req) => {
  if (user) {
    req.headers.Authorization = `bearer ${user}`;
  }

  return req;
});

export const GetUserCart = createAsyncThunk("get/cart", async (id) => {
  try {
    const { data } = await API.get(`/list/${id}`);
    console.log(data);
    if (data) {
      return data;
    }
  } catch (err) {
    return err;
  }
});

export const CreateCart = createAsyncThunk("post/cart", async (productData) => {
  try {
    const { data } = await API.post(`/add`, productData);
    return data;
  } catch (err) {
    return err;
  }
});

export const DeleteCart = createAsyncThunk("delete/cart", async () => {});

export const UpdateCart = createAsyncThunk("update/cart", async () => {});

const CartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetUserCart.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.carts = payload;
      return state;
    });
    builder.addCase(CreateCart.fulfilled, (state, { payload }) => {
      state.carts = [...state.carts, payload];
      return state;
    });
  },
});

export default CartSlice.reducer;
