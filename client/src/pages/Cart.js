import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Footer } from "../components";
import { GetUserCart } from "../store/Cart";
import decode from "jwt-decode";
import { useLocation } from "react-router-dom";

const formatCurrency = (nominal = 0) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(typeof nominal !== "number" ? 0 : nominal);
};

const Cart = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const {
    carts: { carts },
    auth: { user },
  } = useSelector((state) => state);

  const totalQty =
    carts && carts.length > 0 ? carts.reduce((a, b) => a + b.total, 0) : 0;

  return (
    <div className="py-10 px-20">
      <h2 className="text-2xl font-bold">Keranjang</h2>
      <div className="py-12 space-y-6">
        <section className="flex flex-row ">
          <div className="w-[50%] flex flex-col gap-y-3">
            {carts.map((item, idx) => (
              <article
                key={idx}
                className="bg-slate-100 flex flex-row p-6 rounded-md  space-x-6"
              >
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img
                      className="w-full object-cover md:h-full md:w-48 lg:58 rounded-lg"
                      src={item?.gambar}
                      alt={item?.nama_produk}
                    />
                  </div>
                </div>
                <div className="flex flex-col break-words ">
                  <h1 className="font-semibold text-xl">{item?.nama_produk}</h1>
                  <h2 className="flex flex-row text-[#197A09] text-xl font-semibold space-y-2">
                    {item?.harga}
                    <h3 className="text-[#9D9D9D]">/pcs</h3>
                  </h2>
                  <div className="flex py-3">
                    <div className="flex items-center gap-x-4">
                      <button className="hover:bg-[#1C680F] transition delay-100 bg-button text-white py-0.5 px-3  rounded-md font-semibold">
                        -
                      </button>
                    </div>
                    <div className="mx-4 font-bold">{item?.qty}</div>
                    <div className="flex items-center gap-x-4">
                      <button className="hover:bg-[#1C680F] transition delay-100 bg-button text-white py-0.5 px-2.5 rounded-md font-semibold">
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-sm text-button font-semibold mt-1">
                      Delete Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className=" px-2 ml-20 bg-white w-[38%] rounded-xl">
            <div className="flex justify-center font-bold text-xl  pt-3 pb-2 border-b-2 border-gray-200">
              <h2>Total</h2>
            </div>
            <div className="flex flex-row justify-between px-4 py-4">
              <p className="text-gray-400 font-semibold text-2xl">Sub Total</p>
              <p className="text-2xl font-semibold">
                {formatCurrency(totalQty)}
              </p>
            </div>
            <div className="flex flex-col items-center px-4">
              <button className="w-full pt-3 pb-3 m-2 bg-[#197A09] rounded-xl hover:bg-[#1C680F] transition delay-70 font-bold text-white">
                Beli Sekarang
              </button>
              <button className="w-full m-2 pt-3 pb-3 font-bold rounded-xl hover:bg-[#E8E8E8] transition delay-70 border-[1px] border-black">
                Lanjut Berbelanja
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
