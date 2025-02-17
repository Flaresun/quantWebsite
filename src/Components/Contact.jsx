import React from 'react'

const Contact = () => {
  return (
    <div>
        <div id="Contact" className=" px-5 flex flex-col justify-center items-center my-20 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]">
            <h1 className="text-4xl font-bold text-wrap">Contact Us</h1>


            <div className="flex flex-col justify-center-items-center py-10">
                <form action="" className="text-2xl sm:text-3xl flex flex-col mx-auto"></form>

                <div className="flex flex-row justify-around items-start">

                    <div className="flex flex-col justify-center items-start mr-10">
                        <label htmlFor="subject" className="text-2xl font-medium ">First Name:</label>
                        <input type="text" id="name" name="subject" minLength="3" maxLength="60" placeholder="Your Subject"
                        className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl" />
                    </div>

                    <div className="flex flex-col justify-center items-start">
                        <label htmlFor="subject" className="text-2xl font-medium">Last Name*:</label>
                        <input type="text" id="name" name="subject" required minLength="3" maxLength="60" placeholder="Your Subject"
                        className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl" />
                    </div>

                </div>

                <div className="flex-col py-10 ">
                    <div className="flex flex-col mb-10">
                        <label htmlFor="subject" className="text-2xl font-medium ">Email*:</label>
                        <input type="email" id="subject" name="subject" required minLength="3" maxLength="60" placeholder="Your Subject"
                        className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl font-medium text-black dark:border-none sm:text-3xl" />
                    </div>
                    <div className="flex flex-col mb-10">
                        <label htmlFor="subject" className="text-2xl font-medium ">Subject*:</label>
                        <input type="text" id="subject" name="subject" required minLength="3" maxLength="60" placeholder="Your Subject"
                        className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl font-medium text-black dark:border-none sm:text-3xl" />
                    </div>

                    <div className="">
                        <label htmlFor="subject" className="text-2xl font-medium">Message*:</label>
                        <textarea name="message" id="message" cols="10" rows="4" placeholder="Your Message" required
                        className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"></textarea>

                    </div>

                    <div className="">
                        <button className="md:text-3xl lg:text-4xl font-medium bg-slate-600  text-white rounded-3xl p-5 my-10 w-full" >Send Message</button>

                    </div>



                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact 