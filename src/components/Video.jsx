import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
    return (
        <div className="border-l">
            <div className="grid grid-cols-2 pt-[150px] pb-[40px] border-b  pr-[30px] ">
                <p></p>
                <div>
                    <p className=" text-[40px] font-bold mb-[20px] ">
                        Discover Vention in action
                    </p>
                    <p className=" font-thin text-[18px] ">
                        See firsthand what sets us apart — and how our approach
                        has translated into exponential growth for our clients
                        worldwide. Hit play to begin your journey with us.
                    </p>
                </div>
            </div>

            <div className=" grid place-content-center py-[40px] border-b ">
                <ReactPlayer
                    width={1200}
                    height={650}
                    controls
                    url={"https://youtu.be/CpO-2w7KjpE?si=twDHthbGN6tYJhHo"}
                ></ReactPlayer>
            </div>

            <div className="pt-[150px] px-[40px] pb-[40px] border-b" >
                <p className=" text-[40px] font-bold mb-[20px] ">Partnerships</p>
                <p className=" font-thin text-[18px] ">
                    Our network includes the world’s top tech leaders, ensuring
                    that our developers always have access to cutting-edge
                    technologies and products.
                </p>
            </div>
        </div>
    );
};

export default Video;
