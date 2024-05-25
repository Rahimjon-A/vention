import React, { useContext } from "react";
import { Logo } from "../assets/Logo";
import { ModeContext } from "../context/Theme";
import Toggle from "./Toggle";

const FooterBot = () => {
    const { theme } = useContext(ModeContext);
    return (
        <div className={` border-l ${theme ? "border-[#000]" : ""} `}>
            <div
                className={`grid grid-cols-[7fr_3fr] pl-[40px] border-b ${
                    theme ? "border-[#000]" : ""
                } `}
            >
                <div
                    className={` ${
                        theme ? "border-[#000]" : ""
                    } border-r relative pt-[40px] pb-[200px] `}
                >
                    <p className="text-[28px] mb-[15px] ">
                        Subscribe to our newsletter for industry <br /> insights
                        and company news!
                    </p>
                    <span className="border-b block w-[300px] pb-[10px] mb-[15px] ">
                        <input
                            className="bg-inherit text-[#b4b4b5] "
                            type="email"
                            placeholder="Enter email"
                        />
                    </span>

                    <span className="flex gap-2 ">
                        <input type="checkbox" />
                        <p className="text-[14px] text-[#b4b4b5] ">
                            {" "}
                            I agree to the{" "}
                            <span className=" underline text-[14px] text-[#b4b4b5]">
                                {" "}
                                Privacy Policy{" "}
                            </span>{" "}
                            and give my <br /> permission to process my personal
                            data for the purposes specified in the Privacy
                            Policy.
                        </p>
                    </span>

                    <Toggle />
                </div>

                <div>
                    <div className="grid grid-cols-2 w-full pt-[40px] pl-[30px] pb-[50px] justify-between">
                        <ul className=" flex flex-col gap-2 ">
                            <li className="mb-[10px] text-[#b4b4b5] ">About</li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Company
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Portfolio
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Partnership
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Newsroom
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Media kit
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Careers
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Contact
                            </li>
                        </ul>

                        <ul className=" flex flex-col gap-2 ">
                            <li className="mb-[10px] text-[#b4b4b5] ">
                                Delivery Models
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                DEdicated development terms
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Project-based delivery
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center justify-between px-[30px] w-full">
                        <img
                            src="https://ventionteams.com/_next/static/images/iso-d52fa14f616b2c18d46829f91e0a1a04.svg"
                            alt="image"
                        />
                        <img
                            src="https://ventionteams.com/_next/static/images/iso-d52fa14f616b2c18d46829f91e0a1a04.svg"
                            alt="image"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[7fr_3fr] pl-[40px]">
                <div
                    className={` border-r flex items-end justify-start pb-[50px] ${
                        theme ? "border-[#000]" : ""
                    } `}
                >
                    <img className="w-[300px] " src={Logo} alt="" />
                </div>

                <div className="pb-[50px] ">
                    <div className="grid grid-cols-2 justify-between pt-[40px] pl-[30px] pb-[50px]">
                        <ul>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Linkedin
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Instagram
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                X
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                YouTube
                            </li>
                        </ul>
                        <ul>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                +998 45039485-92{" "}
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li className=" hover:text-[#fe977e] cursor-pointer ">
                                USA new york
                            </li>
                        </ul>
                    </div>

                    <p className=" text-[14px] px-[30px] ">
                        © 2002 - 2024. Vention All Rights Reserved{" "}
                        <span className=" underline">Privacy Policy</span>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterBot;
