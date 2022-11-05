import React, { useState, useEffect } from 'react';
import { Navbar, Footer, Back } from "../components";
import { useSelector } from "react-redux";

function Favorit(props) {
  const [category, setCategory] = useState("tampil");
const Favorit = () => {
  const { user } = useSelector((state) => state.auth);
};
  return (
    <section className="flex flex-col justify-between min-h-screen w-full">
      <Navbar />

    <div className="p-20">
    <div className="text-button font-bold text-[50px] space-x-12 flex flex-row items-center">
    <Back /><button onClick={()=> setCategory("tampil")}> Semua Product</button> 
    <div className="flex flex-row items-center  space-x-10">
    <div className="w-[3px] h-7 bg-button ml-20" />
    <button onClick={()=> setCategory("hapus")} className="text-[20px]">Hapus semua dari Favorite</button>
    </div>
    </div>
    {category==="tampil"?(
<div>

</div>
    ):(
{/* <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Peringatan!</strong>
  <span class="block sm:inline ml-2">Apakah anda yakin untuk mengapus semua favorite? ini akan menghilangkan semua product yang anda suka</span>
  <button className='bg-red-800  text-white rounded px-4 py-2 ml-4'>Hapus</button>
</div> */}

    )
}
    

    {/* parent terbesar */}
    </div>

      <Footer />
    </section>
  );
};

export default Favorit;
