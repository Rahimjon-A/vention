import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { LuArrowUpRight } from "react-icons/lu";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    
                >
                    <Typography className=" w-full grid grid-cols-2 items-center px-[40px] ">
                        <Typography> <p className=" text-[18px] font-extralight" >Fitness & wellness</p> </Typography>

                        <Typography className="flex items-center justify-between w-full">
                            <Typography> <p className=" text-[#004051] text-[28px] underline " >ClassPass</p> </Typography>

                            <Typography>
                                <LuArrowUpRight className="text-[35px] text-[#004051] " ></LuArrowUpRight>
                            </Typography>
                        </Typography>
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>
                    <Typography className="grid grid-cols-2  ">
                        <p></p>
                        <div className="pb-3 pr-[40px] " >
                            <p  className=" font-thin mb-[50px] " >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet cupiditate, officia
                                dolorem id possimus vel explicabo, consectetur
                                aliquid reprehenderit nemo, hic illo neque
                                deleniti quis esse. Doloribus ipsam excepturi
                                nulla!
                            </p>
                            <img src={Image1} alt="image" />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary

                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                     <Typography className=" w-full grid grid-cols-2 items-center px-[40px] ">
                        <Typography> <p className=" text-[18px] font-extralight" >Foot & beverage</p> </Typography>

                        <Typography className="flex items-center justify-between w-full">
                            <Typography> <p className=" text-[#004051] text-[28px] underline " >Bevi</p> </Typography>

                            <Typography>
                                <LuArrowUpRight className="text-[35px] text-[#004051] " ></LuArrowUpRight>
                            </Typography>
                        </Typography>
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="grid grid-cols-2  ">
                        <p></p>
                        <div className="pb-3 pr-[40px] " >
                            <p  className=" font-thin mb-[50px] " >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet cupiditate, officia
                                dolorem id possimus vel explicabo, consectetur
                                aliquid reprehenderit nemo, hic illo neque
                                deleniti quis esse. Doloribus ipsam excepturi
                                nulla!
                            </p>
                            <img src={Image2} alt="image" />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                     <Typography className=" w-full grid grid-cols-2 items-center px-[40px] ">
                        <Typography> <p className=" text-[18px] font-extralight" >Fintech</p> </Typography>

                        <Typography className="flex items-center justify-between w-full">
                            <Typography> <p className=" text-[#004051] text-[28px] underline " >DealCloud </p> </Typography>

                            <Typography>
                                <LuArrowUpRight className="text-[35px] text-[#004051] " ></LuArrowUpRight>
                            </Typography>
                        </Typography>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography className="grid grid-cols-2  ">
                        <p></p>
                        <div className="pb-3 pr-[40px] " >
                            <p  className=" font-thin mb-[50px] " >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet cupiditate, officia
                                dolorem id possimus vel explicabo, consectetur
                                aliquid reprehenderit nemo, hic illo neque
                                deleniti quis esse. Doloribus ipsam excepturi
                                nulla!
                            </p>
                            <img src={Image3} alt="image" />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
            >
                <AccordionSummary
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                     <Typography className=" w-full grid grid-cols-2 items-center px-[40px] ">
                        <Typography> <p className=" text-[18px] font-extralight" >Healthtech</p> </Typography>

                        <Typography className="flex items-center justify-between w-full">
                            <Typography> <p className=" text-[#004051] text-[28px] underline " >Dialogue</p> </Typography>

                            <Typography>
                                <LuArrowUpRight className="text-[35px] text-[#004051] " ></LuArrowUpRight>
                            </Typography>
                        </Typography>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                <Typography className="grid grid-cols-2  ">
                        <p></p>
                        <div className="pb-3 pr-[40px] " >
                            <p  className=" font-thin mb-[50px] " >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet cupiditate, officia
                                dolorem id possimus vel explicabo, consectetur
                                aliquid reprehenderit nemo, hic illo neque
                                deleniti quis esse. Doloribus ipsam excepturi
                                nulla!
                            </p>
                            <img src={Image4} alt="image" />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
            >
                <AccordionSummary
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                     <Typography className=" w-full grid grid-cols-2 items-center px-[40px] ">
                        <Typography> <p className=" text-[18px] font-extralight" >Healthtech</p> </Typography>

                        <Typography className="flex items-center justify-between w-full">
                            <Typography> <p className=" text-[#004051] text-[28px] underline " >Thirty Madison</p> </Typography>

                            <Typography>
                                <LuArrowUpRight className="text-[35px] text-[#004051] " ></LuArrowUpRight>
                            </Typography>
                        </Typography>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                <Typography className="grid grid-cols-2  ">
                        <p></p>
                        <div className="pb-3 pr-[40px] " >
                            <p  className=" font-thin mb-[50px] " >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet cupiditate, officia
                                dolorem id possimus vel explicabo, consectetur
                                aliquid reprehenderit nemo, hic illo neque
                                deleniti quis esse. Doloribus ipsam excepturi
                                nulla!
                            </p>
                            <img src={Image1} alt="image" />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
