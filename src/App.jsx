import React, { useEffect } from 'react';
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Experience from "./components/Experience.jsx";
import ProjectsWOAnimation from "./components/ProjectsWOAnimation.jsx";
import Contact from "./components/Contact.jsx";
import StarsCanvas from "./components/Stars.jsx";
import LoaderPortfolio3d from "./components/LoaderPortfolio3d.jsx";
import Footer from "./components/Footer.jsx";
import Projectx from "./components/Projectx.jsx";

export default function App() {
    useEffect(() => {
        // Reset scroll position on every refresh
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        return () => {
            // Reset scroll restoration behavior when the component unmounts
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
            }
        };
    }, []);

    return (
        <>
            <LoaderPortfolio3d />

            <Hero />
            <AboutMe />
            <Experience />
            {/*<Projects />*/}
            <Projectx />

            <div className='relative'>
                <Contact />
                <Footer />

                <StarsCanvas />
            </div>


        </>
    );
}
