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

function App() {
    return (
        <ModeProvider>
            <AppContent />
        </ModeProvider>
    );
}

function AppContent() {
    const { theme } = useContext(ModeContext);

    return (
        <div className={` ${ theme ? " bg-[#29292b] text-white " : " bg-white text-black " } relative`}>

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
            <div className={` container mx-auto pl-[100px]  ${ theme ? "bg-[#ebebed] text-black " : "bg-[#29292b] text-white" } `}>
                <FooterBot />
            </div>
        </div>
    );
}

export default App;

