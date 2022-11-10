import { configureStore } from "@reduxjs/toolkit";

import Auth from "./Auth";
import Alert from "./Alert";
import Products from "./Products";
import Cart from "./Cart";

const stores = configureStore({
  reducer: {
    auth: Auth,
    alert: Alert,
    products: Products,
    carts: Cart,
  },
});

export default stores;
