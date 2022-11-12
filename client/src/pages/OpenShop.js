import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Navbar } from "../components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import decode from "jwt-decode";
import { SellerHandler } from "../store/Auth";

const OpenShop = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const decoded = user ? decode(user) : null;
  const [shopForm, setShopForm] = useState({
    nama_toko: "",
    alamat_toko: "",
    no_toko: "",
  });

  useEffect(() => {
    //mengecek apakah ada user atau tidak
    if (!user) {
      return (window.location.href = "/");
    }

    if (decoded?.user?.is_seller) {
      return (window.location.href = "/");
    }
  }, [user]);

  //form handler
  const formHandler = (e) => {
    return setShopForm({ ...shopForm, [e.target.name]: e.target.value });
  };

  //function untuk mensubmit data
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      SellerHandler({
        ...shopForm,
        nama: decoded?.user?.nama,
        email: decoded?.user?.email,
        id_user: decoded?.user?.id,
      })
    );
  };

  return (
    <div className="py-10 px-20">
      <div className="flex items-center">
        <MdOutlineArrowBackIosNew className="text-xl text-button" />
        <h4 className="text-button text-2xl font-bold ml-6">
          Konfirmasi Identitas Toko
        </h4>
      </div>
      <div className="flex ml-10 items-stretch mt-14 space-x-10">
        <div className="w-1 h-[580px] bg-button flex flex-col justify-between items-center">
          <span className="w-[16px] h-[16px] rounded-full bg-button"></span>
          <span className="w-[16px] h-[16px] rounded-full bg-button"></span>
          <span className="w-[16px] h-[16px] rounded-full bg-button"></span>
        </div>
        <div className="flex flex-col justify-between">
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2 capitalize">
              Masukan nama toko
            </h2>
            <div className="mt-2">
              <p className="text-md font-normal text-gray-500">Nama Toko</p>
              <input
                type="text"
                name="nama_toko"
                onChange={formHandler}
                value={shopForm?.nama_toko}
                className="w-[400px] outline-none mt-1 bg-transparent border border-gray-300 py-2 px-3 rounded-md"
              />
              <p className="text-sm font-normal text-gray-500 mt-1">
                Pastikan data sudah diisi dengan benar
              </p>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2 capitalize">
              Masukan alamat toko
            </h2>
            <div className="mt-2">
              <p className="text-md font-normal text-gray-500">Alamat Toko</p>
              <input
                type="text"
                name="alamat_toko"
                onChange={formHandler}
                value={shopForm?.alamat}
                className="w-[400px] outline-none mt-1 bg-transparent border border-gray-300 py-2 px-3 rounded-md"
              />
              <p className="text-sm font-normal text-gray-500 mt-1">
                Pastikan data sudah diisi dengan benar
              </p>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2 capitalize">
              Masukan no.telp toko
            </h2>
            <div className="mt-2">
              <p className="text-md font-normal text-gray-500">No.Telp Toko</p>
              <input
                type="text"
                name="no_toko"
                value={shopForm?.notelp}
                onChange={formHandler}
                className="w-[400px] outline-none mt-1 bg-transparent border border-gray-300 py-2 px-3 rounded-md"
              />
              <p className="text-sm font-normal text-gray-500 mt-1">
                Pastikan data sudah diisi dengan benar
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-7">
        <button
          onClick={submitHandler}
          className="bg-button text-white py-3 px-7 rounded-md font-semibold"
        >
          Konfirmasi
        </button>
      </div>
    </div>
  );
};

export default OpenShop;
