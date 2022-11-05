import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";
import Alert from "./Alert";

const stores = configureStore({
  reducer: {
    auth: Auth,
    alert: Alert,
  },
});

export default stores;
