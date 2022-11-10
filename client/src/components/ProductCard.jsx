import React from "react";
import { AiOutlineSearch, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { DeleteProduct } from "../store/Products";
import { useDispatch } from "react-redux";

const formatCurrency = (nominal = 0) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(typeof nominal !== "number" ? 0 : nominal);
};

const ProductCard = ({ product, type, setId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateHandler = () => {
    if (setId) {
      setId(product?.id);
      navigate("/startselling");
    }
  };

  return (
    <div className="w-full shadow-md shadow-slate-300">
      <img
        src={product?.gambar1}
        alt="product_dummy"
        className="h-[250px] rounded-t-md"
      />
      <div className="py-3 px-2">
        <h5 className="text-md font-semibold">{product?.nama_produk}</h5>
        <p className="font-bold text-lg mt-1">
          {formatCurrency(product?.harga)}
        </p>
        {type === "user" && (
          <>
            <button className="text-button mt-4  flex items-center text-sm font-medium">
              <AiOutlineHeart className="mr-2" />
              Tambah favorite
            </button>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <p className="text-gray-400 text-sm flex items-center">
                  <AiFillStar className="text-yellow-500 mr-2" />
                  Rating
                </p>
                <div className="w-[1px] h-3 bg-gray-400 mx-2"></div>
                <p className="text-gray-400 text-sm flex items-center">
                  Stok {product?.stok_produk}
                </p>
              </div>
              <HiOutlineBadgeCheck className="text-button text-xl" />
            </div>
            <Link to={`/product/${product?.id}`}>
              <button className="text-button font-semibold text-sm underline">
                Detail
              </button>
            </Link>
          </>
        )}
        {type === "seller" && (
          <div className="flex items-center mt-7 gap-x-2">
            <button
              onClick={() => updateHandler(product?.id)}
              className="bg-button py-1 px-2 text-sm font-semibold text-white rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(DeleteProduct(product?.id))}
              className="bg-red-400 py-1 px-2 text-sm font-semibold text-white rounded-md"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
