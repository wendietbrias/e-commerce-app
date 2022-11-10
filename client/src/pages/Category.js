import { useState } from "react";
import { Navbar, Footer, ProductCard } from "../components";
import { AiOutlineSearch } from "react-icons/ai";

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
  const [category, setCategory] = useState("Discover");
  const [searchTerm, setSearchTerm] = useState("");

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
      <form className="w-full flex justify-center my-10">
        <div className="rounded-full flex items-center overflow-hidden shadow-md shadow-slate-400 px-2">
          <AiOutlineSearch className="text-lg" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none px-2 w-[500px] bg-white py-2"
          />
        </div>
      </form>
      <div className="grid grid-cols-5 gap-4">
        {dummy?.map((item, idx) => (
          <ProductCard key={idx} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
