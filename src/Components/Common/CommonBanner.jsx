import React from 'react'
import { FaRegHandPointRight } from 'react-icons/fa'

const CommonBanner = ({ head, para, Image, button }) => {
    return (
        <div className='pt-20 pb-10 md:pt-32 md:pb-20 w-[90%] md:w-[80%] mx-auto'>
            <div className="flex justify-between gap-10 items-center">
                <div className={`${Image && "xl:basis-[40%]"} flex flex-col gap-4 font-pop`}>
                    <h2 className='text-2xl md:text-5xl font-extrabold DropSign'>{head}</h2>
                    <img src="../Images/Prop/Bend.svg" alt="" className='w-[100%]' />
                    <p className=''>{para}</p>
                    {button && <button className='bg-tempyellow w-fit rounded-full py-2 px-4 font-pop border-2 border-tempyellow hover:bg-transparent font-semibold ease-in-out duration-300'>
                        {button}
                    </button>}
                </div>
                {Image && <div className="hidden lg:block lg:basis-[40%]">
                    <img src={Image} alt="" className='object-cover' />
                </div>}
            </div>
        </div>
    )
}

export default CommonBanner