import { useState } from "react";
import { Navbar,  } from "../components";
import { useSelector } from "react-redux";
import { Respon } from "../components";
import { IoMdMail } from "react-icons/io";
import { GoTrashcan } from "react-icons/go";

function Admin(props) {
  const [category, setCategory] = useState("");
  const [content,setContent] = useState("");

const datadummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const WrapperModal = ({ children, CloseModal }) => {
  return (
    <div
      onClick={CloseModal}
      className="fixed top-0 left-0 w-full h-screen bg-wrapper"
    >
      {children}
    </div>
  );
};
 

  return (
    <section className="flex flex-col justify-between min-h-screen w-full">
      <Navbar/>
     <div className="bg-gray-200 flex flex-row">
   
     <aside className="h-screen w-[35%]  bg-white border-[1.5px] border-gray-200">
    <div className="border-b-[1.5px] flex flex-row font-semibold p-8  justify-between">
      <div className="space-x-10">
        <button onClick={()=> {setCategory("feedback")} } className= {` tes hover:text-button active:text-green-800 focus:text-button after:text-button`}>
Feedback
<div className={`${category==="feedback"?"active":""} line`} >
</div>
        </button>
        <button onClick={()=> {setCategory("report")} } className={`tes hover:text-button active:text-green-800 focus:text-button after:text-button `}>
Report
<div className={`${category==="report"?"active":""} line`}>
</div>
        </button>
        </div>
        <div className="space-x-10">
<button className="text-[30px]" onClick={""}>
        <IoMdMail />
        </button>
        <button className=" bg-red-800 px-4 py-1 rounded-full text-[30px] text-white" onClick={""}>
        <GoTrashcan />
        </button>
        </div>
      
    </div>
   
    {category==="feedback" && (
<div className=" flex flex-col">
          {datadummy?.map((feedback, idx) => (
            <Respon key={idx} title={`Feedback pada ${feedback}`} setContent={setContent} />
          ))}
        </div>

    )}
    {category === "report" && (
                <div className="flex flex-col">
                {datadummy?.map((report, idx) => (
                           <Respon key={idx} title={`Report tentang ${report}`} setContent={setContent}  />
                         ))}
                       </div>
    )}
     </aside>
     <div>
      <h2>{content}</h2>
     {/* {category==="title" && (
<div className="">
          tes
        </div>

    )}

    {category === "title" && (
               <div>
                report
                       </div>
    )} */}
    </div>
     </div>
    
    </section>
  );
};


export default Admin;
