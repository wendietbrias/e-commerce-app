import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useState } from "react";
import { LogoutHandler } from "../store/Auth";
import WrapperModal from "./WrapperModal";
import CartItem from "./CartItem";
import SiBelanja from "../assets/SiBelanja.svg";

const Navbar = ({ path }) => {
  //function dari redux
  const dispatch = useDispatch();
  //mengambil data dari redux toolkit
  const {
    auth: { user },
    carts: { carts },
  } = useSelector((state) => state);
  //mendecode token yang didapat dari jsonwebtoken
  const decoded = user ? decode(user) : null;
  //state untuk sebagai acuan membuka modal
  const [modals, setModals] = useState({
    openCartModal: false,
    openMarketModal: false,
  });

  //state untuk open modal logout dan profile
  const [openuserModal, setOpenuserModal] = useState(false);

  //fungsi untuk menutup modal
  const closeModal = (e, key) => {
    if (e.target.className.includes("fixed")) {
      setModals({
        [key]: false,
      });
    }
  };

  return (
    <nav className="w-full flex justify-between items-center bg-white shadow-md shadow-gray-400 py-3 px-20">
      <div className="flex items-center">
        <Link to="/">
          <img src={SiBelanja} alt="sibelanja" className="w-[130px]" />
        </Link>
        <div className="w-[2px] h-5 bg-gray-400 ml-7"></div>
        <Link to="/category">
          <span className="font-medium text-sm text-body ml-3">Category</span>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-x-5 mr-7">
          <button
            className="text-button text-xl"
            onClick={() => setModals({ ...modals, openMarketModal: true })}
          >
            <BsShop />
          </button>
          <Link to="/favorite">
            <button className="text-button text-xl mt-2">
              <AiOutlineHeart />
            </button>
          </Link>
          {path !== "/cart" && (
            <button
              className="text-button text-xl"
              onClick={() => setModals({ ...modals, openCartModal: true })}
            >
              <AiOutlineShoppingCart />
            </button>
          )}
        </div>
        <div className="w-[2px] h-5 bg-gray-400 mr-7"></div>
        <div className="relative">
          {decoded ? (
            <div
              onClick={() => setOpenuserModal(!openuserModal)}
              className="flex items-center cursor-pointer"
            >
              {decoded?.user?.Profile || decoded?.picture ? (
                <img
                  src={`${decoded?.user?.profile || decoded?.picture}`}
                  alt={decoded?.user?.nama}
                  className="w-[40px] h-[40px] rounded-full"
                />
              ) : (
                <span className="w-[40px] h-[40px] rounded-full bg-blue-100 flex justify-center items-center uppercase font-bold">
                  {decoded?.user?.nama?.charAt(0)}
                </span>
              )}
              <h5 className="font-semibold ml-3 text-md">
                {decoded?.user?.nama || decoded?.name}
              </h5>
            </div>
          ) : (
            <div className="flex items-center">
              <Link to="/login">
                <button className="bg-button mr-3 border-2 border-button py-2 px-5 rounded-md text-white font-semibold text-sm">
                  Masuk
                </button>
              </Link>
              <Link to="/register">
                <button className="border-2 border-button py-2 px-5 rounded-md text-button font-semibold text-sm">
                  Daftar
                </button>
              </Link>
            </div>
          )}
          {openuserModal && (
            <div className="bg-white absolute -bottom-32 right-0 border-2 border-button rounded-md overflow-hidden z-[9999]">
              <Link to="/profile">
                <button className="border-b-2 border-button py-3 px-5 text-button font-semibold flex items-center gap-x-2">
                  <FaUser />
                  Profile
                </button>
              </Link>
              <button
                onClick={() => {
                  dispatch(LogoutHandler());
                  setOpenuserModal(false);
                }}
                className="border-b-2 border-button py-3 px-5 text-button font-semibold flex items-center gap-x-2"
              >
                <RiLogoutBoxRFill />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      {modals.openCartModal && (
        <WrapperModal title="openCartModal" closeModal={closeModal}>
          {decoded ? (
            <div className="bg-white rounded-md px-4 absolute top-20 right-14 w-[480px]">
              <header className="w-full border-b-2 border-gray-400 py-2 flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-500">
                  Keranjang Anda({Array.isArray(carts) && carts.length})
                </h4>
                <Link to="/cart">
                  <button className="text-button font-semibold text-sm">
                    Lihat Sekarang
                  </button>
                </Link>
              </header>
              <div className="w-full">
                {carts && carts?.length > 0 ? (
                  carts.map((item, idx) => <CartItem key={idx} cart={item} />)
                ) : (
                  <div className="w-full py-5">
                    <h4 className="text-center text-lg font-semibold">
                      Anda Belum Punya Keranjang
                    </h4>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center bg-white absolute top-20 right-14 py-5 px-7 rounded-md">
              <h2 className="text-xl font-semibold">
                Anda Belum Memiliki Akun
              </h2>
              <Link to="/login">
                <button className="rounded-md mt-4 bg-button text-white font-medium text-sm py-2 px-7">
                  Buat Akun
                </button>
              </Link>
            </div>
          )}
        </WrapperModal>
      )}
      {modals.openMarketModal && (
        <WrapperModal title="openMarketModal" closeModal={closeModal}>
          {decoded && !decoded?.user?.is_seller && (
            <div className="flex flex-col items-center bg-white absolute top-20 right-14 py-5 px-7 rounded-md">
              <h2 className="text-xl font-semibold">
                Anda Belum Memiliki Toko
              </h2>
              <Link to="/openShop">
                <button className="rounded-md mt-4 bg-button text-white font-medium text-sm py-2 px-7">
                  Buat Toko
                </button>
              </Link>
            </div>
          )}
          {!decoded && (
            <div className="flex flex-col items-center bg-white absolute top-20 right-14 py-5 px-7 rounded-md">
              <h2 className="text-xl font-semibold">
                Anda Belum Memiliki Akun
              </h2>
              <Link to="/login">
                <button className="rounded-md mt-4 bg-button text-white font-medium text-sm py-2 px-7">
                  Buat Akun
                </button>
              </Link>
            </div>
          )}
          {decoded && decoded?.user?.is_seller && (
            <div className="flex flex-col items-center bg-white absolute top-20 right-14 py-5 px-7 rounded-md">
              <div className="flex items-center gap-x-3">
                <span className="w-[50px] h-[50px] font-bold text-xl bg-blue-200 text-title rounded-full flex items-center justify-center">
                  {decoded?.user?.nama_toko?.charAt(0)}
                </span>
                <div className="flex-1">
                  <h2 className="text-lg font-bold">
                    {decoded?.user?.nama_toko}
                  </h2>
                  <p className="text-sm text-gray-400 font-medium">
                    {decoded?.user?.email}
                  </p>
                </div>
              </div>
              <Link to="/sellerprofile">
                <button className="bg-button text-white font-semibold w-full py-1 px-3 text-sm rounded-md mt-5">
                  Detail
                </button>
              </Link>
            </div>
          )}
        </WrapperModal>
      )}
    </nav>
  );
};

export default Navbar;
