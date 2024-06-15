import React from 'react'
import { LuPackage } from 'react-icons/lu'

const Parternship = () => {

    const Data=[
        {
            head:"200+",
            title:"Partnership created"
        },
        {
            head:"1500+",
            title:"users worldwide"
        },
        {
            head:"33",
            title:"Employees"
        },
    ]

    return (
        <div className='w-full bg-gradientblue'>
            <div className="py-10 flex flex-col xl:flex-row gap-10 justify-center w-[90%] md:w-[80%] mx-auto">
                <div className="flex flex-col font-pop gap-4 basis-[45%]">
                    <div className="flex gap-2 items-center font-pop">
                        <div className="bg-white rounded-lg p-2">
                            <LuPackage className='text-primblue text-xl' />
                        </div>
                        <p className='text-lg'>Our Partnership</p>
                    </div>
                    <h2 className='text-3xl md:text-5xl font-extrabold'>Our Worldwide users</h2>
                </div>
                <div className='flex flex-col md:flex-row gap-8 basis-[50%]'>
                    {Data?.map((item,index)=>(
                        <div className="border-2 basis-[33.333%] text-center border-black rounded-xl py-8 px-4 flex flex-col font-pop gap-4" key={index}>
                            <h2 className='text-2xl text-primblue font-bold'>{item.head}</h2>
                            <p className='text-lg text-black font-medium'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Parternship