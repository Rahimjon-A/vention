import React, { useState } from "react";
import Person1 from "../assets/person1.jpg";
import Person2 from "../assets/person2.jpg";
import Person3 from "../assets/person3.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Slider = () => {
    const [isShow, setIsShow] = useState(0);

    const HandlePrev = () => {
        if( isShow > 0 ) {
            setIsShow(isShow - 1)
        }
    }
    const HandleNext = () => {
        if( isShow < 2 ) {
            setIsShow(isShow + 1)
        }
    }

    return (
        <div className="border-l border-b ">
            <div className=" overflow-hidden w-full z-0 relative bg-[#ff6fff] max-h-[780px]  mb-[80px] pb-[200px] ">
                <div
                    style={{ transform: `translateX(-${isShow * 100}% )` }}
                    className="flex w-full transition-transform ease-out duration-500 z-0 relative"
                >
                    <div
                        className={` min-w-full transition-all ease-out duration-500 z-0 flex gap-[150px] mt-[100px] px-[40px] h-full `}
                    >
                        <div className=" flex flex-col gap-[20px] min-w-[220px] ">
                            <img
                                className=" w-[220px] h-[220px] mb-[10px] "
                                src={Person1}
                                alt="image"
                            />
                            <p className=" text-[22px] font-medium ">
                                Benjamin Maisano
                            </p>
                            <p className="">CTO at Mount Sinai</p>
                        </div>

                        <dir>
                            <p className=" text-[45px] font-medium mb-[30px]">
                                "Vention has provided very talented engineers
                                across web Ul, mobile, backend APIs, and system
                                designs, to data integrations and beyond.
                            </p>
                            <p className="text-[18px] font-thin ">
                                Their staff integrated quickly and were
                                dedicated to the internal teams throughout the
                                relationship, acting as long term partners in
                                our strategic digital efforts."
                            </p>
                        </dir>
                    </div>

                    <div
                        className={` min-w-full transition-all ease-out duration-500 z-0 flex gap-[150px] mt-[100px] px-[40px] h-full `}
                    >
                        <div className=" flex flex-col gap-[20px] min-w-[220px] ">
                            <img
                                className=" w-[220px] h-[220px] mb-[10px] "
                                src={Person2}
                                alt="image"
                            />
                            <p className=" text-[22px] font-medium ">
                                Guy Blachman
                            </p>
                            <p>Executive Chairman of Carson Living</p>
                        </div>

                        <dir>
                            <p className=" text-[45px] font-medium mb-[30px]">
                                "The service they provide is outstanding;
                                they're excellent engineers who know all the
                                tools and deliver consistent quality.
                            </p>
                            <p className="text-[18px] font-thin ">
                                When we wanted to add a QA person, they had a
                                great resume for us the next day. They're good
                                employees, they show up for work on time, and
                                they go the extra mile if needed. We treat them
                                as an integral part of our organization."
                            </p>
                        </dir>
                    </div>

                    <div
                        className={` min-w-full transition-all ease-out duration-500 z-0 flex gap-[150px] mt-[100px] px-[40px] h-full `}
                    >
                        <div className=" flex flex-col gap-[20px] min-w-[220px] ">
                            <img
                                className=" w-[220px] h-[220px] mb-[10px] "
                                src={Person3}
                                alt="image"
                            />
                            <p className=" text-[22px] font-medium ">
                                Sean Grundy
                            </p>
                            <p>CEO at Bevi</p>
                        </div>

                        <dir>
                            <p className=" text-[45px] font-medium mb-[30px]">
                                "As an loT company, we've been impressed at how
                                effectively Vention has been able to help us
                                from afar.
                            </p>
                            <p className="text-[18px] font-thin ">
                                They are clear and comprehensive when it comes
                                to project planning, budgeting, collecting user
                                feedback, and revising their work."
                            </p>
                        </dir>
                    </div>
                </div>

                <div className="flex absolute z-10 bottom-14 left-10 gap-4 items-center">
                    <button
                        onClick={HandlePrev}
                        className={` ${ isShow == 0 ? " bg-inherit" : "bg-black text-white " }   transition-all text-[30px] rounded-full border border-[#000] p-2 `}
                    >
                        <FaArrowLeft></FaArrowLeft>
                    </button>
                    <button
                        onClick={HandleNext}
                        className={` ${ isShow == 2 ? "bg-inherit" : "bg-black text-white " }  transition-all text-[30px] rounded-full border border-[#000] p-2 `}
                    >
                        <FaArrowRight></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
