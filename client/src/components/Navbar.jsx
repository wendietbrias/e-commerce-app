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

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const decoded = user ? decode(user) : null;
  const [modals, setModals] = useState({
    openCartModal: false,
    openMarketModal: false,
  });
  const [openUserModal, setOpenUserModal] = useState(false);

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
          <img
            src="assets/SiBelanja.svg"
            alt="sibelanja"
            className="w-[130px]"
          />
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
          <Link to="/favorites">
            <button className="text-button text-xl mt-2">
              <AiOutlineHeart />
            </button>
          </Link>
          <button
            className="text-button text-xl"
            onClick={() => setModals({ ...modals, openCartModal: true })}
          >
            <AiOutlineShoppingCart />
          </button>
        </div>
        <div className="w-[2px] h-5 bg-gray-400 mr-7"></div>
        <div className="relative">
          {decoded ? (
            <div
              onClick={() => setOpenUserModal(!openUserModal)}
              className="flex items-center cursor-pointer"
            >
              {decoded?.User?.Profile || decoded?.picture ? (
                <img
                  src={`${decoded?.User?.profile || decoded?.picture}`}
                  alt={decoded?.User?.nama}
                  className="w-[40px] h-[40px] rounded-full"
                />
              ) : (
                <span className="w-[40px] h-[40px] rounded-full bg-blue-100 flex justify-center items-center uppercase font-bold">
                  {decoded?.User?.nama?.charAt(0)}
                </span>
              )}
              <h5 className="font-semibold ml-3 text-md">
                {decoded?.User?.nama || decoded?.name}
              </h5>
            </div>
          ) : (
            <div className="flex items-center">
              <Link to="/login">
                <button className="bg-button mr-3 border-2 border-button py-2 px-5 rounded-md text-white font-semibold text-sm">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="border-2 border-button py-2 px-5 rounded-md text-button font-semibold text-sm">
                  Register
                </button>
              </Link>
            </div>
          )}
          {openUserModal && (
            <div className="bg-white absolute -bottom-32 right-0 border-2 border-button rounded-md overflow-hidden">
              <Link to="/profile">
                <button className="border-b-2 border-button py-3 px-5 text-button font-semibold flex items-center gap-x-2">
                  <FaUser />
                  Profile
                </button>
              </Link>
              <button
                onClick={() => dispatch(LogoutHandler({ setOpenUserModal }))}
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
                  Keranjang Anda(1)
                </h4>
                <Link to="/cart">
                  <button className="text-button font-semibold text-sm">
                    Lihat Sekarang
                  </button>
                </Link>
              </header>
              <div className="w-full">
                <div className="flex items-start py-3">
                  <div className="flex-1 flex items-center">
                    <img src="assets/cart_dummy.jpg" alt="cart_dummy" />
                    <div className="ml-3">
                      <h4 className="font-bold text-sm">
                        Sepeda lipat TDR3000 multi function ferenheit Nobita X
                        tahilalats
                      </h4>
                      <p className="text-gray-500 font-medium mt-1 text-sm">
                        Jumlah 1
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-sm text-button">
                    Rp. 17.000
                  </p>
                </div>
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
          {decoded ? (
            <div className="flex flex-col items-center bg-white absolute top-20 right-14 py-5 px-7 rounded-md">
              <h2 className="text-xl font-semibold">
                Anda Belum Memiliki Toko
              </h2>
              <button className="rounded-md mt-4 bg-button text-white font-medium text-sm py-2 px-7">
                Buat Toko
              </button>
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
    </nav>
  );
};

export default Navbar;
