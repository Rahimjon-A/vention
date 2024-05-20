import React, { useState } from "react";

const Section3 = () => {
    const [staff, setStaff] = useState(1);

    return (
        <div className="border-l  ">
            <div className="grid grid-cols-2 pl-[30px] py-[30px] border-b ">
                <p></p>
                <p className=" text-[50px] font-semibold ">How we work</p>
            </div>

            <div
                className={`flex justify-between pl-[30px] border-b pr-[50px] min-h-[320px] h-full `}
            >
                <div
                    onMouseEnter={() => setStaff(1)}
                    className={`border-r pt-[30px] ${
                        staff == 1 ? "block max-w-[700px] " : null
                    } pr-[40px] dropDown `}
                >
                    <p className="text-[26px] font-semibold mb-[50px] ">
                        01 Discovery
                    </p>
                    <p
                        className={` ${
                            staff == 1 ? "block " : "hidden"
                        } text-[26px] font-semibold `}
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
                    } pr-[40px] dropDown `}
                >
                    <p className="text-[26px] font-semibold mb-[50px] ">
                        02 Staffing
                    </p>
                    <p
                        className={` ${
                            staff == 2 ? "block " : "hidden"
                        } text-[26px] font-semibold `}
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
                    } pr-[40px] dropDown `}
                >
                    <p className="text-[26px] font-semibold mb-[50px] ">
                        03 Kickoff
                    </p>
                    <p
                        className={` ${
                            staff == 3 ? "block " : "hidden"
                        } text-[26px] font-semibold `}
                    >
                        In as little as two weeks, your remote team is ready to
                        onboard and hit the ground running
                    </p>
                </div>

                <div
                    onMouseEnter={() => setStaff(4)}
                    className={` pt-[30px] ${
                        staff == 4 ? "block max-w-[700px] " : null
                    } pr-[40px] dropDown `}
                >
                    <p className="text-[26px] font-semibold mb-[50px] ">
                        04 Ramp up
                    </p>
                    <p
                        className={` ${
                            staff == 4 ? "block " : "hidden"
                        } text-[26px] font-semibold dropDown `}
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
