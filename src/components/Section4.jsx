import React, { useContext } from "react";
import { ModeContext } from "../context/Theme";

const Section4 = () => {
    const { theme } = useContext(ModeContext)
    return (
        <div className=" border-l border-b pr-[30px] ">
            <div className="grid grid-cols-2 pl-[30px] pr-[60px] pt-[100px] pb-[30px] border-b ">
                <p></p>
                <div>
                    <p className={` text-[22px] ${ theme ? " text-[#ff6b47] " : "text-[#52002d]"} mb-[30px] font-semibold `} >We speak your language</p>
                    <p className=" text-[45px] leading-[55px] font-medium mb-[30px] " >
                        Wondering how well we know your industry? Curious which
                        tech stacks we support?
                    </p>
                    <p className="text-[18px] ">
                        Spanning 30+ verticals and 25+ technologies, our team
                        has designed and implemented innovative solutions to
                        suit even the most unique needs.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 pl-[30px] py-[40px] border-b " >
                <p className={` text-[28px] font-medium ${ theme ? "text-[#ff6b47] " : "text-[#52002d]" } `} >Expertise</p>

                <div className="grid grid-cols-2 gap-3 justify-between min-w-[50%] " >
                    <div className="flex flex-col gap-2 pl-[-30px] " >
                        <p className="text-[22px] font-medium underline " >Software development</p>
                        <p className="text-[22px] font-medium underline " >Web development</p>
                        <p className="text-[22px] font-medium underline " >Mobile development</p>
                        <p className="text-[22px] font-medium underline " >Startup services</p>
                        <p className="text-[22px] font-medium underline " >Cloud services</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-[22px] font-medium underline " >Blockchain</p>
                        <p className="text-[22px] font-medium underline " >AR/VR</p>
                        <p className="text-[22px] font-medium underline " >Salesforce</p>
                        <p className="text-[22px] font-medium underline " >Artificial intelligence</p>
                        <p className="text-[22px] font-medium underline " >Internet of things</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 pl-[30px] py-[40px] " >
                <p className={` text-[28px] font-medium ${ theme ? "text-[#ff6b47] " : "text-[#52002d]" } `} >Industries</p>

                <div className="grid grid-cols-2 gap-3 justify-between min-w-[50%] " >
                    <div className="flex flex-col gap-2 pl-[-30px] " >
                        <p className="text-[22px] font-medium underline " >Fintech</p>
                        <p className="text-[22px] font-medium underline " >Healthtech</p>
                        <p className="text-[22px] font-medium underline " >Edtech</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-[22px] font-medium underline " >Blockchain</p>
                        <p className="text-[22px] font-medium underline " >Real estate</p>
                        <p className="text-[22px] font-medium underline " >Marketing/Adtech</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
