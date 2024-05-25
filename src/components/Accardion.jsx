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
import { ModeContext } from "../context/Theme";

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);
    const { theme } = React.useContext(ModeContext);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleMouseEnter = (panel) => () => {
        setExpanded(panel);
    };

    const accordionStyle = theme ? { backgroundColor: '#29292b', color: 'white' } : { backgroundColor: 'white', color: 'black' };
    const textStyle = theme ? { color: 'white' } : { color: 'black' };
    const iconStyle = theme ? { color: 'white' } : { color: '#004051' };
    const specialTextStyle = theme ? { color: '#aeffbe' } : { color: '#004051' };
    const hoverStyle = theme ? 'hover:text-[#aeffbe]' : 'hover:text-[#004051]';

    return (
        <div>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                style={accordionStyle}
            >
                <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={accordionStyle}
                    onMouseEnter={handleMouseEnter("panel1")}
                >
                    <Typography className="w-full grid grid-cols-2 items-center px-[40px]" style={accordionStyle}>
                        <Typography style={textStyle}> 
                            <p className="text-[18px] font-extralight">Fitness & wellness</p>
                        </Typography>
                        <Typography className="flex items-center justify-between w-full" style={accordionStyle}>
                            <Typography>
                                <p className={`text-[28px] underline ${hoverStyle}`} style={specialTextStyle}>ClassPass</p>
                            </Typography>
                            <Typography>
                                <LuArrowUpRight className={`text-[35px] ${hoverStyle}`} style={iconStyle}></LuArrowUpRight>
                            </Typography>
                        </Typography>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={accordionStyle}>
                    <Typography className="grid grid-cols-2" style={accordionStyle}>
                        <p></p>
                        <div className="pb-3 pr-[40px]" style={accordionStyle}>
                            <p className="font-thin mb-[50px]" style={textStyle}>
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
                style={accordionStyle}
            >
                <AccordionSummary
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    style={accordionStyle}
                    onMouseEnter={handleMouseEnter("panel2")}
                >
                    <Typography className="w-full grid grid-cols-2 items-center px-[40px]" style={accordionStyle}>
                        <Typography style={textStyle}> 
                            <p className="text-[18px] font-extralight">Foot & beverage</p>
                        </Typography>
                        <Typography className="flex items-center justify-between w-full" style={accordionStyle}>
                            <Typography>
                                <p className={`text-[28px] underline ${hoverStyle}`} style={specialTextStyle}>Bevi</p>
                            </Typography>
                            <Typography>
                                <LuArrowUpRight className={`text-[35px] ${hoverStyle}`} style={iconStyle}></LuArrowUpRight>
                            </Typography>
                        </Typography>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={accordionStyle}>
                    <Typography className="grid grid-cols-2" style={accordionStyle}>
                        <p></p>
                        <div className="pb-3 pr-[40px]" style={accordionStyle}>
                            <p className="font-thin mb-[50px]" style={textStyle}>
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
                style={accordionStyle}
            >
                <AccordionSummary
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    style={accordionStyle}
                    onMouseEnter={handleMouseEnter("panel3")}
                >
                    <Typography className="w-full grid grid-cols-2 items-center px-[40px]" style={accordionStyle}>
                        <Typography style={textStyle}> 
                            <p className="text-[18px] font-extralight">Fintech</p>
                        </Typography>
                        <Typography className="flex items-center justify-between w-full" style={accordionStyle}>
                            <Typography>
                                <p className={`text-[28px] underline ${hoverStyle}`} style={specialTextStyle}>DealCloud</p>
                            </Typography>
                            <Typography>
                                <LuArrowUpRight className={`text-[35px] ${hoverStyle}`} style={iconStyle}></LuArrowUpRight>
                            </Typography>
                        </Typography>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={accordionStyle}>
                    <Typography className="grid grid-cols-2" style={accordionStyle}>
                        <p></p>
                        <div className="pb-3 pr-[40px]" style={accordionStyle}>
                            <p className="font-thin mb-[50px]" style={textStyle}>
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
                style={accordionStyle}
            >
                <AccordionSummary
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    style={accordionStyle}
                    onMouseEnter={handleMouseEnter("panel4")}
                >
                    <Typography className="w-full grid grid-cols-2 items-center px-[40px]" style={accordionStyle}>
                        <Typography style={textStyle}> 
                            <p className="text-[18px] font-extralight">Healthtech</p>
                        </Typography>
                        <Typography className="flex items-center justify-between w-full" style={accordionStyle}>
                            <Typography>
                                <p className={`text-[28px] underline ${hoverStyle}`} style={specialTextStyle}>Dialogue</p>
                            </Typography>
                            <Typography>
                                <LuArrowUpRight className={`text-[35px] ${hoverStyle}`} style={iconStyle}></LuArrowUpRight>
                            </Typography>
                        </Typography>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={accordionStyle}>
                    <Typography className="grid grid-cols-2" style={accordionStyle}>
                        <p></p>
                        <div className="pb-3 pr-[40px]" style={accordionStyle}>
                            <p className="font-thin mb-[50px]" style={textStyle}>
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
                style={accordionStyle}
            >
                <AccordionSummary
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    style={accordionStyle}
                    onMouseEnter={handleMouseEnter("panel5")}
                >
                    <Typography className="w-full grid grid-cols-2 items-center px-[40px]" style={accordionStyle}>
                        <Typography style={textStyle}> 
                            <p className="text-[18px] font-extralight">Healthtech</p>
                        </Typography>
                        <Typography className="flex items-center justify-between w-full" style={accordionStyle}>
                            <Typography>
                                <p className={`text-[28px] underline ${hoverStyle}`} style={specialTextStyle}>Thirty Madison</p>
                            </Typography>
                            <Typography>
                                <LuArrowUpRight className={`text-[35px] ${hoverStyle}`} style={iconStyle}></LuArrowUpRight>
                            </Typography>
                        </Typography>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={accordionStyle}>
                    <Typography className="grid grid-cols-2" style={accordionStyle}>
                        <p></p>
                        <div className="pb-3 pr-[40px]" style={accordionStyle}>
                            <p className="font-thin mb-[50px]" style={textStyle}>
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
