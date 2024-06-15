import React from 'react'
import { BsStars } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'

const PricingSec = () => {

    const WhiteData = [
        "All Linxlead solutions under your brand",
        "Customer support under your brand",
        "Help center under your brand",
        "Dedicated Success manager ",
        "Dedicated Slack channel",
        "Tiered pricing system",
        "Agency dashboard",
        "Invite unlimited co-workers",
        "API integration"
    ]
    return (
        <div className='flex flex-col gap-10 lg:flex-row items-center w-[90%] xl:w-[70%] justify-between mx-auto'>
            <div className="basis-[45%] rounded-xl shadow-shadowfaq ">
                <div className="bg-white flex flex-col w-full py-10 items-center justify-center font-pop">
                    <h3 className='text-xl font-medium'>White label</h3>
                    <p>Talk to sales</p>
                </div>
                <div className="bg-[#F5F5F5] py-6 px-6">
                    <div className="flex flex-col gap-2">
                        {WhiteData?.map((item, index) => (
                            <div className="flex gap-2 font-pop items-center" key={index}>
                                <div className="bg-tempyellow p-[2px] rounded-full">
                                    <TiTick className='text-lg text-white' />
                                </div>
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                    <button className='bg-tempyellow/50 rounded-lg font-pop text-lg font-medium py-2 w-full my-4 border-2 border-tempyellow hover:bg-transparent ease-in-out duration-300'>
                        Lets Talk
                    </button>
                </div>
            </div>

            <div className="basis-[45%] border-8 border-primblue rounded-xl shadow-shadowfaq ">
                <div className="bg-primblue py-4 font-pop text-2xl font-medium text-center text-white flex gap-2 items-center justify-center">
                    Most popular
                    <BsStars />
                </div>
                <div className="bg-white flex flex-col rounded-t-xl w-full py-10 items-center justify-center font-pop">
                    <h3 className='text-4xl flex justify-center items-center font-medium'>$100<span className='text-[#636363] text-xl'>/month</span></h3>
                </div>
                <div className="bg-[#F5F5F5] rounded-b-xl py-6 px-6">
                    <div className="flex flex-col gap-2">
                        {WhiteData?.map((item, index) => (
                            <div className="flex gap-2 font-pop items-center" key={index}>
                                <div className="bg-tempyellow p-[2px] rounded-full">
                                    <TiTick className='text-lg text-white' />
                                </div>
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                    <button className='bg-tempyellow rounded-lg font-pop text-lg font-medium py-2 w-full my-4 border-2 border-tempyellow hover:bg-transparent ease-in-out duration-300'>
                        Lets Talk
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PricingSec