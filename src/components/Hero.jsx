import React from "react";
import ComputersCanvas from "./Computers.jsx";
import '../../styles.css';

const backgroundStyle = {
    backgroundImage: `url(/herobackground.svg)`,
    backgroundSize: 'cover',
};
const header = "Hi, my name is";
const name = "Caden Chen.";
const header2 = "I design and build websites";

function Hero() {
    return (
        <div className="bg-backgroundColorPrimary" style={backgroundStyle}>
            <div id="Home" className="mx-auto h-screen relative">
                <div className="flex flex-col justify-center items-center h-full">

                    {/* Computer Canvas */}
                    <ComputersCanvas />

                    {/* Content */}
                    <div className="absolute inset-25 md:left-1/4 text-textColorPrimary" style={{ top: '12.5%', zIndex: 1 }}>
                        <h1 className="text-xl text-textColorTertiary">{header}</h1>
                        <h1 className="mt-4 text-6xl md:text-8xl 2xl:text-9xl font-bold">{name}</h1>
                        <h1 className="mt-6 text-xl tracking-wide text-textColorSecondary">{header2}</h1>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;
