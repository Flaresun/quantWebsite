import React, { useState } from 'react'; 
import project1 from "../assets/project1.png";
import project2 from "../assets/project3.png";
import project3 from "../assets/project6.jpg";
import { MdEvent } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import Carousel from './Carousel';

const projectInformation = [

    {
        image: project1,
        title: "Machine Learning",
        desc: "Learn about the Profound Effects Machine Learning can have in Quantitative Finance. Experts from ML all around the world will gather to speak on the topic.",
        date: "October 11, 2024",
        location: "Port Belly, Sanctuary Hill",
        id: 1
    },
    {
        image: project2,
        title: "Deep Learning",
        desc: "Explore the advancements in Deep Learning and its applications in various fields.",
        date: "October 12, 2024",
        location: "Port Belly, Sanctuary Hill",
        id: 2
    },
    {
        image: project3,
        title: "AI in Finance",
        desc: "Discover how AI is transforming the landscape of financial markets and trading.",
        date: "October 13, 2024",
        location: "Port Belly, Sanctuary Hill",
        id: 3
    }
];

const shift = 100/projectInformation.length
const Event = () => {
    const [curIndex, setCurIndex] = useState(0);

    const nextProject = () => {
        setCurIndex((prevIndex) => (prevIndex +1) % (projectInformation.length-1));
    };

    const prevProject = () => {
        setCurIndex((prevIndex) => (prevIndex -1 + (projectInformation.length-1)) % (projectInformation.length-1));
    };

    return (
        <div id="Event" className='mt-20 scroll-smooth p- flex flex-col justify-center items-center inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]'>
            <h1 className="text-4xl font-bold flex">Current Events</h1>

            <div className="w-2/3 relative flex items-center">
                
                <button className="text-2x md:text-4xl lg:text-6xl cursor-pointer" onClick={prevProject}>
                    <FaRegArrowAltCircleLeft />
                </button>

                
            
                <div className="flex overflow-hidden justify-center flex-row">
                    <div
                        className="flex transition-transform duration-300 "
                        style={{
                            transform: `translateX(-${curIndex * shift }%)`, // Centering current project
                        }}
                    >
                        {projectInformation.map((project, index) => (
                            <div className="" key={index}>
                                <Carousel 
                                    image={project.image}
                                    title={project.title}
                                    desc={project.desc}
                                    date={project.date}
                                    location={project.location}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button className="  text-2x md:text-4xl lg:text-6xl cursor-pointer" onClick={nextProject}>
                    <FaRegArrowAltCircleRight />
                </button>
            </div>
        </div>
    );
};

export default Event;