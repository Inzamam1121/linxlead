import React from 'react'

const PerfectPlan = () => {
    const Data = [
        "Ultimate LinkedIn Automation Tool",
        "Unlimited Email Accounts for Management",
        "High Volume Email Sending",
        "Advanced LinkedIn Integration",
        "Comprehensive Email Automation",
        "Diverse Lead Sources for Targeted Outreach",
        "Personalized Outreach with Image",
        "Robust API Integration",
        "Smart Email Sequences",
        "In-Depth Reporting and Analytics",
        "Enhanced Sales Boost Algorithms",
        "Secure and Reliable Platform",
        "Linkedin open profile through IP",
        "Reporting"
    ]
    return (
        <div className='flex justify-center items-center flex-col gap-20 w-[90%] lg:w-[80%] mx-auto my-20 font-pop'>
            <h1 className='text-3xl md:text-5xl font-bold'>Choose the <span className='text-primblue'>perfect plan</span> for you!</h1>


            <div class="relative overflow-x-auto max-w-[100%] shadow-md sm:rounded-lg">
                <table class="w-full font-pop text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 pt-10 pb-6">
                                Features
                            </th>
                            <th scope="col" class="px-6 pt-10 pb-6">
                                <div className="flex flex-col gap-4">
                                    <h3 className='text-tempyellow text-xl w-max'>WHITE LABEL</h3>
                                    <p className='font-semibold w-max'>1 Month</p>
                                </div>
                            </th>
                            <th scope="col" class="">
                                <div className='relative'>
                                    <div className="bg-tempyellow w-max absolute top-0 left-0 font-normal py-2 px-4 font-pop">
                                        MOST POPULAR
                                    </div>
                                    <div className="flex px-6 pt-10 pb-6 flex-col gap-4">
                                        <h3 className='text-primblue w-max text-xl'>ALL IN ONE</h3>
                                        <p className='font-semibold w-max'>1 Month</p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((item, index) => (
                            <tr class="odd:bg-white font-pop odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b text-lg dark:border-gray-700" key={index}>
                                <th scope="row" class="px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                    {item}
                                </th>
                                <td class="px-6 py-4">
                                    <img src="../Images/Prop/Tick.svg" alt="" className='w-6 h-6' />
                                </td>
                                <td class="px-6 py-4">
                                    <img src="../Images/Prop/Tick.svg" alt="" className='w-6 h-6' />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default PerfectPlan