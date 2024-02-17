import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

function LoaderPortfolio3d(props) {
    const [loading, setLoading] = useState(true);
    const controls = useAnimation();
    const balls = [2, 1.8, 1.6, 1.4, 1.2]; // Delay values for each ball

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading) {
            // After 4 seconds (when loading becomes false), start fading out the loader
            controls.start({
                opacity: 0,
                transition: { duration: 2 }
            });
        }
    }, [loading, controls]);

    return (
        <motion.div
            className={`fixed bg-black h-screen top-0 left-0 w-full h-full flex justify-center items-center z-10 ${loading ? '' : 'pointer-events-none'}`}
            animate={controls}
        >
            <div className="p-4 rounded-md">
                <div className="flex justify-center">
                    {Array.from({ length: 5 }, (_, index) => (
                        <motion.span
                            key={index}
                            className="w-4 h-4 my-12 mx-1 bg-textColorTertiary rounded-full"
                            animate={{
                                opacity: [1, 0], // Fades out
                                transition: { duration: 1, repeat: balls[index], delay: 0.2 * index }
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default LoaderPortfolio3d;
