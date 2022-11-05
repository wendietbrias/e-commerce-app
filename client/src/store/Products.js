import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  page: 1,
};

const GetAllProduct = createAsyncThunk("get/products", async () => {});

const CreateProduct = createAsyncThunk(
  "post/create_product",
  async (productForm) => {}
);

const DeleteProduct = createAsyncThunk(
  "delete/delete_product",
  async (id) => {}
);

const UpdateProduct = createAsyncThunk(
  "update/update_product",
  async ({ productForm, id }) => {}
);

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default ProductSlice.reducer;
