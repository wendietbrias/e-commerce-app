import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";

const stores = configureStore({
  auth: Auth,
});

export default stores;
