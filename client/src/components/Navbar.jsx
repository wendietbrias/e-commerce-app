import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
<<<<<<< HEAD
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useState } from "react";
import { LogoutHandler } from "../store/Auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const decoded = user ? decode(user) : null;
  const [openUserModal, setOpenUserModal] = useState(false);

  console.log(decoded);

=======
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = ({ setOpen }) => {
  const { user, loading } = useSelector((state) => state.auth);

>>>>>>> products/frontend
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
          <Link to="/favorites">
            <button className="text-button text-xl">
              <BsShop />
            </button>
          </Link>
          <Link to="/favorites">
            <button className="text-button text-xl">
              <AiOutlineHeart />
            </button>
          </Link>
          <Link to="/favorites">
            <button className="text-button text-xl">
              <AiOutlineShoppingCart />
            </button>
          </Link>
        </div>
        <div className="w-[2px] h-5 bg-gray-400 mr-7"></div>
<<<<<<< HEAD
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
            <div className="absolute -bottom-32 right-0 border-2 border-button rounded-md overflow-hidden">
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
=======
        {user ? (
          <div className="flex items-center">
            <h2>Login as user</h2>
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
>>>>>>> products/frontend
      </div>
    </nav>
  );
};

export default Navbar;
