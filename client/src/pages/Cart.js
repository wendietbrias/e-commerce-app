import React from 'react';
import {Navbar,Footer} from "../components";
const Cart = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen bg-gray-100'>
        <Navbar/>
<div className=' mx-[80px] min-h-max py-12 space-y-6'>
    <h1 className='font-bold text-[36px]'>Keranjang</h1>
    <div className='flex flex-row '>
        <div className='bg-white flex flex-row p-6 rounded-md w-[50%]  space-x-6'>
            <div className='md:flex'>
                <div className='md:shrink-0'>
                <img className='w-full object-cover md:h-full md:w-48 lg:58 rounded-lg' src='assets/Rectangle 65.jpg' alt='sepeda'></img>
                </div>
            </div>
            <div className='flex flex-col max-w-xs break-words '>
                    <h1 className='font-semibold text-2xl'>
                    Sepeda lipat TDR3000 multi function ferenheit Nobita X Tahilalats 
                    </h1>
                    <h2 className='flex flex-row text-[#197A09] text-2xl font-semibold space-y-2'>Rp1.711.988<h3 className='text-[#9D9D9D]'>/pcs</h3></h2>
                <div className='flex py-3'>
                    <div className='flex items-center gap-x-4'><button className='hover:bg-[#1C680F] transition delay-100 bg-button text-white py-0.5 px-3  rounded-md font-semibold'>-</button></div>
                    <div className='mx-4'>1</div>
                    <div className='flex items-center gap-x-4'><button className='hover:bg-[#1C680F] transition delay-100 bg-button text-white py-0.5 px-2.5 rounded-md font-semibold'>+</button></div>
                </div>
            </div>
        </div>
        <div className=' px-2 ml-20 bg-white w-[38%] rounded-xl'>
                <div className='flex justify-center font-bold text-xl  pt-3 pb-2 border-b-2 border-gray-200'>
                <h2>Total</h2>
                 </div>
                <div className='flex flex-row justify-between px-4 py-4'>
                <p className='text-gray-400 font-semibold text-2xl'>Sub Total</p>
                <p className='text-2xl font-semibold'>Rp1.711.899</p>
                </div>
                <div className='flex flex-col items-center px-4'>
                    <button className='w-full pt-3 pb-3 m-2 bg-[#197A09] rounded-xl hover:bg-[#1C680F] transition delay-70 font-bold text-white'>Beli Sekarang</button>
                    <button className='w-full m-2 pt-3 pb-3 font-bold rounded-xl hover:bg-[#E8E8E8] transition delay-70 border-[1px] border-black'>Lanjut Berbelanja</button>
                </div>
        </div>
    </div>
</div>
        <Footer/>
    </div>
    
  )
}

export default Cart