import React, { useState, useEffect } from 'react';
import { Navbar, Footer, Back } from "../components";

function ProfileAdmin(props) {
  const [category, setCategory] = useState("");


  return (
    <section className="flex flex-col justify-between min-h-screen w-full">
      <Navbar />

      <div className="p-20">
    <div className="text-button font-bold text-[50px] space-x-12 flex flex-row items-center">
    <Back /><button> Profile</button>
</div>
<div className='relative block'>
<button className="ml-[43%] mr-[43%] p-2 bg-gradient-to-r from-button to-white rounded-full relative block -mt-20 transtion  hover:animate-bounce " onMouseLeave={()=> setCategory("keluar")} onMouseOver={()=> setCategory("tambah")}>
    <img src='/assets/orang.jpg'  className='h-[210px] rounded-full ' />
    {category=== "keluar"&&(
        <div></div>
        )
}
{category=== "tambah"&&(
        <div className='-mt-10 ml-24 border border-white p-2 absolute rounded-full delay-1000 bg-button text-white '>Change Picture</div>
        )
}

</button>
<img src="/assets/Subtract.jpg" className='block -mt-40 mx-auto py-6 ' />

<div className='block'>
<div className='absolute ml-60 -mt-[600px] flex flex-col space-y-10'>
<label className='font-semibold  text-[32px] text-white '> Nama Pengguna </label>
<div className='relative flex items-center'>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute ml-[360px]'>
<g clip-path="url(#clip0_48_178)">
<path d="M14.1677 0.753906L12.2771 2.64453L17.3552 7.72266L19.2458 5.83203C20.2224 4.85547 20.2224 3.27344 19.2458 2.29688L17.7068 0.753906C16.7302 -0.222656 15.1482 -0.222656 14.1716 0.753906H14.1677ZM11.3943 3.52734L2.28879 12.6367C1.88254 13.043 1.58567 13.5469 1.4216 14.0977L0.0387918 18.7969C-0.0588645 19.1289 0.0309793 19.4844 0.273167 19.7266C0.515354 19.9688 0.870823 20.0586 1.19895 19.9648L5.89817 18.582C6.44895 18.418 6.95285 18.1211 7.3591 17.7148L16.4724 8.60547L11.3943 3.52734Z" fill="#197A09"/>
</g>
<defs>
<clipPath id="clip0_48_178">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
<input type="nama"  placeholder='Jckyrvn' className='text-[22px] font-semibold text-[#646464] px-6 rounded-xl h-12 w-[400px]' />
</div>

<label className='font-semibold  text-[32px] text-white '> Email </label>
<div className='relative flex items-center'>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute ml-[360px]'>
<g clip-path="url(#clip0_48_178)">
<path d="M14.1677 0.753906L12.2771 2.64453L17.3552 7.72266L19.2458 5.83203C20.2224 4.85547 20.2224 3.27344 19.2458 2.29688L17.7068 0.753906C16.7302 -0.222656 15.1482 -0.222656 14.1716 0.753906H14.1677ZM11.3943 3.52734L2.28879 12.6367C1.88254 13.043 1.58567 13.5469 1.4216 14.0977L0.0387918 18.7969C-0.0588645 19.1289 0.0309793 19.4844 0.273167 19.7266C0.515354 19.9688 0.870823 20.0586 1.19895 19.9648L5.89817 18.582C6.44895 18.418 6.95285 18.1211 7.3591 17.7148L16.4724 8.60547L11.3943 3.52734Z" fill="#197A09"/>
</g>
<defs>
<clipPath id="clip0_48_178">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
<input type="email"  placeholder='jacky@gmail.com' className='text-[22px] font-semibold text-[#646464] px-6 rounded-xl h-12 w-[400px]' />
</div>
<label className='font-semibold  text-[32px] text-white '> Alamat </label>
<div className='relative flex items-center'>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute ml-[360px]'>
<g clip-path="url(#clip0_48_178)">
<path d="M14.1677 0.753906L12.2771 2.64453L17.3552 7.72266L19.2458 5.83203C20.2224 4.85547 20.2224 3.27344 19.2458 2.29688L17.7068 0.753906C16.7302 -0.222656 15.1482 -0.222656 14.1716 0.753906H14.1677ZM11.3943 3.52734L2.28879 12.6367C1.88254 13.043 1.58567 13.5469 1.4216 14.0977L0.0387918 18.7969C-0.0588645 19.1289 0.0309793 19.4844 0.273167 19.7266C0.515354 19.9688 0.870823 20.0586 1.19895 19.9648L5.89817 18.582C6.44895 18.418 6.95285 18.1211 7.3591 17.7148L16.4724 8.60547L11.3943 3.52734Z" fill="#197A09"/>
</g>
<defs>
<clipPath id="clip0_48_178">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
<input type="nama"  placeholder='serdam' className='text-[22px] font-semibold text-[#646464] px-6 rounded-xl h-12 w-[400px]' />
</div>

</div>

{/* bagian kanan */}

<div className='absolute ml-[1060px] -mt-[600px] flex flex-col space-y-10'>
<label className='font-semibold  text-[32px] text-button '> Nama Toko </label>
<div className='relative flex items-center'>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute ml-[360px]'>
<g clip-path="url(#clip0_48_178)">
<path d="M14.1677 0.753906L12.2771 2.64453L17.3552 7.72266L19.2458 5.83203C20.2224 4.85547 20.2224 3.27344 19.2458 2.29688L17.7068 0.753906C16.7302 -0.222656 15.1482 -0.222656 14.1716 0.753906H14.1677ZM11.3943 3.52734L2.28879 12.6367C1.88254 13.043 1.58567 13.5469 1.4216 14.0977L0.0387918 18.7969C-0.0588645 19.1289 0.0309793 19.4844 0.273167 19.7266C0.515354 19.9688 0.870823 20.0586 1.19895 19.9648L5.89817 18.582C6.44895 18.418 6.95285 18.1211 7.3591 17.7148L16.4724 8.60547L11.3943 3.52734Z" fill="#197A09"/>
</g>
<defs>
<clipPath id="clip0_48_178">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
<input type="nama"  placeholder='Jckyrvn' className='placeholder-[#197A09] border-2 border-button text-[22px] font-semibold text-[#646464] px-6 rounded-xl h-12 w-[400px]' />
</div>

<label className='font-semibold  text-[32px] text-button '> Alamat Toko </label>
<div className='relative flex items-center'>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute ml-[360px]'>
<g clip-path="url(#clip0_48_178)">
<path d="M14.1677 0.753906L12.2771 2.64453L17.3552 7.72266L19.2458 5.83203C20.2224 4.85547 20.2224 3.27344 19.2458 2.29688L17.7068 0.753906C16.7302 -0.222656 15.1482 -0.222656 14.1716 0.753906H14.1677ZM11.3943 3.52734L2.28879 12.6367C1.88254 13.043 1.58567 13.5469 1.4216 14.0977L0.0387918 18.7969C-0.0588645 19.1289 0.0309793 19.4844 0.273167 19.7266C0.515354 19.9688 0.870823 20.0586 1.19895 19.9648L5.89817 18.582C6.44895 18.418 6.95285 18.1211 7.3591 17.7148L16.4724 8.60547L11.3943 3.52734Z" fill="#197A09"/>
</g>
<defs>
<clipPath id="clip0_48_178">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
<input type="email"  placeholder='jacky@gmail.com' className='placeholder-[#197A09] border-2 border-button text-[22px] font-semibold text-[#646464] px-6 rounded-xl h-12 w-[400px]' />
</div>
<label className='font-semibold  text-[32px] text-button '> Nomor Telpon Toko </label>
<div className='relative flex items-center'>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute ml-[360px]'>
<g clip-path="url(#clip0_48_178)">
<path d="M14.1677 0.753906L12.2771 2.64453L17.3552 7.72266L19.2458 5.83203C20.2224 4.85547 20.2224 3.27344 19.2458 2.29688L17.7068 0.753906C16.7302 -0.222656 15.1482 -0.222656 14.1716 0.753906H14.1677ZM11.3943 3.52734L2.28879 12.6367C1.88254 13.043 1.58567 13.5469 1.4216 14.0977L0.0387918 18.7969C-0.0588645 19.1289 0.0309793 19.4844 0.273167 19.7266C0.515354 19.9688 0.870823 20.0586 1.19895 19.9648L5.89817 18.582C6.44895 18.418 6.95285 18.1211 7.3591 17.7148L16.4724 8.60547L11.3943 3.52734Z" fill="#197A09"/>
</g>
<defs>
<clipPath id="clip0_48_178">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
<input type="nama"  placeholder='089615578090' className='placeholder-[#197A09] border-2 border-button text-[22px] font-semibold text-[#646464] px-6 rounded-xl h-12 w-[400px]' />
</div>
</div>

</div>


</div>
</div>
      <Footer />
      </section>
      
  )
};



export default ProfileAdmin
