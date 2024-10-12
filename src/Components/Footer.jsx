import React from 'react'

const Footer = () => {
  return (
    <div>
        <hr className="mx-auto w-2/3 bg-black dark:bg-white my-10 " />

        <div className="flex flex-row justify-between items-center mx-20 pb-5">
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row  justify-between items-center">
                    <p className="text-sm lg:text-2xl font-bold mr-5">Cpoyright 	&#xA9; 2024</p>
                    <p className=" text-sm lg:text-2xl font-medium"> Designed by Seth Omeike  </p>
                </div>

            </div>
            <div className="flex flex-row justify-center items-center">
                <ul className=" opacity-0 lg:opacity-100 flex flex-row text-3xl font-medium mx-5 justify-between">
                    <a href="#Hero" className="mx-5">Home</a>
                    <a href="#About" className="mx-5">About</a>
                    <a href="#Event" className="mx-5">Event</a>
                    <a href="#Contact" className="mx-5">Contact</a>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer