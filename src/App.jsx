import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Marqueetion from "./components/Marqueetion";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Slider from "./components/Slider";
import Video from "./components/Video";
import OurWork from "./components/OurWork";
import Footer from "./components/Footer";
import FooterBot from "./components/FooterBot";
import ModeProvider, { ModeContext } from "./context/Theme";
import { useContext } from "react";
import Toggle from "./components/Toggle";
import { PiCookieLight } from "react-icons/pi";
import Coocies from "./components/Coocies";

function App() {
    return (
        <ModeProvider>
            <AppContent />
        </ModeProvider>
    );
}

function AppContent() {
    const { theme, showModal } = useContext(ModeContext);

    return (
        <div>
            {/* position: fixed; z-index: 10; */}

            <div className="fixed top-[82%] left-[8px] z-10">
                <Toggle fromApp={true} />
            </div>

            <div
                onClick={showModal}
                className=" fixed top-[90%] left-[24px] cursor-pointer z-50 p-2 bg-[#434345] rounded-full "
            >
                <PiCookieLight className=" text-white text-[45px] "></PiCookieLight>
            </div>

            <div className="fixed top-[90%] left-[24px] z-50">
                <Coocies />
            </div>

            {/* position: relative */}

            <div
                className={` ${
                    theme
                        ? " bg-[#29292b] text-white "
                        : " bg-white text-black "
                } relative`}
            >
                <Header />
                <Hero />
                <div className=" container mx-auto pl-[100px] ">
                    <Section1 />
                    <Section2 />
                    <Marqueetion />
                    <Section3 />
                    <Section4 />
                    <Slider />
                    <Video />
                    <Marqueetion />
                    <OurWork />
                    <Footer />
                </div>
            </div>
            <div
                style={{ position: "relative", zIndex: 20 }}
                className={`container mx-auto pl-[100px]  ${
                    theme
                        ? "bg-[#ebebed] text-black "
                        : "bg-[#29292b] text-white"
                } `}
            >
                <div style={{ position: "relative", zIndex: 2 }}>
                    <FooterBot />
                </div>
            </div>
        </div>
    );
}

export default App;
