import React from "react";

const DropDown1 = ({ hendleMouseEnter, hendleMouseLeave, mouse }) => {
    return (
        <div
            className={` container w-full  backdrop-filter backdrop-blur-[5px] flex z-10 justify-end h-[95vh] dropDown  absolute top-14  ${
                mouse ? " top-14 " : "top-[-95vh]"
            } `}
        >
            <div
                onMouseEnter={hendleMouseEnter}
                onMouseLeave={hendleMouseLeave}
                className={` bg-white  h-full dropDown  absolute border-l z-10 `}
            >
                <div className="grid grid-cols-3 gap-[40px] pr-[100px] border-b pl-[30px] py-[20px] ">
                    <p className=" text-[20px] text-[#52002d] font-medium ">
                        Services
                    </p>
                    <div className="flex flex-col gap-3">
                        <p className=" cursor-pointer text-[22px] underline ">
                            Software Development
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            Web Development
                        </p>
                    </div>
                    <div className="ml-[25px] flex flex-col gap-3 ">
                        <p className=" cursor-pointer text-[22px] underline ">
                            Mobile App Development
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            IT services fot Startups
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-[40px] pr-[100px] border-b pl-[30px] py-[20px] ">
                    <p className=" text-[20px] text-[#52002d] font-medium ">
                        Idustries
                    </p>
                    <div className="flex flex-col gap-3">
                        <p className=" cursor-pointer text-[22px] underline ">
                            Fintech
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            Healthtech
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            Edtech
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            Gamedev
                        </p>
                    </div>
                    <div className="ml-[25px] flex flex-col gap-3 ">
                        <p className=" cursor-pointer text-[22px] underline ">
                            Realt Estate
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            {" "}
                            Ecommerce
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            {" "}
                            Marketing / adtech
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-[40px] pr-[100px] border-b pl-[30px] py-[20px] ">
                    <p className=" text-[20px] text-[#52002d] font-medium ">
                        Expertise
                    </p>
                    <div className="flex flex-col gap-3">
                        <p className=" cursor-pointer text-[22px] underline ">
                            Cloud
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            AR / VR
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            Blockchain
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            Salesforce
                        </p>
                    </div>
                    <div className="ml-[25px] flex flex-col gap-3 ">
                        <p className=" cursor-pointer text-[22px] underline ">
                            Internet of Things
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            AI
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            Big Data
                        </p>
                        <p className=" cursor-pointer text-[22px] underline ">
                            Cybersecurity
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDown1;
