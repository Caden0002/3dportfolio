import React from "react";

// Define variables for content
const background = "bg-backgroundColorPrimary";
const heading = "VIEW THE ARCHIVES";
const heading2 = "Other Noteworthy Projects";


function MoreProjects() {
    return (
        <div className="bg-backgroundColorPrimary">
            <div id="Experience" className="mx-auto flex flex-col min-h-screen w-2/3 xl:w-1/2 items-center ">
                <div className="md:w-full">
                    <h1 className="text-xl text-textColorTertiary text-center">{heading}</h1>
                    <h1 className="mt-4 text-6xl text-textColorPrimary text-center font-bold">{heading2}</h1>
                </div>
            </div>
        </div>
    );
}

export default MoreProjects;
