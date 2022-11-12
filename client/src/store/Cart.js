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
    if (data && data.length > 0) {
      return data[0].cart;
    }
  } catch (err) {
    return err;
  }
});

export const CreateCart = createAsyncThunk("post/cart", async (productData) => {
  try {
    const {
      data: { data },
    } = await API.post(`/add`, productData);
    return data;
  } catch (err) {
    return err;
  }
});

export const DeleteCart = createAsyncThunk("delete/cart", async (id) => {
  try {
    await API.delete(`/delete/${id}`);
    return id;
  } catch (err) {
    return err;
  }
});

export const UpdateCart = createAsyncThunk("update/cart", async (cartData) => {
  try {
    const { data } = await API.patch(`/update/${cartData.id}`, cartData);
    return cartData;
  } catch (err) {
    return null;
  }
});

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
    builder.addCase(DeleteCart.fulfilled, (state, { payload }) => {
      const filtered = state.carts.filter((cart) =>
        cart.id !== payload ? cart : ""
      );
      state.carts = filtered;
      return state;
    });
    builder.addCase(UpdateCart.fulfilled, (state, { payload }) => {
      if (!payload) return;
      const mapped = state.carts.map((item) =>
        item.id === payload?.id
          ? { ...item, qty: payload?.qty, total: payload?.total }
          : item
      );

      state.carts = mapped;
      return state;
    });
  },
});

export default CartSlice.reducer;
