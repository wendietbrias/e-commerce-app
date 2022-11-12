import { useEffect, useState } from "react";
import { Back, ProductCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { ClearFavorite, GetAllFavorites } from "../store/Favorite";
import decode from "jwt-decode";

const Favorite = () => {
  const [category, setCategory] = useState("tampil");
  const {
    auth: { user },
    favorite: { favorites },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const decoded = user ? decode(user) : null;

  useEffect(() => {
    dispatch(GetAllFavorites(decoded?.user?.id_user));
  }, []);

  return (
    <div className="p-20">
      <div className="text-button font-bold text-[30px] space-x-12 flex flex-row items-center">
        <Back />
        <button onClick={() => setCategory("tampil")}> Semua Product</button>
        <div className="flex flex-row items-center  space-x-10">
          <div className="w-[3px] h-7 bg-button ml-20" />
          <button
            onClick={() => dispatch(ClearFavorite(decoded?.user?.id_user))}
            className="text-[15px]"
          >
            Hapus semua dari Favorite
          </button>
        </div>
      </div>
      {category === "tampil" ? (
        <div className="grid grid-cols-4 gap-4">
          {favorites?.map((favorit, idx) => (
            <ProductCard type="user" product={favorit} key={idx} />
          ))}
        </div>
      ) : (
        {
          /* <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Peringatan!</strong>
  <span class="block sm:inline ml-2">Apakah anda yakin untuk mengapus semua favorite? ini akan menghilangkan semua product yang anda suka</span>
  <button className='bg-red-800  text-white rounded px-4 py-2 ml-4'>Hapus</button>
</div> */
        }
      )}

      {/* parent terbesar */}
    </div>
  );
};

export default Favorite;
