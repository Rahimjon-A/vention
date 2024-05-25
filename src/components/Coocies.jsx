import React, { useContext } from 'react'
import { ModeContext } from '../context/Theme';

const Coocies = () => {
    const { theme, modal, showModal } = useContext(ModeContext);
  return (
    <div
    className={` ${ modal ? "block opacity-100" : "hidden opacity-0 " } py-[8px] absolute  ${ theme ? "bg-white text-black" : "bg-[#29292b] text-[white]" } border dropDown ease-out duration-1000 transition-all bottom-[-62px] right-[-490px] w-[500px] h-[315px]  `}
>
    <div className="flex items-center mb-[15px] justify-between border-b px-[20px] pb-[8px] ">
        <p className="text-[18px]" >Cookie settings</p>
        <button onClick={ showModal} className=" rotate-45 text-[32px] cursor-pointer  ">+</button>
    </div>
    <p className="pl-[20px] font-medium " > Your current state </p>
    <div className="border-b" >
        <div className="flex pl-[20px] items-center justify-start gap-1" >
            <button className=" rotate-45 text-[32px] ">
                +
            </button>
            <span className="text-[14px]" >Preferences</span>
        </div>
        <div className="flex pl-[20px] justify-start items-center gap-1" >
            <button className=" rotate-45 text-[32px] ">
                +
            </button>
            <span className="text-[14px]" >Analytical Cookies</span>
        </div>
        <div className="flex pl-[20px] items-center gap-1" >
            <button className=" rotate-45 text-[32px] ">
                +
            </button>
            <span className="text-[14px]" >Advertising Cookies</span>
        </div>
    </div>

    <div className=" grid grid-cols-2 gap-4 px-[20px] py-[15px] " >
        <button className={` border py-[5px] text-[#7f7f80] `} >Withdraw your consent</button>
        <button className={` border py-[5px]${ theme ? " bg-black text-white" : " bg-white text-black " }`} >Change your consent</button>
    </div>

</div>
  )
}

export default Coocies