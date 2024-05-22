import React, { useContext, useState } from "react";
import { Logo } from "../assets/Logo";
import { IoChevronDownOutline } from "react-icons/io5";
import { GoGlobe } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import DropDown1 from "./DropDown1";
import DropDown2 from "./DropDown2";
import { ModeContext } from "../context/Theme";

const Header = () => {
    const [mouse, setMouse] = useState(false);
    const [about, setAbout] = useState(false);
    const [globe, setGlobe] = useState(false);
    const { theme } = useContext(ModeContext);

    const hendleGlobeEnter = () => {
        setGlobe(true);
    };
    const hendleGlobeLeave = () => {
        setGlobe(false);
    };

    const hendleMouseEnter = () => {
        setMouse(true);
    };
    const hendleMouseLeave = () => {
        setMouse(false);
    };

    const hendleEnterAbout = () => {
        setAbout(true);
    };
    const hendleLeaveAbout = () => {
        setAbout(false);
    };

    return (
        <div className="relative">
            <nav className={`flex container ${ theme ? "bg-[#29292b] text-white " : "bg-white" } relative mx-auto pl-[30px]  z-20 justify-between items-center border-b `}>
                <div>
                    <img className="w-[120px] " src={Logo} alt="logo" />
                </div>

                <div className="flex items-center border-l ">
                    <ul className={`  flex items-center gap-[115px] `}>
                        <li
                            onMouseEnter={hendleMouseEnter}
                            onMouseLeave={hendleMouseLeave}
                            className=" cursor-pointer flex items-center py-4 gap-1 text-[18px] px-6 relative"
                        >
                            <span
                                className={` ${
                                    mouse ? "block" : "hidden"
                                } transition-all w-[110%] h-[3px] left-0 absolute bottom-[-2px] ${ theme ? " bg-[#ff6a47] " : "bg-black"} `}
                            ></span>
                            <span className={` ${ theme ? "hover:text-[#ff6a47]" : "hover:text-[#52002d]" } transition-all`}>
                                What we do
                            </span>{" "}
                            <IoChevronDownOutline
                                className={` ${
                                    mouse ? "rotate-180" : null
                                } transition-all `}
                            ></IoChevronDownOutline>
                        </li>
                        <li className={` cursor-pointer transition-all ${ theme ? "hover:text-[#ff6a47]" : "hover:text-[#52002d]" } text-[18px] py-4 `}>
                            Portfolio
                        </li>
                        <li className={` cursor-pointer transition-all ${ theme ? "hover:text-[#ff6a47]" : "hover:text-[#52002d]" } text-[18px] py-4 `}>
                            Insights
                        </li>
                        <li
                            onMouseEnter={hendleEnterAbout}
                            onMouseLeave={hendleLeaveAbout}
                            className=" cursor-pointer flex relative items-center px-6 text-[18px] py-4 gap-1"
                        >
                            <span
                                className={` block w-[100%] h-[3px]  ${
                                    about ? "block" : "hidden"
                                } left-0 absolute bottom-[-2px] ${ theme ? "bg-[#ff6a47]" : "bg-black" }`}
                            ></span>
                            <span className={`${ theme ? "hover:text-[#ff6a47]" : "hover:text-[#52002d]" } transition-all`}>
                                About us
                            </span>{" "}
                            <IoChevronDownOutline
                                className={`${
                                    about ? "rotate-180" : null
                                } transition-all `}
                            ></IoChevronDownOutline>
                        </li>
                    </ul>
                    <button className="text-[18px] py-4 px-6 bg-[#ff6a47] transition-all hover:bg-[#52002d] hover:text-white ">
                        Contact us
                    </button>
                    <div
                        onMouseEnter={hendleGlobeEnter}
                        onMouseLeave={hendleGlobeLeave}
                        className=" px-12 relative z-40 "
                    >
                        <span className="bg-[#ff6a47] transition-all globe-dot rounded-full w-2 h-2 absolute top-[-5px] right-[35%] "></span>
                        <GoGlobe className="text-[24px]"></GoGlobe>
                    </div>
                </div>
            </nav>

            <div
                onMouseEnter={hendleGlobeEnter}
                onMouseLeave={hendleGlobeLeave}
                className={` ${
                    globe ? "bottom-[-135px]" : " bottom-[0px] "
                } absolute ${ theme ? "bg-[#29292b]" : "bg-white" } z-0 w-[200px] dropDown  flex flex-col gap-3 right-0 border pr-[30px] pl-2 py-[20px]`}
            >
                <div className="flex cursor-pointer items-center gap-2">
                    <GoArrowRight />
                    <p className={`hover:text-[#52002d] font-medium transition-all ${ theme ? "hover:text-[#ff6a47]" : "hover:text-[#52002d]" } `} >US & Worldwide</p>
                </div>
                <div className="flex cursor-pointer items-center gap-2">
                    <GoArrowRight />
                    <p className={`hover:text-[#52002d] font-medium transition-all ${ theme ? "hover:text-[#ff6a47]" : "hover:text-[#52002d]" } `}>UK</p>
                </div>
                <div className="flex cursor-pointer items-center gap-2">
                    <GoArrowRight />
                    <p className={`hover:text-[#52002d] font-medium transition-all ${ theme ? "hover:text-[#ff6a47]" : "hover:text-[#52002d]" } `}>Dach</p>
                </div>
            </div>

            <DropDown1
                mouse={mouse}
                hendleMouseLeave={hendleMouseLeave}
                hendleMouseEnter={hendleMouseEnter}
            />
            <DropDown2
                about={about}
                hendleLeaveAbout={hendleLeaveAbout}
                hendleEnterAbout={hendleEnterAbout}
            />
        </div>
    );
};

export default Header;
