import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { GetAllProduct } from "../store/Products";
import { GetUserCart } from "../store/Cart";
import decode from "jwt-decode";

const Main = () => {
  const dispatch = useDispatch();
  const {
    auth: { user },
    products: { products },
  } = useSelector((state) => state);
  const decoded = user ? decode(user) : null;

  useEffect(() => {
    dispatch(GetAllProduct());
    if (user) {
      dispatch(GetUserCart(decoded?.user?.id_user));
    }
  }, [user]);

  return (
    <section className="min-w-screen min-h-screen  flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Main;
