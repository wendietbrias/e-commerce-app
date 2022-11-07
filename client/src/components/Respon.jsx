import { useState } from "react";
const Respon = ({ title, setContent }) => {
    return(
      <button className="border-b-[1.5px] border-gray-200 flex flex-col p-2 cursor-pointer" onClick={()=>setContent(title)} >
       <p className="font-bold flex flex-row gap-2">{title} <p className="font-medium">Page ... </p></p>
        <p className="text-gray-400 font-medium text-sm">Dari: user@gmail.com</p>
        <p className="text-gray-400 font-medium text-sm self-end">1 detik yang lalu</p>
      </button>
    );
  };

  export default Respon;