import React from 'react'
import { FaRegHandPointRight } from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='pt-20 pb-10 md:pt-32 md:pb-20 w-[90%] md:w-[80%] mx-auto'>
            <div className="flex justify-between gap-10 items-center">
                <div className="xl:basis-[40%] flex flex-col gap-4 font-pop">
                    <h2 className='text-2xl md:text-5xl font-extrabold DropSign'>Upgrade Your Process - <span className='text-primblue'>Catapult</span> Your Sales Pipeline</h2>
                    <img src="../Images/Prop/Bend.svg" alt="" className='w-[100%]' />
                    <p className=''>Elevate your sales strategy with our leading automation tool, designed to effortlessly generate leads and schedule sales appointments. Sign up today and join the esteemed organizations that trust and utilize LinxLead.com for their LinkedIn automation needs.</p>
                    <button className='flex items-center gap-2 rounded-lg w-fit border-2 border-tempyellow bg-tempyellow text-black hover:bg-transparent ease-in-out duration-300 py-2 px-3 font-bold'>
                        <FaRegHandPointRight className='text-2xl' />
                        <p>Sign Up Today!</p>
                    </button>
                </div>
                <div className="hidden lg:block xl:basis-[30%]">
                    <img src="../Images/Banner/HomeLady.png" alt="" className='object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Banner