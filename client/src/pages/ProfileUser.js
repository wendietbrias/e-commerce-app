import React from 'react';
import { Navbar, Footer, Back } from "../components";
import { HiPencil } from "react-icons/hi";
const ProfileUser = () => {
  return (
    <div>
       <section className="flex flex-col justify-between min-h-screen w-full">
      <Navbar />
      
    <div className="px-20 pt-20 text-button font-bold text-[50px] space-x-12 flex flex-row items-center">
    <Back /><button> Profile</button>
</div>
<div className="mx-auto p-10">
<div className='flex flex-row '>
    <div className="py-12 px-24 flex flex-col space-y-4 border-[1.5px] border-button rounded-l-xl">
    <button className=" border-[1.5px] p-2 bg-gradient-to-r from-button to-white rounded-full  ">
    <img src='/assets/orang.jpg' className='h-[300px] rounded-full w-[300px]' />
    </button>
    <button className='bg-button text-white font-bold rounded-full p-4 transition ease-in duration-200 hover:bg-green-800 active:bg-green-900'>
        Change Profile Picture
    </button>
    <button className='bg-white border-2 border-button text-button font-bold rounded-full p-4'>
       Delete Picture
    </button>
    </div>
    <div className='bg-button rounded-r-xl '>
    <div className='py-12 px-24 flex flex-col space-y-10'>
<label className='font-semibold  text-[32px] text-white '> Nama Pengguna </label>
<div className='flex flex-row text-button text-[36px]  -space-x-10'>
<input type="nama"  placeholder='Jckyrvn' className='text-[22px] font-semibold text-[#646464] px-6 rounded-xl h-12 w-[400px]' />
<HiPencil className='self-center' />
</div>
<label className='font-semibold  text-[32px] text-white '> Email </label>
<div className='flex flex-row text-button text-[36px]  -space-x-10'>
<input type="email"  placeholder='jacky@gmail.com' className='text-[22px] font-semibold text-[#646464] px-6 rounded-xl h-12 w-[400px]' />
<HiPencil className='self-center' />
</div>
<label className='font-semibold  text-[32px] text-white '> Alamat </label>
<div className='flex flex-row text-button text-[36px]  -space-x-10'>
<input type="nama"  placeholder='Serdam' className='text-[22px] font-semibold text-[#646464] px-6 rounded-xl h-12 w-[400px]' />
<HiPencil className='self-center' />
</div>
    </div>
    </div>
    </div>
</div>
      <Footer />
      </section>
    </div>
  )
}

export default ProfileUser
