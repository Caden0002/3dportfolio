import React, { useEffect, useState } from "react";
import ComputersCanvas from "./Computers.jsx";
import '../../styles.css';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const backgroundStyle = {
    backgroundImage: `url(/herobackground.svg)`,
    backgroundSize: 'cover',
};
const header = "Hi, my name is";
const name = "Caden Chen.";
const header2 = "I design and build websites";



function Hero() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(opacity === 1 ? 0 : 1);
        }, 1200);

        return () => clearInterval(interval);
    }, [opacity]);

    const handleChevronClick = () => {
        const aboutSection = document.getElementById('AboutMe');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-backgroundColorPrimary" style={backgroundStyle}>
            <div id="Home" className="mx-auto h-screen relative">
                <div className="flex flex-col justify-center items-center h-full">
                    {/* Computer Canvas */}
                    <ComputersCanvas />
                    {/* Content */}
                    <div className="absolute inset-25 md:left-1/4 text-textColorPrimary" style={{ top: '12.5%', zIndex: 1 }}>
                        <h1 className="text-base text-textColorTertiary">{header}</h1>
                        <h1 className="mt-4 text-6xl md:text-7xl 2xl:text-9xl font-bold">{name}</h1>
                        <h1 className="mt-6 text-base tracking-wide text-textColorSecondary">{header2}</h1>
                        <div className="sm:hidden absolute left-1/2 flex flex-col justify-center mt-4 text-textColorTertiary text-xs"  onClick={handleChevronClick}
                        >
                            <motion.div
                                animate={{ opacity: opacity }}
                                transition={{ duration: 0.7 }}
                            >
                                <FaChevronDown />
                            </motion.div>
                            <motion.div
                                animate={{ opacity: opacity }}
                                transition={{ duration: 0.7, delay: 0.3}}
                            >
                                <FaChevronDown />
                            </motion.div>
                            <motion.div
                                animate={{ opacity: opacity }}
                                transition={{ duration: 0.7, delay: 0.6}}
                            >
                                <FaChevronDown />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
