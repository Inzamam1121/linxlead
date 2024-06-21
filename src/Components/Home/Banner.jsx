import React from 'react'
import { FaRegHandPointRight } from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='pt-20 Head pb-10 md:pt-32 min-h-screen md:pb-14'>
            <div className="flex justify-between gap-10 items-center  w-[90%] md:w-[80%] mx-auto">
                <div className="xl:basis-[45%] flex pt-10 lg:pt-0 flex-col gap-6 font-pop">
                    <h2 className='leading-10 md:leading-[4rem] text-[1.875rem] md:text-[3rem] font-extrabold DropSign'>Upgrade Your Process - <span className='text-primblue'>Catapult</span> Your Sales Pipeline</h2>
                    <img src="../Images/Prop/Bend.svg" alt="" className='w-[100%]' />
                    <p className='text-base md:text-lg'>Elevate your sales strategy with our leading automation tool, designed to effortlessly generate leads and schedule sales appointments. Sign up today and join the esteemed organizations that trust and utilize LinxLead.com for their LinkedIn automation needs.</p>
                    <button className='flex items-center gap-2 rounded-lg w-fit border-2 border-tempyellow bg-tempyellow text-black hover:bg-transparent ease-in-out duration-300 py-2 px-3 font-bold'>
                        <FaRegHandPointRight className='text-2xl' />
                        <p>Sign Up Today!</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner