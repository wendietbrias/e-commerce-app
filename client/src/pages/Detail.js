import { Navbar, Footer } from "../components";
import { IoIosWarning, IoIosArrowBack } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CreateCart } from "../store/Cart";
import decode from "jwt-decode";
import axios from "axios";

//format mata uang
const formatCurrency = (nominal = 0) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(nominal);
};

const Detail = () => {
  //mengambil data dari redux toolkit
  const {
    products: { products },
    auth: { user },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const decoded = user ? decode(user) : null;

  //mengambil id dari parameter url
  const { id } = useParams();
  //state untuk data detail
  const [detail, setDetail] = useState(null);
  //state untuk menampilkan image
  const [showImage, setShowImage] = useState(null);

  //menjalankan efek samping
  useEffect(() => {
    //function untuk memanggil api detail product
    const DetailProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/product/${id}`
        );

        setDetail(data[0]);
        setShowImage({ url: data[0]?.gambar1, index: 0 });
      } catch (err) {
        window.location.href = "/";
        return err;
      }
    };

    DetailProduct();
  }, [id]);

  const cartHandler = () => {
    dispatch(
      CreateCart({
        id_produk: detail?.id,
        id_user: decoded?.user?.id_user,
        nama_produk: detail?.nama_produk,
        harga: detail?.harga,
        gambar: detail?.gambar1,
        total: detail?.harga,
        qty: 1,
      })
    );
  };

  return (
    <div className="  mx-[76px] mt-10 mb-14">
      <div className=" text-[30px] text-[#197A09] font-bold">
        <button className="flex flex-row items-center px-[182px]">
          <IoIosArrowBack />
          <h1 className="px-6">Detail {detail?.category}</h1>
        </button>
      </div>
      <main className="mt-6 mx-48">
        <div className="relative">
          <img src={showImage?.url} alt="fotoDetail"></img>
          <button className="absolute bottom-0 right-0 items-center font-semibold text-white flex flex-row px-4 py-2 bg-[#EC695E] rounded-md gap-x-2 m-4 opacity-[80%] hover:opacity-[100%] transition delay-75">
            <p className="text-black">
              <IoIosWarning />
            </p>
            Report
          </button>
        </div>
        <div className="mt-4 mb-4 flex flex-row items-center gap-x-5">
          <img
            onClick={() => setShowImage({ url: detail?.gambar1, index: 1 })}
            className={`max-w-[90px] rounded-lg opacity-[70%] hover:opacity-[100%] transition delay-75 ${
              showImage?.index === 1 ? "opacity-[100%]" : ""
            }`}
            src={detail?.gambar1}
            alt="foto1"
          ></img>
          <img
            onClick={() => setShowImage({ url: detail?.gambar2, index: 2 })}
            className={`max-w-[90px] rounded-lg opacity-[70%] hover:opacity-[100%] transition delay-75 ${
              showImage?.index === 2 ? "opacity-[100%]" : ""
            }`}
            src={detail?.gambar2}
            alt="foto1"
          ></img>
          <img
            className={`max-w-[90px] rounded-lg opacity-[70%] hover:opacity-[100%] transition delay-75 ${
              showImage?.index === 3 ? "opacity-[100%]" : ""
            }`}
            onClick={() => setShowImage({ url: detail?.gambar3, index: 3 })}
            src={detail?.gambar3}
            alt="foto2"
          ></img>
          <img
            className={`max-w-[90px] rounded-lg opacity-[70%] hover:opacity-[100%] transition delay-75 ${
              showImage?.index === 4 ? "opacity-[100%]" : ""
            }`}
            onClick={() => setShowImage({ url: detail?.gambar4, index: 4 })}
            src={detail?.gambar4}
            alt="foto3"
          ></img>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">{detail?.nama_produk}</h1>
          <h3 className="text-[#808080] text-md font-semibold">
            {detail?.category}
          </h3>
          <p className="text-xl">{detail?.deskripsi}</p>
          <div className=" flex mt-4 items-center">
            <p className="text-2xl font-bold ">
              {formatCurrency(detail?.harga)}
            </p>

            <button
              onClick={cartHandler}
              className=" mx-4 hover:bg-[#1C680F] transition delay-100 bg-button text-white py-[14px] px-6 rounded-lg font-semibold"
            >
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Detail;
