import React, { useState } from 'react'

import { MdEvent } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Carousel = ({image, title, desc, date, location}) => {

  return (
    <>
    <div className="m-auto mt-11 flex justify-center relative mx-[10rem]">

      <div className={`w-[15rem] lg:w-[30rem] xl:w-[40rem]  flex justify-center items-center border-4 border-indigo-500/100 shadow-indigo-500/50 rounded-3xl shadow-2xl group`}>

        <img src={image} alt="Machine Learning" className="w-full h-full object-cover rounded-3xl z-10 relative" />

        {/* Overlay text */}
        <div className=" text-wrap whitespace-nowrap absolute inset-0 flex flex-col justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-3xl z-20">
            <p className="text-2xl lg:text-4xl font-bold text-white relative inset-y-0">{title}</p>
            <p className="lg:text-2xl font-bold text-white text-center px-4">
            {desc}
            </p>
            <div className="flex flex-col justify-between items-center">
                <div className="flex flex-row justify-between items-center">
                    <p className=" flex  lg:text-3xl font-bold text-white text-center px-4"><MdEvent /></p>
                    <p className="flex lg:text-3xl font-medium text-white text-center px-4">{date}</p>
                </div>  
                <div className="flex flex-row justify-between items-center">
                    <p className=" flex lg:text-3xl font-bold text-white text-center px-4"><FaLocationDot /></p>
                    <p className="flex lg:text-3xl font-medium text-white text-center px-4">{location}</p>

                </div>              

            </div>

            

        </div>
      </div>
    </div>
    </>
  )
}

export default Carousel