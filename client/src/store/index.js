import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";

const stores = configureStore({
  reducer: {
    auth: Auth,
  },
});

export default stores;
