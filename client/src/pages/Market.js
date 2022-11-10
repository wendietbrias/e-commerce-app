import React, { useState, useEffect } from 'react';
import { Navbar, Footer, Back } from "../components";
import { useSelector } from "react-redux";
import { ProductCard } from "../components";
import { HiOutlinePlusCircle } from "react-icons/hi";
 
const datadummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;

function Market(props) {
    const [category, setCategory] = useState("tampil");
    const [components, setComponent] = useState("muncul");
  return (
     <section className="flex flex-col justify-between min-h-screen w-full">
      <Navbar />
      <div className="mx-auto">
    <div className="pt-20 pb-4 px-20 text-button font-bold text-[50px] space-x-12 flex flex-row items-center">
    <Back /><button onClick={()=> setCategory("tampil")}>Semua Product</button> 
    <div className="flex flex-row items-center space-x-10">
    <div className="w-[3px] h-7 bg-button ml-20" />
    <button onClick={()=> setCategory("statiska")} className="text-[20px]">Statiska</button>
    </div>
    </div>
    {category==="tampil"&&(
<div>
<div className="px-20 grid grid-cols-5 gap-4 ">
          {datadummy?.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
        <div className='text-center pb-24  flex flex-col items-center '> 
<div className="relative flex flex-col items-center group/item">
<button className='flex flex-row text-button text-[200px]  transition duration-[1000ms] group-hover/item:-translate-x-52 '>
<HiOutlinePlusCircle />
</button>
<div className='group/item py-12 absolute bottom-6 cursor-pointer '>
<div className='text-button group/edit invisible group-hover/item:visible cursor-pointer '> 
<span className='font-bold text-[20px] delay-500 invisible group-hover/item:visible'>
Add More Products?
</span>
<p className='text-gray-400 text-[10px] delay-500 invisible group-hover/item:visible'> lorem ipsum herit nempil sofka urheja</p>
</div>
</div>
</div>

</div>
</div>
    )
          }
            {category==="statiska"&&(

<div className='w-screen h-screen bg-[#E0E8DE] '>
   <div className=''></div>
</div>

    )
          }

    </div>
      <Footer />
    </section>
  )
}

export default Market
