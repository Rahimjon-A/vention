import React from "react";
import ControlledAccordions from "./Accardion";
import { LuArrowUpRight } from "react-icons/lu";

const OurWork = () => {
    return (
        <div className="border-l">
            <div className="grid grid-cols-2 pt-[150px] px-[30px] border-b ">
                <p></p>
                <p className=" text-[40px] font-bold mb-[40px] ">Our Work</p>
            </div>

            <div className="acardion">
                <ControlledAccordions />
            </div>

            <div className=" cursor-pointer bg-[#5afb7a] hover:bg-[#004051] transition-all hover:text-white ">
                <div className="flex justify-between items-center px-[40px]  pr-[60px] py-[20px] ">
                    <p className="text-[25px] font-medium ">View all</p>
                    <LuArrowUpRight className="text-[35px] "></LuArrowUpRight>
                </div>
            </div>

            <div className=" pt-[150px] pl-[40px] pb-[40px] border-b " >
                <p className=" text-[45px] font-bold mb-[20px]  " >Recognized as a leader by those in the know</p>
                <p className="text-[22px] font-thin " >
                    Year after year, Vention has been counted among
                    best-in-class companies by the industry’s most respected
                    institutions.
                </p>
            </div>

            <div className="  py-[40px] px-[70px] border-b flex items-center justify-between "  >
                <img src="https://ventionteams.com/media/documents/inc5000.svg" alt="" />
                <img src="https://ventionteams.com/media/documents/financial_times.svg" alt="" />
                <img src="https://ventionteams.com/media/documents/award_aws_kWAIyp0.svg" alt="" />
                <img src="https://ventionteams.com/media/documents/The_Stevie_RgdSHUS.svg" alt="" />
                <img src="https://ventionteams.com/media/documents/Global_Business_Excellence_Awards.svg" alt="" />
                <img src="https://ventionteams.com/media/documents/iaop.svg" alt="" />
                <img src="https://ventionteams.com/media/documents/gptw_greyscale.svg" alt="" />
            </div>
        </div>
    );
};

export default OurWork;
