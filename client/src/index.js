import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import stores from "./store";
import { GoogleOAuthProvider } from "@react-oauth/google";

//google console client id
const clientID =
  "245656057777-4tetocf1eci1mknl1cmv96i1m3hhbj37.apps.googleusercontent.com";

//render App.js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={stores}>
    <GoogleOAuthProvider clientId={clientID}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);
