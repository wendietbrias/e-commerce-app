import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/favorite",
});

const initialState = {
  loading: false,
  favorites: [],
};

export const GetAllFavorites = createAsyncThunk(
  "get/favorites",
  async (id_user) => {
    try {
      const { data } = await API.get(`/list/${id_user}`);
      if (data) {
        return data?.data[0]?.favorit;
      }
    } catch (err) {
      return null;
    }
  }
);

export const ClearFavorite = createAsyncThunk(
  "clear/favorites",
  async (id_user) => {
    try {
      const { data } = await API.delete(`/clear/${id_user}`);
      return id_user;
    } catch (err) {
      return null;
    }
  }
);

export const CreateFavorites = createAsyncThunk(
  "post/favorites",
  async (favoriteData) => {
    try {
      const { data } = await API.post(`/like`, favoriteData);
      if (data) {
        return data;
      }
    } catch (err) {
      return null;
    }
  }
);

const FavoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllFavorites.fulfilled, (state, { payload }) => {
      if (payload) {
        state.favorites = payload;
        return state;
      }
    });
    builder.addCase(CreateFavorites.fulfilled, (state, { payload }) => {
      if (payload?.data) {
        state.favorites = [...state.favorites, payload];
        return state;
      }

      const filtered = state.favorites.filter((favorit) =>
        favorit.id_produk !== payload.message ? favorit : ""
      );
      state.favorites = filtered;
      return state;
    });
    builder.addCase(ClearFavorite.fulfilled, (state, { payload }) => {
      if (payload) {
        state.favorites = [];
        return state;
      }
    });
  },
});

export default FavoriteSlice.reducer;
