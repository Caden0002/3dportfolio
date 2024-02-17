import { motion } from "framer-motion";
import  ComputersCanvas  from "./Computers.jsx";
import '../../styles.css';


const backgroundStyle = {
    backgroundImage: `url(/herobackground.svg)`,
    backgroundSize: 'cover',
};
const header = "Hi, my name is";
const name = "Caden Che.";
const header2 = "I design and build websites"




function Hero() {



    return (
        <div className="bg-backgroundColorPrimary" style={backgroundStyle}>
            <div id="Home" className="mx-auto h-screen ">
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="absolute inset-25 md:left-1/4 text-textColorPrimary"style={{ top: '12.5%' }}>

                        <h1 className=" text-xl text-textColorTertiary  ">
                            {header}
                        </h1>

                        <h1 className="mt-4 text-6xl md:text-8xl xl:text-9xl  font-bold  ">
                            {name}
                        </h1>

                        <h1 className="mt-6 text-xl tracking-wide text-textColorSecondary  ">{header2}</h1>



                    </div>


                    <ComputersCanvas />
                </div>


            </div>

            </div>
    );
}

export default Hero;
