import React, { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { MdAddPhotoAlternate } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { Navbar, Footer } from "../components";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import { CreateProduct, UpdateProduct } from "../store/Products";

const StartSelling = ({ id, setId }) => {
  const {
    auth: { user },
    products: { productsSeller },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const decoded = user ? decode(user) : null;
  const [sellingData, setSellingData] = useState({
    nama_produk: "",
    harga: "",
    category: "",
    deskripsi: "",
    stok_produk: "",
  });
  const [images, setImages] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(
        UpdateProduct({
          ...sellingData,
          gambar: images,
          id_seller: decoded?.user?.id,
          id,
        })
      );

      return setId(null);
    }
    dispatch(
      CreateProduct({
        ...sellingData,
        gambar: images,
        id_seller: decoded?.user?.id,
      })
    );
  };

  const formHandler = (e) => {
    setSellingData({ ...sellingData, [e.target.name]: e.target.value });
  };

  const imageHandler = (element) => {
    const file = element.target.files[0];

    if (file.size > 400000) {
      return alert("image to large");
    }

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImages([...images, reader.result]);
    });

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!decoded?.user?.is_seller) {
      window.location.href = "/";
    }

    if (id) {
      const findProduct = productsSeller.find((product) => product.id === id);
      setSellingData({
        nama_produk: findProduct?.nama_produk,
        harga: findProduct?.harga,
        deskripsi: findProduct?.deskripsi,
        category: findProduct?.category,
        stok_produk: findProduct?.stok_produk,
      });
      setImages([
        findProduct?.gambar1,
        findProduct?.gambar2,
        findProduct?.gambar3,
        findProduct?.gambar4,
      ]);
    }

    console.log("test");
  }, [user, id]);

  const clearHandler = () => {
    setSellingData({
      nama_produk: "",
      harga: "",
      category: "",
      deskripsi: "",
      stok_produk: "",
    });

    setImages([]);
    setId(null);
  };

  return (
    <div className="w-full  px-20 pt-10 pb-24">
      <h2 className="capitalize text-3xl font-bold">start selling</h2>
      <div className="bg-white rounded-md py-7 mt-7 px-12 flex justify-between items-center">
        <div className="flex-1 text-gray-800">
          <h3 className="flex items-center font-semibold text-lg">
            Product File{" "}
            <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-button text-button">
              Required
            </span>
          </h3>
          <p className="text-gray-400 mt-1 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <label
          htmlFor="file_upload"
          className="flex items-center bg-button text-white text-sm font-semibold py-2 px-10 rounded-full cursor-pointer"
        >
          <AiOutlineDownload className="mr-1" style={{ fontSize: "25px" }} />
          Upload
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="file_upload"
          className="hidden"
          id="file_upload"
        />
      </div>
      <div className="mt-7 bg-white py-7">
        <h2 className="capitalize text-center text-2xl font-bold">
          Upload product photos
        </h2>
        <div className="w-full mt-7 grid grid-cols-12 gap-7 px-10">
          <div className="col-span-6 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
            {images[0] !== undefined ? (
              <img src={images[0]} alt="image1" className="h-[280px]" />
            ) : (
              <>
                <MdAddPhotoAlternate className="text-[80px] h-[200px] text-gray-400" />
                <h5 className="font-semibold text-gray-400">Photo 1</h5>
              </>
            )}
          </div>
          <div className="col-span-6 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
            {images[1] !== undefined ? (
              <img src={images[1]} alt="image2" className="h-[280px]" />
            ) : (
              <>
                <MdAddPhotoAlternate className="text-[80px] h-[200px] text-gray-400" />
                <h5 className="font-semibold text-gray-400">Photo 2</h5>
              </>
            )}
          </div>
          <div className="col-span-6 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
            {images[2] !== undefined ? (
              <img src={images[2]} alt="image3" className="h-[280px]" />
            ) : (
              <>
                <MdAddPhotoAlternate className="text-[80px] h-[200px] text-gray-400" />
                <h5 className="font-semibold text-gray-400">Photo 3</h5>
              </>
            )}
          </div>
          <div className="col-span-6 cursor-pointer rounded-md flex py-4 flex-col justify-center items-center border-2 border-dashed border-gray-400">
            {images[3] !== undefined ? (
              <img src={images[3]} alt={"image4"} className="h-[280px]" />
            ) : (
              <>
                <MdAddPhotoAlternate className="text-[80px] h-[200px] text-gray-400" />
                <h5 className="font-semibold text-gray-400">Photo 3</h5>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white mt-7 py-10 px-10">
        <h2 className="text-center text-xl font-bold">Product Information</h2>
        <div className="flex items-start justify-between mt-7">
          <div className="w-[30%] text-gray-800">
            <h3 className="flex items-center font-semibold text-lg">
              Product Name{" "}
              <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-button text-button">
                Required
              </span>
            </h3>
            <p className="text-gray-400 mt-1 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <input
            type="text"
            name="nama_produk"
            value={sellingData?.nama_produk}
            onChange={formHandler}
            className="w-[60%] outline-none resize-none py-3 px-3 rounded-md mt-3 border-gray-300 border"
            required
          />
        </div>

        <div className="flex items-start justify-between mt-7">
          <div className="w-[30%] text-gray-800">
            <h3 className="flex items-center font-semibold text-lg mt-3">
              Description{" "}
              <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-button text-button">
                Required
              </span>
            </h3>
            <p className="text-gray-400 mt-1 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <textarea
            type="text"
            name="deskripsi"
            value={sellingData.deskripsi}
            onChange={formHandler}
            className="w-[60%] outline-none resize-none h-[140px] py-2 px-3 rounded-md border-gray-300 border"
          ></textarea>
        </div>
      </div>

      <div className="bg-white mt-7 py-4 px-10">
        <div className="flex items-center justify-between mt-7">
          <div className="w-[30%] text-gray-800 mb-5">
            <h3 className="flex items-center font-semibold text-lg">
              Product Category{" "}
              <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-button text-button">
                Required
              </span>
            </h3>
            <p className="text-gray-400 mt-1 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <select
            value={sellingData.category}
            onChange={formHandler}
            name="category"
            className="w-[60%] outline-none mb-4 py-3 px-3 rounded-md border-gray-300 border"
          >
            <option value="Animation">Animation</option>
            <option value="Branding">Branding</option>
            <option value="Illustration">Illustration</option>
            <option value="Mobile">Mobile</option>
            <option value="Print">Print</option>
            <option value="Product Design">Product Design</option>
            <option value="Typography">Typography</option>
            <option value="Web Design">Web Design</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="bg-white mt-7 pt-4 pb-10 px-10">
        <h2 className="text-center text-xl font-bold">Pricing</h2>
        <div className="flex items-center justify-between mt-7">
          <div className="w-[30%] text-gray-800">
            <h3 className="flex items-center font-semibold text-lg">
              Nett Price{" "}
              <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-button text-button">
                Required
              </span>
            </h3>
            <p className="text-gray-400 mt-1 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <input
            value={sellingData.harga}
            onChange={formHandler}
            type="number"
            name="harga"
            className="w-[60%] outline-none resize-none py-4 px-3 rounded-md border-gray-300 border"
            required
          />
        </div>
      </div>
      <div className="bg-white mt-7 pt-4 pb-10 px-10">
        <h2 className="text-center text-xl font-bold">Stok Produk</h2>
        <div className="flex items-center justify-between mt-7">
          <div className="w-[30%] text-gray-800">
            <h3 className="flex items-center font-semibold text-lg">
              Stok_produk{" "}
              <span className="ml-2 rounded-full text-[10px] block px-2 text border-2 border-button text-button">
                Required
              </span>
            </h3>
            <p className="text-gray-400 mt-1 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <input
            value={sellingData.stok_produk}
            onChange={formHandler}
            type="number"
            name="stok_produk"
            className="w-[60%] outline-none resize-none py-4 px-3 rounded-md border-gray-300 border"
            required
          />
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={clearHandler}
          className="py-2 px-10 rounded-full border-2 border-gray-400 text-gray-500 cursor-pointer"
        >
          Cancel
        </button>

        <button
          onClick={submitHandler}
          className="py-2 px-10 rounded-full bg-button text-white font-semibold"
        >
          {id ? "Update & Upload" : "Save & Upload"}
        </button>
      </div>
    </div>
  );
};

export default StartSelling;
