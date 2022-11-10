import { Link } from "react-router-dom";
import { Navbar, ProductCard, Footer, Back } from "../components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSellerProduct } from "../store/Products";
import { HiOutlinePlusCircle } from "react-icons/hi";
import decode from "jwt-decode";

const SellerProfile = ({ setId }) => {
  const [menu, setMenu] = useState("all");
  const { user } = useSelector((state) => state.auth);
  const { productsSeller } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const decoded = user ? decode(user) : null;

  useEffect(() => {
    if (!decoded?.user?.is_seller) {
      return (window.location.href = "/");
    }
    dispatch(GetSellerProduct(decoded?.user?.id));
  }, [user]);

  return (
    <div className="py-10 px-20">
      <div className=" text-button font-bold text-[1rem] space-x-12 flex flex-row items-center">
        <Back />
        <button onClick={() => setMenu("all")} className="text-2xl">
          Semua Product
        </button>
        <div className="flex flex-row items-center space-x-4">
          <div className="w-[3px] h-7 bg-button ml-7" />
          <button onClick={() => setMenu("statiska")} className="text-[20px]">
            Statiska
          </button>
        </div>
      </div>
      {menu === "all" && (
        <div className="w-full">
          <div className="mt-10 grid grid-cols-4 gap-4 mb-12">
            {productsSeller?.map((product, idx) => (
              <ProductCard
                key={idx}
                product={product}
                setId={setId}
                type="seller"
              />
            ))}
          </div>
          <Link to="/startselling">
            <div className="text-center pb-24  flex flex-col items-center ">
              <div className="relative flex flex-col items-center group/item">
                <button className="flex flex-row text-button text-[200px]  transition duration-[1000ms] group-hover/item:-translate-x-52 ">
                  <HiOutlinePlusCircle />
                </button>
                <div className="group/item py-12 absolute bottom-6 cursor-pointer ">
                  <div className="text-button group/edit invisible group-hover/item:visible cursor-pointer ">
                    <span className="font-bold text-[20px] delay-500 invisible group-hover/item:visible">
                      Add More Products?
                    </span>
                    <p className="text-gray-400 text-[10px] delay-500 invisible group-hover/item:visible">
                      {" "}
                      lorem ipsum herit nempil sofka urheja
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
      {menu === "statiska" && (
        <div className="w-full">
          <h2>Statistika</h2>
        </div>
      )}
    </div>
  );
};

export default SellerProfile;
