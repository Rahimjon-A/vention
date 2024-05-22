import React, { useContext } from "react";
import { ModeContext } from "../context/Theme";

const Section2 = () => {
    const { theme} = useContext(ModeContext)
    return (
        <div>
            <div className="border-l pl-[30px] py-[50px] border-b ">
                <div className="grid grid-cols-2 ">
                    <p className={` text-[28px] ${ theme ? "text-[#ff6b47] " : "text-[#52002d]" } font-medium `}>
                        Key stats
                    </p>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className={` text-[90px] ${ theme ? "text-[#ff6b47] " : "text-[#52002d]" } mb-[20px] font-thin `}>
                                500+
                            </p>
                            <p>award-winning clients</p>
                        </div>
                        <div>
                            <p className={` text-[90px] ${ theme ? "text-[#ff6b47] " : "text-[#52002d]" } mb-[20px] font-thin `}>
                                $15B+
                            </p>
                            <p>in client acquisitions</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 mt-[50px] ">
                    <div>
                        <p className={` text-[90px] ${ theme ? "text-[#ff6b47] " : "text-[#52002d]" } mb-[20px] font-thin `}>
                            36
                        </p>
                        <p>month average engagement</p>
                    </div>
                    <div>
                        <p className={` text-[90px] ${ theme ? "text-[#ff6b47] " : "text-[#52002d]" } mb-[20px] font-thin `}>
                            20+
                        </p>
                        <p>client IPOs supported</p>
                    </div>
                    <div>
                        <p className={` text-[90px] ${ theme ? "text-[#ff6b47] " : "text-[#52002d]" } mb-[20px] font-thin `}>
                            20+
                        </p>
                        <p>years of experience</p>
                    </div>
                    <div>
                        <p className={` text-[90px] ${ theme ? "text-[#ff6b47] " : "text-[#52002d]" } mb-[20px] font-thin `}>
                            3K+
                        </p>
                        <p>world-class engineers</p>
                    </div>
                </div>
            </div>

            <div className="border-l pl-[30px] border-b pt-[150px] pb-[40px] ">
                <p className=" text-[45px] font-semibold mb-[10px] " >Trusted by the best</p>
                <p className="font-thin text-[20px] " >
                    Companies ranging from early-stage startups to Fortune 500
                    enterprises partner with us to develop game-changing growth
                    solutions.
                </p>
            </div>
        </div>
    );
};

export default Section2;
