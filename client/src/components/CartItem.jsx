import React from "react";

const CartItem = ({ cart }) => {
  return (
    <div className="flex items-start py-3">
      <div className="flex-1 flex items-center">
        <img src={cart?.gambar} alt="cart_dummy" className="w-[100px]" />
        <div className="ml-3">
          <h4 className="font-bold text-sm">{cart?.nama_produk}</h4>
          <p className="text-gray-500 font-medium  text-sm">
            Jumlah {cart?.qty}
          </p>
        </div>
      </div>
      <p className="font-semibold text-sm text-button">Rp.{cart?.harga}</p>
    </div>
  );
};

export default CartItem;
