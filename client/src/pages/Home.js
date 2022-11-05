import { useEffect, useState } from "react";
import { Navbar, Footer } from "../components";
import { useSelector } from "react-redux";
import { AiOutlineSearch, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { ProductCard } from "../components";

const datadummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const WrapperModal = ({ children, CloseModal }) => {
  return (
    <div
      onClick={CloseModal}
      className="fixed top-0 left-0 w-full h-screen bg-wrapper"
    >
      {children}
    </div>
  );
};

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");
  const [openStoreModal, setOpenStoreModal] = useState(true);
  const [openCartModal, setOpenCartModal] = useState(false);

  return (
    <section className="flex flex-col justify-between min-h-screen w-full">
      <Navbar />
      <div class="w-full">
        <img src="assets/event.jpg" alt="event" className="w-full" />
        <div className="py-7 px-20">
          <form className="w-full flex justify-center my-10">
            <div className="rounded-full flex items-center overflow-hidden shadow-md shadow-slate-400 px-2">
              <AiOutlineSearch className="text-lg" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none px-2 w-[500px] bg-white py-2"
              />
            </div>
          </form>
          <div className=" px-20 grid grid-cols-5 gap-4">
            {datadummy?.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
