import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaShareSquare, FaGithub, FaFigma } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const projectContent = {
    project1: {
        subtitle: "Featured Project",
        title: "LightSpeed",
        description: "After spending a year in the crypto industry, I was inspired to embark on my journey as a frontend developer. One of my initial ideas was to build a website that displays <span style='color: #62FAD7;'>real time crypto data</span>. Lightspeed is a crypto platform that empowers users to access real-time information on all cryptocurrencies.",
        skills: [
            "React",
            "Tailwind",
            "Axios API",
        ],
        websiteLink: "https://lightspeed.cadenchen.net",
        githubLink: "https://github.com/Caden0002/Lightspeed",
        image: '/lightspeedWebpage.png',
        //to take full webpage screenshot, goto dev tool, cmd shift p, search full size screenshot,
    },
    project2: {
        subtitle: "Featured Project",
        title: "BELLE.",
        description: "I have a deep appreciation for luxury brands, and I'm drawn to high-quality products with exquisite designs. The craftsmanship and attention to detail in luxury items never fail to captivate me. BELLE. is a fashion <span style='color: #62FAD7;'>e-commerce website</span> that offers a seamless and visually stunning user interface, infused with a touch of high-end fashion. It employs <span style='color: #62FAD7;'>React context-based state management</span> to enhance the user experience, allowing users to effortlessly browse and shop for a wide range of fashion products.",
        skills: [
            "React",
            "Tailwind",
            "Context API",

        ],
        websiteLink: "https://belle.cadenchen.net",
        githubLink: "https://github.com/Caden0002/Belle.",
        image: '/belleWebpage.png',
    },
    project3: {
        subtitle: "Featured Project",
        title: "Seasons",
        description: "The Seasons project is a reflection of my appreciation for art, colors, and the changing seasons. Each season is an inspiration, an opportunity to blend design with nature's palette. The project encapsulates my desire to create <span style='color: #62FAD7;'>visually appealing, harmonious user interfaces and user experiences</span> . Despite being a project with minimal function,  I aim to convey that my love for design goes beyond traditional websites. A website can be for crafting exquisite, immersive, and captivating visual stories that resonate with people on a profound level.",
        skills: [
            "React",
            "Tailwind",
            "Figma",
        ],
        websiteLink: "https://seasons.cadenchen.net",
        githubLink: "https://github.com/Caden0002/Seasons",
        figmaLink: "https://www.figma.com/file/kGhT6Yjx0AXy5JxclQwhAH/Seasons?type=design&node-id=0%3A1&mode=design&t=HZa7Ke28ezPyaLOp-1",
        image: '/seasonWebpage.png',
    },

}

function Project({ project }) {
    const [ref, inView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
        } else {
            controls.start({ y: 20, opacity: 0, transition: { duration: 1 } });
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref} initial={{ y: 20, opacity: 0 }} animate={controls} className="flex mt-12">
            <div className="grid grid-cols-12 relative">
                {/* Image */}
                <div className="col-start-1 col-span-12 md:col-span-7" style={{ height: '425px', overflowY: 'scroll' }}>
                    <img src={project.image} alt={project.title} className="mx-auto" />
                </div>

                {/* Content */}
                <div className="col-start-1 md:col-start-7 col-span-12 md:col-span-6 text-left md:text-right md:absolute z-10">
                    <h3 className="hidden md:block text-lg text-textColorTertiary">{project.subtitle}</h3>
                    <h3 className="mt-2 text-4xl font-bold text-textColorPrimary">{project.title}</h3>
                    <p className="hidden md:block mt-6 space-y-2 text-sm text-textColorSecondary bg-backgroundColorTertiary shadow-lg py-8 px-6">
                        <span dangerouslySetInnerHTML={{ __html: project.description }} />
                    </p>

                    <div className="mt-6 space-x-4 justify-end">
                        {project.skills.map((skill, index) => (
                            <React.Fragment key={index}>
                                <span className="text-textColorPrimary text-base my-1 font-medium">{skill}</span>
                                {index !== project.skills.length - 1 && <span className="text-textColorTertiary mx-2">•</span>}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Links (Website and GitHub) */}
                    <div className="flex justify-start md:justify-end mt-4 space-x-4">
                        <a
                            href={project.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-textColorPrimary hover:text-textColorTertiary  " // Add flex and items-center
                        >
                            <FaShareSquare className="ml-2" /> {/* Add margin to the icon */}
                        </a>
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-textColorPrimary hover:text-textColorTertiary  " // Add flex and items-center
                        >
                            <FaGithub className="ml-2" /> {/* Add margin to the icon */}
                        </a>
                        {project.figmaLink ? (
                            <a
                                href={project.figmaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-textColorPrimary hover:text-textColorTertiary  "
                            >
                                <FaFigma className="ml-2" />
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function Projectx() {
    const numberOfProjects = Object.keys(projectContent).length;

    return (
        <div className="bg-backgroundColorPrimary">
            <div id="Projects" className="mx-auto flex flex-col h-full py-24 px-8 md:px-0 md:w-2/3 xl:w-1/2">
                {/* Header */}
                <div className="md:w-full">
                    <h1 className="text-xl text-textColorTertiary">SOME THINGS I'VE BUILT</h1>
                    <h1 className="mt-4 text-6xl text-textColorPrimary font-bold">Projects</h1>
                </div>

                {/* Project Grid */}
                <div className={`grid grid-cols-1 grid-rows-${numberOfProjects} gap-12`}>
                    {Object.keys(projectContent).map((projectKey) => (
                        <Project key={projectKey} project={projectContent[projectKey]} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projectx;
