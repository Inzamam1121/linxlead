import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoBag } from 'react-icons/io5'

const WhyUs = () => {
    return (
        <div className='my-10 w-[90%] md:w-[80%] mx-auto'>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="basis-[45%] flex flex-col gap-4 font-pop">
                    <h2 className='text-3xl md:text-5xl font-extrabold'>Why <span className='text-primblue'>Choose</span> LinxLead?</h2>
                    <p className='md:text-lg'>LinxLead is your go-to solution for enhancing efficiency and achieving outstanding results. Our platform offers a suite of powerful features to streamline your outreach and maximize your sales pipeline.</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                            <div className="bg-black rounded-lg p-2">
                                <IoBag className='text-primblue text-xl' />
                            </div>
                            <p>You Get:</p>
                        </div>
                        <div className="flex ml-8 font-pop flex-col gap-2">
                            <p>- Unlimited email accounts</p>
                            <p>- 100,000 emails per month</p>
                            <p>- LinkedIn Integration</p>
                            <p>- Cloud-based LinkedIn automation</p>
                            <p>- Advanced Email Automation</p>
                            <p>- Diverse Lead Sources</p>
                            <p>- Personalized Outreach</p>
                            <p>- Unlimited Image & GIF personalization</p>
                            <p>- API integration</p>
                            <p>- Smart sequences</p>
                        </div>
                    </div>
                    <button className='flex items-center gap-2 rounded-lg w-fit border-2 border-tempyellow bg-tempyellow text-black hover:bg-transparent ease-in-out duration-300 py-2 px-3 font-bold'>
                        <p>More Info</p>
                        <FaArrowRight className='text-2xl' />
                    </button>
                </div>
                <div className="basis-[45%]">
                    <img src="../Images/Banner/WhyUs.png" alt="" className='object-cover' />
                </div>
            </div>
        </div>
    )
}

export default WhyUs