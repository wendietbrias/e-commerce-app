import { useState } from "react";
import { Navbar, Footer, ProductCard } from "../components";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { SearchHandler } from "../store/Products";
import axios from "axios";

const dummy = [
  "Discover",
  "Minyak Wangi",
  "Makanan",
  "Minuman",
  "Mainan",
  "Kopi",
  "Alat masak",
  "Keperluan Rumah",
  "Anime",
  "Otaku",
];

const Category = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [category, setCategory] = useState("Discover");
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = async (e) => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/product/search?query=${searchTerm}`
    );
    if (data) {
      dispatch(SearchHandler(data));
    }
  };

  const categoryHandler = () => {};

  return (
    <div className="py-10 px-20">
      <div className="flex justify-center items-center gap-x-7">
        {dummy?.map((item, idx) => (
          <button
            onClick={() => setCategory(item)}
            key={idx}
            className={`py-3 px-3 rounded-md  font-semibold text-sm ${
              item === category ? "bg-button" : "bg-transparent"
            } ${item === category ? "text-white" : "text-slate-400"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="w-full flex justify-center my-10">
        <div className="rounded-full flex items-center overflow-hidden shadow-md shadow-slate-400 px-2">
          <AiOutlineSearch
            className="text-lg cursor-pointer"
            onClick={searchHandler}
          />
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            className="outline-none px-2 w-[500px] bg-white py-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {Array.isArray(products?.data) &&
          products?.data?.map((item, idx) => (
            <ProductCard type="user" key={idx} product={item} />
          ))}
      </div>
    </div>
  );
};

export default Category;
