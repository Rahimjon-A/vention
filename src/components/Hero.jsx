import React, { useEffect, useState } from "react";
import { PiArrowUpRight } from "react-icons/pi";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";
import Carousel from "./Carousel";

const Hero = () => {
    const [slide, setSlide] = useState(1);
    const slideTitles = {
        1: "Engineering peace of mind",
        2: "International Invention Day",
        3: "AI innovation",
        4: "Expert software development",
    };

    const slideBtn = {
        1: "Get an setimate",
        2: "Enter the contest",
        3: "Read the repot",
        4: "Schedule a call",
    };
    const slideImg = [Image1, Image1, Image2, Image3, Image4];

    const slideContent = {
        1: "Vention developers partner with innovative companies from startups to Fortune 500s, lending the AI engineering expertise to propel them to new heights and the edge to outpace the competition.",
        2: "On May 16, Vention kicks off International Invention Day, celebrating human creativity and game-changing inventions. Until June 30, you’ll also have a chance to join the In:Vention Incubator and win 12 weeks of our top-tier services worth $150K USD in in-house software development.",
        3: "As pioneers in AI engineering, we view it as more than a shiny tool: it's a pillar of the new business normal. Those companies that embrace and leverage AI will set the standard and lead in their category. In our new State of AI report, we look at funding, investment, and valuation trends across the AI market.",
        4: "Get it done right — the first time. Our proven software expertise and engagement flexibility mean you don’t have to worry about timelines, processes, or outcomes. Proficient in web, mobile, cloud, and advanced tech like AI and VR, we empower you to innovate and grow your business at the scale and speed of future trends.",
    };

    const slideBg = {
        1: "bg-[#ff6a47]",
        2: "bg-[#ff6fff]",
        3: "bg-[#ff6a47]",
        4: "bg-[#3155ff]",
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlide((prevSlide) => (prevSlide % 4) + 1);
        }, 4000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className=" px-[30px] container mx-auto mt-[20px]  pb-[60px] border-b ">
            <div className="grid grid-cols-2 h-[200px] ">
                <div
                    className={` ${slideBg[slide]} grid items-center dropDown  `}
                >
                    <h1 className=" text-[70px] leading-[90%] pl-[30px] dropDown ">
                        {slideTitles[slide]}
                    </h1>
                </div>
                <div className="flex items-end justify-end pb-[20px] ">
                    <ul className="flex w-[400px] justify-between gap-5 ">
                        <li
                            onClick={() => setSlide(1)}
                            className={`text-[22px] cursor-pointer dropDown ${
                                slide == 1
                                    ? " border-[#39175b] text-[#39175b] grow"
                                    : "border-[#d2d2d5] text-[#d2d2d5]"
                            }  font-semibold p-2   border-t-[3px] `}
                        >
                            01
                        </li>
                        <li
                            onClick={() => setSlide(2)}
                            className={`text-[22px] cursor-pointer dropDown ${
                                slide == 2
                                    ? " border-[#39175b] text-[#39175b] grow"
                                    : "border-[#d2d2d5] text-[#d2d2d5]"
                            }  font-semibold p-2  border-t-[3px] `}
                        >
                            02
                        </li>
                        <li
                            onClick={() => setSlide(3)}
                            className={`text-[22px] cursor-pointer dropDown ${
                                slide == 3
                                    ? " border-[#39175b] text-[#39175b] grow"
                                    : "border-[#d2d2d5] text-[#d2d2d5]"
                            }  font-semibold p-2  border-t-[3px] `}
                        >
                            03
                        </li>
                        <li
                            onClick={() => setSlide(4)}
                            className={`text-[22px] cursor-pointer dropDown ${
                                slide == 4
                                    ? " border-[#39175b] text-[#39175b] grow"
                                    : "border-[#d2d2d5] text-[#d2d2d5]"
                            }   font-semibold p-2  border-t-[3px] `}
                        >
                            04
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-2 h-[520px] ">
                <div className="flex flex-col justify-end items-end pr-[20px] pb-[30px] ">
                    <div className=" max-w-[400px] ">
                        <p className="mb-[50px] text-[22px] leading-7 font-thin ">
                            {slideContent[slide]}
                        </p>
                        <button
                            className={`w-full flex p-[20px] justify-between items-center h-[70px] ${slideBg[slide]} hover:bg-[#52002d] hover:text-white dropDown `}
                        >
                            <span className="text-[28px] font-medium ">
                                {slideBtn[slide]}
                            </span>
                            <PiArrowUpRight className="text-[40px] font-bold "></PiArrowUpRight>
                        </button>
                    </div>
                </div>

                <div className="pb-[30px] relative overflow-hidden ">
                    <Carousel slide={slide} setSlide={setSlide}  >
                        {slideImg.map((item) => (
                            <img
                                src={item}
                                alt="image"
                                className=" max-h-[500px] w-full min-h-[500px] relative z-0 "
                            />
                        ))}
                    </Carousel>

                    <div className="w-[450px] h-[200px] skew-x-[-45deg] bg-white bottom-0 right-[-100px]  absolute" > </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
