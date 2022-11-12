import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(sessionStorage.getItem("user"));

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/product",
});

API.interceptors.request.use((req) => {
  if (user) {
    req.headers.Authorization = `bearer ${user}`;
  }

  return req;
});

const initialState = {
  products: [],
  productsSeller: [],
  loading: false,
};

export const GetSellerProduct = createAsyncThunk(
  "getseller/products",
  async (id_seller) => {
    try {
      const { data } = await API.get(
        `http://127.0.0.1:8000/api/product/seller/${id_seller}`
      );
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const GetAllProduct = createAsyncThunk("get/products", async () => {
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/product/all`);
    return data;
  } catch (err) {
    return null;
  }
});

export const CreateProduct = createAsyncThunk(
  "post/create_product",
  async (productForm) => {
    try {
      const { data } = await API.post(
        "http://127.0.0.1:8000/api/product/create",
        productForm
      );

      return data;
    } catch (err) {
      return err;
    }
  }
);

export const DeleteProduct = createAsyncThunk(
  "delete/delete_product",
  async (id) => {
    try {
      const { data } = await API.delete(`/delete/${id}`);
      return id;
    } catch (err) {
      return err;
    }
  }
);

export const UpdateProduct = createAsyncThunk(
  "update/update_product",
  async (productForm) => {
    try {
      const { data } = await API.put(`/update/${productForm?.id}`, productForm);

      if (data) {
        window.location.href = "/sellerprofile";
      }

      return data;
    } catch (err) {
      return err;
    }
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProductHandler() {},
    SearchHandler(state, { payload }) {
      if (!payload) return;
      state.products = payload;
      return state;
    },
    loadingHandler() {},
  },
  extraReducers: (builder) => {
    builder.addCase(GetAllProduct.pending, (state, payload) => {
      state.loading = true;
      return state;
    });
    builder.addCase(GetSellerProduct.fulfilled, (state, { payload }) => {
      state.productsSeller = payload;
      return state;
    });
    builder.addCase(GetAllProduct.fulfilled, (state, { payload }) => {
      if (!payload) return;
      state.loading = false;
      state.products = payload;
      return state;
    });
    builder.addCase(CreateProduct.fulfilled, (state, { payload }) => {
      state.productsSeller = [...state.productsSeller, payload?.data];
      if (payload?.data) {
        return (window.location.href = "/sellerprofile");
      }
      return state;
    });
    builder.addCase(DeleteProduct.fulfilled, (state, { payload }) => {
      const filtered = state.products.filter((product) =>
        product.id !== payload ? product : ""
      );
      state.products = filtered;

      return state;
    });
    builder.addCase(UpdateProduct.fulfilled, (state, { payload }) => {
      const mapped = state.productsSeller.map((item) =>
        item.id === payload.id ? payload?.data : item
      );
      state.productsSeller = mapped;
      return state;
    });
  },
});

export const { createProductHandler, SearchHandler } = ProductSlice.actions;
export default ProductSlice.reducer;
