import { useSelector } from "react-redux";
import { useState } from "react";
import decode from "jwt-decode";
import { FiChevronLeft } from "react-icons/fi";

const Profile = () => {
  const [formPembeli, setFormPembeli] = useState({
    nama: "",
    email: "",
    alamat: "",
  });
  const [formPenjual, setFormPenjual] = useState({
    nama_toko: "",
    alamat: "",
    notelp: "",
  });

  const {
    auth: { user },
  } = useSelector((state) => state);
  const decoded = user ? decode(user) : null;

  console.log(decoded);

  return (
    <div className="py-10 px-20">
      <div className="text-button flex items-center">
        <FiChevronLeft className="text-4xl mr-5" />
        <h5 className="font-bold text-3xl">Profile</h5>
      </div>
      <div className="w-[60%] mx-auto flex items-stretch  shadow-md shadow-slate-400 rounded-md overflow-hidden">
        <div className="flex-1 py-5 px-5 flex items-center justify-center flex-col">
          {decoded?.user?.profile !== "null" ? (
            <img />
          ) : (
            <span className="w-[100px] h-[100px] text-white font-bold text-3xl rounded-full bg-button flex items-center justify-center">
              {decoded?.user?.nama?.charAt(0)}
            </span>
          )}
          <button className="mt-6 px-7 text-sm mb-3 rounded-full bg-button py-3 text-white font-semibold">
            Change Picture
          </button>
          <button className="px-7 text-sm  rounded-full border-2 border-button py-3 text-button font-semibold">
            Delete Picture
          </button>
        </div>
        <div className="flex-1 bg-button py-5 px-5">
          <form className="w-full flex flex-col gap-y-4">
            <div className="w-full">
              <label className="text-white font-semibold text-md">
                Nama Penguna
              </label>
              <input
                type="text"
                className="w-full bg-white border-2 border-button rounded-md py-2 px-3 mt-1"
              />
            </div>
            <div className="w-full">
              <label className="text-white font-semibold text-md">
                Email Penguna
              </label>
              <input
                type="text"
                className="w-full bg-white border-2 border-button rounded-md py-2 px-3 mt-1"
              />
            </div>
            <div className="w-full">
              <label className="text-white font-semibold text-md">
                Alamat Penguna
              </label>
              <input
                type="text"
                className="w-full bg-white border-2 border-button rounded-md py-2 px-3 mt-1"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
