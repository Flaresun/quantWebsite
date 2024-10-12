import React, { useState } from 'react'




const NavBar = () => {
    const [menu,setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }
    
  return (
    <div className='pb-20 scroll-smooth'>
        <nav className=" flex justify-between items-center sticky top-0 z-10 py-5 px-20 dark:bg-black dark:text-white" >
            
            <h1 className="text-4xl font-medium px-6">
                Quant <span className="font-bold text-indigo-500  dark:text-indigo-700">Finance</span> 
            </h1>
            
            <button id="hamburger-button" className=" relative md:block lg:hidden sm:block text-4xl items-center justify-between mx-10  whitespace-nowrap " onClick={toggleMenu}>
                {menu ?  "X" : "☰"}

                <div className={`mt-10 absolute right-[-8rem] z-10 flex flex-col justify-center origin-top-left bg-slate-400 items-center text-3xl font-medium ${menu ? "opacity-100" : "opacity-0"} ease-in duration-300 ` }>
                    <a href="#Hero" className="px-10 scroll-smooth hover:bg-slate-900 hover:text-white" >The Quant Club</a>
                    <a href="#About" className="px-10 scroll-smooth hover:bg-slate-900 hover:text-white">About Us</a>
                    <a href="#Event" className="px-10 scroll-smooth hover:bg-slate-900 hover:text-white">Events</a>
                    <a href="#Contact" className="px-10 scroll-smooth hover:bg-slate-900 hover:text-white">Contact</a>
                </div>
            </button>
            
            <ul className=" text-2xl items-center justify-between mx-10 hidden lg:block whitespace-nowrap ">
                <a href="#Hero" className="px-10 scroll-smooth" >The Quant Club</a>
                <a href="#About" className="px-10 scroll-smooth">About Us</a>
                <a href="#Event" className="px-10 scroll-smooth">Events</a>
                <a href="#Contact" className="px-10 scroll-smooth">Contact</a>

            </ul>

        </nav>
    </div>
  )
}

export default NavBar