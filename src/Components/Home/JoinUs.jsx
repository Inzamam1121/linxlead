import React from 'react'
import { FaArrowRight, FaFire } from 'react-icons/fa'
import { HiComputerDesktop } from 'react-icons/hi2'
import { MdEmail } from 'react-icons/md'

const JoinUs = () => {

    const Data = [
        {
            head: "12,000",
            para: "Happy Users"
        },
        {
            head: "Millions",
            para: "Leads Generated"
        },
        {
            head: "500,0000",
            para: "Appointments Set"
        },
    ]

    const ExploreData = [
        {
            head: "Sales Boost",
            para: "Built-in algorithms that predict and enhance connections, increasing sales opportunities effortlessly.",
            icon: FaFire
        },
        {
            head: "Email Engagement",
            para: "Harness the potential of multichannel outreach, leverage conditional actions, and seamlessly integrate unlimited email accounts to amplify engagement.",
            icon: MdEmail
        },
        {
            head: "In-Depth Reports",
            para: "Comprehensive reporting features and dashboard that help you measure performance and strategize effectively for maximum impact.",
            icon: HiComputerDesktop
        },
    ]

    return (
        <div className='my-10 w-[90%] md:w-[80%] flex flex-col gap-14 mx-auto'>
            <div className="flex flex-col gap-6 text-center fontpop">
                <h2 className='text-3xl md:text-5xl font-extrabold'>Join Our Thriving Community</h2>
                <p className='md:text-lg'>LinxLead is a proven game-changer in LinkedIn automation, with impressive metrics underscoring our clients' success. We help Sellers Scale without buying leads, chasing referrals, spending hours on the phone, going to networking events, posting the same thing over and over, and all the other 🐂💩 that doesn't work...</p>
            </div>
            <div className="flex justify-evenly gap-6 items-center flex- lg:flex-row">
                {Data?.map((item, index) => (
                    <div className="flex flex-col gap-2 items-center text-center font-pop" key={index}>
                        <h2 className='font-bold text-2xl'>{item?.head}</h2>
                        <p>{item?.para}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-20">
                <div className="basis-[30%] flex flex-col gap-8 font-pop">
                    <h2 className='leading-10 md:leading-[4rem] text-[1.875rem] md:text-[3rem]  font-extrabold'>Experience the <span className='text-primblue'>Brilliance</span> of Efficiency</h2>
                    <p>Book meetings at an unprecedented pace and watch your success soar!</p>
                    <button className='flex items-center gap-2 rounded-lg w-fit border-2 border-tempyellow bg-tempyellow text-black hover:bg-transparent ease-in-out duration-300 py-2 px-3 font-bold'>
                        <p>Explore More</p>
                        <FaArrowRight className='text-2xl' />
                    </button>
                </div>
                <div className="basis-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ExploreData?.map((item, index) => (
                        <div className="flex flex-col gap-4 font-pop" key={index}>
                            <div className="bg-black rounded-lg p-2 w-fit">
                                <item.icon className='text-primblue text-xl' />
                            </div>
                            <h2 className='font-bold text-xl'>{item.head}</h2>
                            <p>{item.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JoinUs