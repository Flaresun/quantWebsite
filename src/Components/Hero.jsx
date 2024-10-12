import React from 'react'

const Hero = () => {
  return (
    <div id="Hero" className="w-full h-full flex items-center justify-center text-center relative [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] py-20 my-7">
        
        <div className='items-center flex flex-col'>
            
            <div className="flex flex-col justify-center items-center text-wrap">
                <h1 className="text-7xl font-medium justify-start pb-5 mb-20">Who are We?</h1>

                <p className="text-3xl font-medium mb-5">Welome to the Quant Club's Official Website.</p>
                <p className="text-3xl font-medium mb-5">Stay up to date with everything Quant related on campus</p>
                <p className="text-3xl font-medium mb-5">Register for events focused on breaking into the Quant world.</p>
                <p className="text-3xl font-medium">Prep for the challenging interviews every Quant must go through.</p>
            </div>

            <div className="flex mt-20">
                <button className="relative cursor-pointer p-5 text-3xl bg-slate-200 rounded-3xl justify-center items-center text-nowrap ">Get Started</button>
            </div>

        </div>
    </div>
  )
}
export default Hero