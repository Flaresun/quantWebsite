import React from 'react'
import person1 from "../assets/person1.png"
import person2 from "../assets/person2.png"
import person3 from "../assets/person3.png"


const About = () => {
  return (
    <div id="About" className=" scroll-smooth inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]">
        <div className="flex flex-col justify-between items-center py-5">
            <h1 className="text-5xl font-medium text-bold text-center ">Meet Our Club Leaders</h1>


            <div className="my-10 flex flex-col xl:flex-row xl:justify-between items-center text-center text-wrap whitespace-nowrap ">
                
                <div className="flex flex-col justify-center items-center ">
                    <div className="w-96 h-96 rounded-5xl bg-purple-400 bg-opacity-90 rounded-full flex items-center justify-center ">
                        <img src={person1} alt="" className="rounded-full h-96" />
                    </div>
                    
                    <div className="flex flex-col justify-center items-center pb-10">
                            <p className="text-4xl text-wrap text-center font-bold my-5">Amanda Jones</p>
                            <p className="text-2xl font-bold text-balance mb-5">VP of Finance</p>
                            <p className="text-2xl font-medium text-balance">Worked at Goldwoman Sachs for 11 years. Experienced in coporate finance, investment strategies, risk management, etc.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pb-10">
                    <div className="w-96 h-96 rounded-5xl bg-purple-400 bg-opacity-90 rounded-full flex items-center justify-center ">
                        <img src={person2} alt="" className="rounded-full h-96" />
                    </div>
                    
                    <div className="flex flex-col justify-center items-center  ">
                            <p className="text-4xl text-wrap text-center font-bold my-5">Percy Hampston</p>
                            <p className="text-2xl font-bold text-balance mb-5">VP of Marketing</p>

                            <p className="text-2xl font-medium text-balance">Beloitte's Marketing Leader. Proficient in client outreach, customer support, product design, presentation of plan, etc.</p>

                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="w-96 h-96 rounded-5xl bg-purple-400 bg-opacity-90 rounded-full flex items-center justify-center ">
                        <img src={person3} alt="" className="rounded-full h-96" />
                    </div>
            
                    <div className="flex flex-col justify-center items-center">
                            <p className="text-4xl text-wrap text-center font-bold my-5">Stephen Perry</p>
                            <p className="text-2xl font-bold text-balance mb-5">VP of Engineering</p>
                            <p className="text-2xl font-medium text-balance">Taught enginnering concepts at Princesston University. Skilled in embedded systems, software engineering, applied mathetics, etc.</p>

                    </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default About