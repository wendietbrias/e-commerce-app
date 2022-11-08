import React from 'react'
import {Navbar,Footer} from "../components";
import {AiFillCaretDown} from "react-icons/ai";

const Checkout = () => {
  return (
    <div>
        <div className='flex flex-col justify-between min-h-screen bg-gray-100'>
        <Navbar/>
        <div className='py-4 flex flex-row' >
        <div className='flex-flex-col mx-[80px] w-[60%]'>
            <div className='font-bold text-2xl my-3 '>
                <h1>Checkout Barang</h1>
            </div>
        <div className='py-3 px-4 bg-white rounded-lg flex flex-row items-center gap-x-8'>
                <img className='w-[110px] h-[75px]' src='assets/paper bag 1.jpg'></img>
            <h2 className='font-bold text-xl mx-4'>Ini adalah Tahap Akhir Pembelian Kamu</h2>
             </div>       
        <div className='mt-4'>
            <h1 className='text-2xl font-bold'>Barang yang di Checkout</h1>
            <div className='bg-white flex flex-row my-6 p-4 gap-4 rounded-lg'>
                <div className='h-48 w-[300px]'>
                <img className='h-28 min-h-full' src="assets/Rectangle 65.jpg"></img>
                </div>
                <div className='flex flex-col space-y-1 '>
                <h4 className='font-semibold text-2xl'>Sepeda lipat TDR3000 multi function ferenheit Nobita X tahilalats</h4>
                <h2 className='flex flex-row text-[#197A09] text-2xl font-semibold space-y-2'>Rp1.711.988<h3 className='text-[#9D9D9D]'>/pcs</h3></h2>
                <div className='flex flex-row gap-x-4 py-2'>
                    <button className='flex items-center hover:bg-[#1C680F] transition delay-100 bg-button text-white py-0.5 px-3  rounded-md font-semibold'>-</button>
                    <p>1</p>
                    <button className='flex items-center hover:bg-[#1C680F] transition delay-100 bg-button text-white py-0.5 px-2.5 rounded-md font-semibold'>+</button>
                </div>
                </div>
            </div>
          
        </div>
        </div>
            <aside className='w-[25%] bg-white rounded-xl pl-4 pr-4 mr-4 mt-14 mb-6 h-auto'>
               <h1 className='font-semibold text-xl  py-2 border-b-2 '>Ringkasan Belanja</h1>
                <div className='flex flex-row  my-4  gap-x-10'>
                <h2 className='text-[#9D9D9D] font-medium text-xl w-1/2'>Sub Total</h2>
                <h2 className='font-medium text-xl text-left w-1/4 text-left'>RP.1.711.999</h2> 
                </div>
                <div className='flex flex-row  my-4  gap-x-10  '>
                <h2 className='text-[#9D9D9D] font-medium text-xl w-1/2 '>Biaya layanan Aplikasi</h2>
                <h2 className='font-medium text-xl w-1/4 text-left'>RP10.000</h2>
                </div>
                <div className='flex flex-row my-4  gap-x-10 '>
                    <h2 className='text-[#39D9D9D] font-medium text-xl  w-48'>Pengiriman</h2>
                    <button className='flex items-center items-between justify-between pl-8 font-medium text-[#197A09] text-xl w-[121px] rounded-sm text-left outline outline-1 outline-[#197A09] text-center'>
                        J&T
                     <AiFillCaretDown /> 
                     </button>
                </div>
                <div className='flex flex-col pt-4'>
                <button className='w-full bg-[#197A09] rounded-xl pt-3 pb-3 font-bold text-white hover:bg-[#1C680F] transition delay-70'>
                    Beli Sekarang
                </button>
                <button className='w-full  mt-2 pt-3 pb-3 font-bold rounded-xl hover:bg-[#E8E8E8] transition delay-70 border-[1px] border-black'>
                    Lanjut Berbelanja
                    </button>
                </div>
            </aside>
        </div>
        <Footer/>
        </div>
    </div>
  )
}

export default Checkout