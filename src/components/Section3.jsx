import React, { useContext, useState } from "react";
import { ModeContext } from "../context/Theme";

const Section3 = () => {
    const [staff, setStaff] = useState(1);
    const { theme} = useContext(ModeContext)

    return (
        <div className="border-l  ">
            <div className=" ourWork   pl-[30px] border-b ">
                <div className=" grid grid-cols-2 " >
                    <p></p>
                    <p className={` text-[50px] font-semibold pl-[30px] pt-[200px] pb-[50px] ${ theme ? "bg-[#29292b] " : "bg-white" } `}>How we work</p>
                </div>

                <div className="grid grid-cols-2" >
                        <div className=" flex justify-end overflow-hidden " >
                            <div className={` h-[200px] skew-x-[-45deg] mr-[-100px] w-[300px] ${ theme ? "bg-[#29292b] " : "bg-white" }  `}></div>
                        </div>
                        <div></div>
                </div>
            </div>

            <div
                className={`flex justify-between pl-[30px] border-b pr-[50px] min-h-[320px] h-full `}
            >
                <div
                    onMouseEnter={() => setStaff(1)}
                    className={`border-r pt-[30px] ${
                        staff == 1 ? "block max-w-[700px] " : null
                    } pr-[40px] dropDown ease-out duration-500 transition-all `}
                >
                    <p className="text-[26px] font-semibold mb-[50px] ">
                        01 Discovery
                    </p>
                    <p
                        className={` ${
                            staff == 1 ? "block " : "hidden"
                        } text-[26px] font-semibold ease-out duration-500 transition-all `}
                    >
                        We start with your vision: What do you want to build?
                        How can we accelerate your company’s growth to outpace
                        the competition?
                    </p>
                </div>

                <div
                    onMouseEnter={() => setStaff(2)}
                    className={`border-r pt-[30px] ${
                        staff == 2 ? "block max-w-[700px] " : null
                    } pr-[40px] dropDown ease-out duration-500 transition-all `}
                >
                    <p className="text-[26px] font-semibold mb-[50px] ">
                        02 Staffing
                    </p>
                    <p
                        className={` ${
                            staff == 2 ? "block " : "hidden"
                        } text-[26px] font-semiboldease-out duration-500 transition-all  `}
                    >
                        Next, we work with you to strategically assemble a team
                        with the precise skills needed to deliver on that vision
                        — and we do it fast. You’ll have resumes in hand for
                        review within 48 hours
                    </p>
                </div>

                <div
                    onMouseEnter={() => setStaff(3)}
                    className={`border-r pt-[30px] ${
                        staff == 3 ? "block max-w-[700px] " : null
                    } pr-[40px] dropDown ease-out duration-500 transition-all `}
                >
                    <p className="text-[26px] font-semibold mb-[50px] ">
                        03 Kickoff
                    </p>
                    <p
                        className={` ${
                            staff == 3 ? "block " : "hidden"
                        } text-[26px] font-semibold ease-out duration-500 transition-all `}
                    >
                        In as little as two weeks, your remote team is ready to
                        onboard and hit the ground running
                    </p>
                </div>

                <div
                    onMouseEnter={() => setStaff(4)}
                    className={` pt-[30px] ${
                        staff == 4 ? "block max-w-[700px] " : null
                    } pr-[40px] dropDown ease-out duration-500 transition-all `}
                >
                    <p className="text-[26px] font-semibold mb-[50px] ">
                        04 Ramp up
                    </p>
                    <p
                        className={` ${
                            staff == 4 ? "block " : "hidden"
                        } text-[26px] font-semibold dropDown ease-out duration-500 transition-all `}
                    >
                        Ready to scale up or ramp down the team? Our flexible
                        model was designed to grow alongside you, for as long as
                        you need
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section3;
