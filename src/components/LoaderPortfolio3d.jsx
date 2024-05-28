import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { helix } from 'ldrs'; // Import the helix loader component
helix.register(); // Register the helix loader

function LoaderPortfolio3d(props) {
    const [loading, setLoading] = useState(true);
    const controls = useAnimation(); // Animation controls

    useEffect(() => {
        if (!loading) {
            // After 4 seconds (when loading becomes false), start fading out the loader
            controls.start({
                opacity: 0,
                transition: { duration: 2}
            });
        }
    }, [loading, controls]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            className={`fixed bg-black h-screen top-0 left-0 w-full h-full flex justify-center items-center z-10 ${loading ? '' : 'pointer-events-none'}`}
            animate={controls}
        >
            {loading ? (
                // Use the helix loader component conditionally based on the loading state
                <l-helix size="90" speed="2.5" color="#62FAD7"></l-helix>
                        ) : (
                <div>
                    {/* Add your documentation text here */}
                    {/* For brevity, I'll omit the full text */}
                </div>
            )}
        </motion.div>
    );
}

export default LoaderPortfolio3d;
