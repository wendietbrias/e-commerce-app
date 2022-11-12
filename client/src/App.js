import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Auth,
  OpenShop,
  Home,
  StartSelling,
  Category,
  SellerProfile,
  Detail,
  Cart,
  Main,
  Favorite,
  Profile,
} from "./pages";

const App = () => {
  //ambil id dari product sebagai acuan untuk update data
  const [id, setId] = useState(null);

  return (
    <div className="App">
      <Routes>
        {/* auth routes  */}
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />

        {/* nested routes */}
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/openshop" element={<OpenShop />} />
          <Route
            path="/startselling"
            element={<StartSelling id={id} setId={setId} />}
          />
          <Route
            path="/sellerprofile"
            element={<SellerProfile setId={setId} />}
          />
          <Route path="/product/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
