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

    React.useEffect(() => {
        var _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src='https://cdn.matomo.cloud/cadenchen.matomo.cloud/container_moeTbXfI.js'; s.parentNode.insertBefore(g,s);
    }, [])

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
