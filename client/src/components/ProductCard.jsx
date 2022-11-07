import React from "react";
import { AiOutlineSearch, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full shadow-md shadow-slate-300">
      <img
        src="assets/product_dummy.jpg"
        alt="product_dummy"
        className="h-[250px] rounded-t-md"
      />
      <div className="py-3 px-2">
        <h5 className="text-sm font-medium">
          Sepeda lipat TDR3000 multi function ferenheit Nobita X tahilalats
        </h5>
        <p className="font-bold text-lg mt-1">Rp.127.000</p>
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
              Terjual 12rb
            </p>
          </div>
          <HiOutlineBadgeCheck className="text-button text-xl" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
