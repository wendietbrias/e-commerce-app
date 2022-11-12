import "swiper/css";
import "swiper/css/pagination";
import "../style/Slider.css";

import { useEffect, useState } from "react";
import { Loading } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { ProductCard } from "../components";
import { GetAllProduct } from "../store/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Home = () => {
  const { products, loading } = useSelector((state) => state.products);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div class="w-full">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        autoplay={{
          delay: 2800,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="assets/banner1.png" alt="event" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/banner2.png" alt="event" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/banner3.jpg" alt="event" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/banner4.png" alt="event" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/banner5.png" alt="event" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/banner6.png" alt="event" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/banner7.png" alt="event" className="w-full" />
        </SwiperSlide>
      </Swiper>
      {loading ? (
        <Loading />
      ) : (
        <div className="py-7 px-20">
          {products && products.length > 0 && (
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
          )}
          <div className="w-full">
            {products && products?.data?.length > 0 ? (
              <div className="grid grid-cols-4 gap-4">
                {products?.data?.map((product, idx) => (
                  <ProductCard key={idx} type="user" product={product} />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center py-10 flex-col">
                <img
                  src="assets/illus.svg"
                  alt="Ilustration"
                  className="w-[350px]"
                />
                <h2 className="font-bold text-xl mt-10">
                  Produk masih belum ditambahkan
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex items-center justify-center gap-x-3 my-10">
        <button className="bg-button text-white py-2 px-3 text-sm rounded-md font-semibold">
          Selanjutnya
        </button>
        <p className="font-bold text-lg">{page}</p>
        <button className="bg-button text-white py-2 px-3 rounded-md text-sm font-semibold">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default Home;
