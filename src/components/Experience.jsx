import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Import your icon image
import eth from '/eth.png';
import kpmg from '/kpmg.png';
import pru from '/pru.png';
import react from '/react.png';

const heading = 'WHAT I HAVE DONE SO FAR';
const heading2 = 'Work Experience';

const myExperience = [
    {
        title: "Financial Consultant",
        subtitle: "Prudential Assurance Company Singapore",
        description: "I was responsible for sales activities, including client acquisition, negotiation, and closing deals.",
        description2: "Managed social media marketing campaigns, which resulted in a significant increase in online engagement and leads generation.",
        description3: "Developed and maintained strong client relationships through effective communication and personalized service.",
        date: "September 2019 - October 2022 ",
        icon: <img src={pru} alt="PRUDENTIAL" />
    },
    {
        title: "Intern",
        subtitle: "KPMG Singapore",
        description: "Gained valuable experience in tax consultancy, assisting clients with tax-related matters and providing advisory services.",
        description2: "Developed professional presentation skills by creating slides for client meetings and presentations, focusing on tax advice and solutions.",
        description3: "Collaborated with the team to analyze and solve complex tax technical problems, ensuring accurate and effective solutions for clients.",
        date: "September 2021 - December 2021",
        icon: <img src={kpmg} alt="KPMG" />
    },
    {
        title: "NFT Trader",
        subtitle: "Ethereum",
        description: "Crypto paid off my college debt and allowed me to travel around the world for the whole of 2023.",
        description2: "Track my active wallets here:" +
            " <a href='https://nftbank.ai/portfolio/0x33b4bd50652e6f3561c57954f1A54f24349a41f0?network_id=mainnet' target='_blank'>(Chanel)</a>" +
            " <a href='https://nftbank.ai/portfolio/0xcC3eCcf3a756850D02C4c455547bA59f49595565?network_id=mainnet' target='_blank'>(Camomile)</a>" +
            " <a href='https://nftbank.ai/portfolio/0xF1c43051f63147039669A7e4b19D07107418D30D?network_id=mainnet' target='_blank'>(Cestia)</a>" +
            " <a href='https://nftbank.ai/portfolio/0xAfd5B22D182590d9EE8E3F7F0dD8A0Da4DD65ce1?network_id=mainnet' target='_blank'>(Calina)</a>" +
            " <a href='https://nftbank.ai/portfolio/0x34F2452Fc024d6226FF2068056CD01bb7401e9A0?network_id=mainnet' target='_blank'>(Callane)</a>",

        date: "January 2022 - December 2022",
        icon: <img src={eth} alt="ETH" />
    },
    {
        title: "Web Developer",
        description: "Engaged in the sale and development of websites, offering tailored solutions to clients' needs and preferences.",
        date: "January 2024 - Present",
        icon: <img src={react} alt="react" />
    },
];

function Experience() {
    return (
        <div className="bg-backgroundColorPrimary">
            <div id="Experience" className="mx-auto flex flex-col min-h-screen px-8 md:px-0 md:w-3/4 2xl:w-1/2 items-center ">
                <div className="md:w-full">
                    <h1 className="text-base text-textColorTertiary text-center">{heading}</h1>
                    <h1 className="mt-4 text-5xl text-textColorPrimary text-center font-bold">{heading2}</h1>
                    <div className='my-24'>

                        <VerticalTimeline lineColor="linear-gradient(to bottom, #c84de7, #62fad7)">

                            {myExperience.map((experience, index) => (
                                <VerticalTimelineElement
                                    key={index}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: 'rgb(29, 24, 54)', color: '#fff', borderBottom: '3px solid #62FAD7' }}
                                    contentArrowStyle={{ borderRight: '7px solid rgb(35, 38, 49)' }}
                                    date={experience.date}
                                    iconStyle={{ background: '#fff' }}
                                    icon={experience.icon}
                                >
                                    <h3 className="vertical-timeline-element-title text-textColorTertiary text-lg font-bold ">{experience.title}</h3>
                                    <h4 className="mt-2 vertical-timeline-element-subtitle text-textColorSecondary text-base ">{experience.subtitle}</h4>
                                    {experience.description && (
                                        <ul className="mt-4 text-textColorPrimary list-disc pl-6 space-y-2 text-xs">
                                            <li>{experience.description}</li>
                                            {experience.description2 && <li dangerouslySetInnerHTML={{__html: experience.description2}}></li>}
                                            {experience.description3 && <li>{experience.description3}</li>}
                                        </ul>
                                    )}
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
