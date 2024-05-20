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

function App() {
    return (
        <>
            <Header />
            <Hero />
            <div className=" container mx-auto pl-[100px] ">
                <Section1 />
                <Section2/>
                <Marqueetion/>
                <Section3/>
                <Section4/>
                <Slider/>
                <Video/>
                <Marqueetion/>
                <OurWork/>
                <Footer/>
            </div>

            <div  className=" container mx-auto pl-[100px]  bg-[#29292b] text-white " >
                <FooterBot/>
            </div>
        </>
    );
}

export default App;
