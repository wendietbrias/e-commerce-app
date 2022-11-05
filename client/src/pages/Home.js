import { useState } from "react";
import { Navbar, Footer } from "../components";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <section className="flex flex-col justify-between min-h-screen w-full">
      <Navbar />
      <Footer />
    </section>
  );
};

export default Home;
