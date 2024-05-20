import React from "react";
import { FaCcPaypal } from "react-icons/fa";
import { SiCocacola } from "react-icons/si";
import { FaVimeoSquare } from "react-icons/fa";
import { SiIbm } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaIdeal } from "react-icons/fa";
import { FcWikipedia } from "react-icons/fc";
import { FcSignature } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";

const Marqueetion = () => {
    return (
        <div className="border-l border-b py-[30px] ">
            <marquee direction="left" >
                <div className="flex w-full justify-between items-center gap-[100px] " >
                     <img src="https://ventionteams.com/media/documents/inc5000.svg" alt="" />
                     <img src="https://ventionteams.com/media/documents/financial_times.svg" alt="" />
                     <img src="https://ventionteams.com/media/documents/award_aws_kWAIyp0.svg" alt="" />
                     <img src="https://ventionteams.com/media/documents/The_Stevie_RgdSHUS.svg" alt="" />
                     <img src="https://ventionteams.com/media/documents/Global_Business_Excellence_Awards.svg" alt="" />
                     <img src="https://ventionteams.com/media/documents/iaop.svg" alt="" />
                     <img src="https://ventionteams.com/media/documents/gptw_greyscale.svg" alt="" /> 
                    
                </div>
            </marquee>
        </div>
    );
};

export default Marqueetion;
