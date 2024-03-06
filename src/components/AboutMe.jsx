import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const heading = 'INTRODUCTION';
const heading2 = 'About Me';
const content = "I am a React Developer. I graduated with a Bachelor of Accountancy degree in 2023. Computers have always intrigued me, leading me to pursue a career in technology. I enjoy creating attractive and user-friendly interfaces. I'm passionate about using AI to address climate change and develop eco-friendly solutions. When I'm not working with computers, you can find me reading, running, or playing my piano.";
const content2 = "Here are a few <span style='color: #62FAD7;'>tech stack</span> that I work with:";
const techStackIcons = [
    { name: 'React', icon: <img src="/react.svg" alt="React" /> },
    { name: 'Tailwind', icon: <img src="/tailwind.svg" alt="Tailwind" />},
    { name: 'Figma', icon: <img src="/figma.svg" alt="Figma" />},
    { name: 'Framer Motion', icon: <img src="/framer.svg" alt="Framer" />},
    { name: 'Vite', icon: <img src="/vite.svg" alt="Vite" />},
];

function AboutMe() {
    const [contentRef, contentInView] = useInView();
    const contentControls = useAnimation();
    const iconControls = useAnimation();
    const [selectedTech, setSelectedTech] = useState('');

    useEffect(() => {
        if (contentInView) {
            contentControls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
            iconControls.start({ opacity: 1, transition: { duration: 1, delay: 0.5 } });
        } else {
            contentControls.start({ y: 20, opacity: 0, transition: { duration: 1} });
            iconControls.start({ opacity: 0, transition: { duration: 1 } });
        }
    }, [contentControls, iconControls, contentInView]);

    const handleIconClick = (techName) => {
        setSelectedTech(techName);
    };

    return (
        <div className="bg-backgroundColorPrimary">
            <div id="AboutMe" className="mx-auto flex flex-col min-h-screen justify-center px-8 md:px-0 md:w-2/3 2xl:w-1/2">
                <motion.div ref={contentRef} initial={{ y: 20, opacity: 0 }} animate={contentControls} className="md:w-2/3">
                    <h1 className="text-base text-textColorTertiary">{heading}</h1>
                    <h1 className="mt-4 text-5xl text-textColorPrimary font-bold">{heading2}</h1>
                    <h1 className="mt-6 space-y-2 text-sm text-textColorSecondary leading-loose font-inter">{content}</h1>
                    <h1 className="mt-6 space-y-2 text-sm text-textColorSecondary leading-loose font-inter">
                        <span dangerouslySetInnerHTML={{ __html: content2 }} />
                    </h1>
                </motion.div>
                <div className="mt-12 flex items-center w-full md:justify-between" style={{ display: 'flex', gap: '10px' }}>
                    {techStackIcons.map((tech, index) => (
                        <motion.div key={index} initial={{ opacity: 0 }} animate={iconControls} transition={{ duration: 1, delay: 0.5 * (index + 1) }} className="relative flex flex-col items-center justify-center border-gradient md:bg-backgroundColorTertiary md:h-40 md:w-40 mr-4 md:mr-0" onClick={() => handleIconClick(tech.name)}>
                            <div className="flex items-center justify-center">{tech.icon}</div>
                            <h1 className="hidden md:block mt-4 text-center text-textColorSecondary text-base font-bold">{tech.name}</h1>
                        </motion.div>
                    ))}
                </div>
                {selectedTech && (
                    <div className="md:hidden mt-6 text-center sm:text-left text-textColorSecondary text-base font-bold">
                        {selectedTech}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AboutMe;
