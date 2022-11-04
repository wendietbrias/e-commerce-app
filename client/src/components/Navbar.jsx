import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = ({ setOpen }) => {
  const { user, loading } = useSelector((state) => state.auth);

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
      </div>
    </nav>
  );
};

export default Navbar;
