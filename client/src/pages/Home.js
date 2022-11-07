import { useState } from "react";
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
  const [openStoreModal, setOpenStoreModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);

  const CloseModalStore = (e) => {
    if (e.target.className.includes("fixed")) {
      setOpenStoreModal(false);
    }
  };

  const CloseModalCart = (e) => {
    if (e.target.className.includes("fixed")) {
      setOpenCartModal(false);
    }
  };

  return (
    <section className="flex flex-col justify-between min-h-screen w-full">
      <Navbar
        setOpenCartModal={setOpenCartModal}
        setOpenStoreModal={setOpenStoreModal}
      />
      <div className="w-full pb-10">
        <img src="assets/event.jpg" alt="event" className="w-full" />
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
      <Footer />
      {openStoreModal && (
        <WrapperModal CloseModal={CloseModalStore}>
          {user ? (
            <div className="absolute top-20 right-24 bg-white py-4 rounded-md px-8 text-center">
              <h2 className="text-lg font-bold text-title">
                Anda Belum Memiliki Toko
              </h2>
              <button className="w-full mt-3 bg-button py-2 px-5 rounded-md text-sm text-white font-medium">
                Login
              </button>
            </div>
          ) : (
            <div className="absolute top-20 right-24 bg-white py-4 rounded-md px-8 text-center">
              <h2 className="text-lg font-bold text-title">Anda Belum Login</h2>
              <button className="w-full mt-3 bg-button py-2 px-5 rounded-md text-sm text-white font-medium">
                Login
              </button>
            </div>
          )}
        </WrapperModal>
      )}
      {openCartModal && (
        <WrapperModal CloseModal={CloseModalCart}>
          <div className="w-full">Cart</div>
        </WrapperModal>
      )}
    </section>
  );
};

export default Home;
