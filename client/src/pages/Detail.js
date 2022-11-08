import React from 'react'
import {Navbar,Footer} from "../components";
import { IoIosArrowBack } from "react-icons/io"
import { IoIosWarning } from "react-icons/io"
import { FaShoppingCart } from "react-icons/fa";

const Detail = () => {
    return(
        <div className='flex flex-col justify-between min-h-screen bg-gray-100'>
            <Navbar/> 
            <div className='  mx-[76px] mt-10 mb-14'>
                <div className=' text-[30px] text-[#197A09] font-bold'>
                    <button className='flex flex-row items-center px-[182px]'>
            <IoIosArrowBack/> 
            <h1 className='px-6'>Detail Sepeda Lipat</h1>
                    </button>
                </div>
            <main className='mt-6 mx-48'>
                <div className='relative'>
                <img src='/assets/fotoDetail.jpg' alt='fotoDetail'></img>
                <button className='absolute bottom-0 right-0 items-center font-semibold text-white flex flex-row px-4 py-2 bg-[#EC695E] rounded-md gap-x-2 m-4 opacity-[80%] hover:opacity-[100%] transition delay-75'>
                    <p className='text-black'>
                        <IoIosWarning/>
                    </p>
                    Report
                    </button>
                </div>
                <div className='mt-4 mb-4 flex flex-row items-center gap-x-4'>
                <button><img className ='max-w-[140px] rounded-lg opacity-[70%] hover:opacity-[100%] transition delay-75' src='/assets/fotoDetail.jpg' alt='foto1'></img></button>
                <button><img className ='max-w-[140px] rounded-lg opacity-[70%] hover:opacity-[100%] transition delay-75' src='/assets/fotoDetail.jpg' alt='foto2'></img></button>
                <button><img className ='max-w-[140px] rounded-lg opacity-[70%] hover:opacity-[100%] transition delay-75' src='/assets/fotoDetail.jpg' alt='foto3'></img></button>
                </div>
                <div className=''>
                <h1 className='text-2xl font-semibold'>Sepeda lipat TDR3000 multi function ferenheit Nobita X Tahilalats</h1>
                <h3 className='text-[#808080] text-md font-semibold'>Sepeda</h3>
                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec mi sapien, gravida ac mi sed, eleifend tempor sem. 
                    Suspendisse nisi lectus, bibendum placerat dui sed, sollicitudin gravida nibh. 
                    Praesent nec bibendum massa, vel vehicula turpis. Maecenas lobortis, justo eu luctus 
                </p>
                <div className=' flex mt-4 items-center'>
                <p className='text-2xl font-bold '>RP.1.711.199</p>
                <div className='flex flex-row border-2 border-[#197A09] rounded-md mx-16'>
                    <div className='flex items-center gap-x-4 items-center '><button className='rounded-r hover:bg-[#1C680F] transition delay-100 bg-button text-white py-0.5 px-3 font-semibold'>-</button></div>
                    <div className='mx-10'>1</div>
                    <div className='flex items-center gap-x-4'>
                        <button className='rounded-l hover:bg-[#1C680F] transition delay-100 bg-button text-white py-0.5 px-2.5 font-semibold'>
                            + </button>
                            </div>
                </div>
                    <button className=' mx-4 hover:bg-[#1C680F] transition delay-100 bg-button text-white py-[14px] px-6 rounded-lg font-semibold'>
                        <FaShoppingCart/>
                    </button>
                </div>
                </div>
                
            </main>
            </div> 
            <Footer/> 
        </div>
    )
}
export default Detail