import React from 'react'

const DropDown2 = ({hendleEnterAbout, hendleLeaveAbout, about}) => {
  return (
    <div className={` container w-full  backdrop-filter backdrop-blur-[5px] flex justify-end h-[95vh] z-10 dropDown  absolute top-14  ${
        about ? " top-14 " : "top-[-95vh]"
    } `}>
<div
    onMouseEnter={hendleEnterAbout}
    onMouseLeave={hendleLeaveAbout}
    className={` bg-white  h-full dropDown  absolute border-l z-10 `}
>
   
   <div className='max-w-[1034px] ' >
   <div className="grid grid-cols-3 gap-[40px] pr-[40px] border-b pl-[30px] py-[20px] " >
        <p className=" text-[20px] text-[#52002d] font-medium " >Company</p>
        <div className="flex flex-col gap-3" >
            <p className=" cursor-pointer text-[22px] underline " >Who we are</p>
            <p className="text-[18px] mb-[40px] " >Impact on clients, communities, and our people</p>
            <p className=" cursor-pointer text-[22px] underline " >How we work</p>
            <p className="text-[18px]  " >Discover our formula for your success</p>
        </div>
        <div className="ml-[25px] flex flex-col gap-3 " >
        <p className=" cursor-pointer text-[22px] underline " >Careers</p>
            <p className="text-[18px] mb-[40px] " >Boost your career, boost global innovation</p>
            <p className=" cursor-pointer text-[22px] underline  " >Partnerships</p>
            <p className="text-[18px]  " >We team up with the top in tech to deliver top-tier results.</p>
        </div>
    </div>

    <div className="grid grid-cols-3 gap-[40px] pr-[40px] border-b pl-[30px] py-[20px] " >
        <p className=" text-[20px] text-[#52002d] font-medium " >Delivery models </p>
        <div className="flex flex-col gap-3" >
            <p className=" cursor-pointer text-[22px] underline " >IT staff augmentation</p>
            <p className=" cursor-pointer text-[22px] underline " >Dedicated development teams</p>

        </div>
        <div className="ml-[25px] flex flex-col gap-3 " >
            <p className=" cursor-pointer text-[22px] underline " >Software project outsourcing</p>

        </div>
    </div>

    <div className="grid grid-cols-3 gap-[40px] pr-[40px] border-b pl-[30px] py-[20px] " >
        <p className=" text-[20px] text-[#52002d] font-medium " >Discover more</p>
        <div className="flex flex-col gap-3" >
            <p className=" cursor-pointer text-[22px] underline " >Newsroom</p>
        </div>
        <div className="ml-[25px] flex flex-col gap-3 " >
            <p className=" cursor-pointer text-[22px] underline " >Media kit</p>
        </div>
    </div>
   </div>
</div>
</div>
  )
}

export default DropDown2