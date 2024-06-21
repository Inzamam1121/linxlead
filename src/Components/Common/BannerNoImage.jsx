import React from 'react'

const BannerNoImage = ({ head, para }) => {
    return (
        <div className='pt-20 pb-10 md:pt-32 md:pb-20 w-[90%] md:w-[70%] lg:w-[50%] mx-auto'>
            <div className="flex justify-between gap-10 items-center">
                <div className={`flex flex-col text-center gap-4 font-pop`}>
                    <h2 className='leading-10 md:leading-[4rem] text-[1.875rem] md:text-[3rem] font-extrabold DropSign'>{head}</h2>
                    <img src="../Images/Prop/Bend.svg" alt="" className='w-[100%]' />
                    <p className='lg:text-lg'>{para}</p>
                </div>
            </div>
        </div>
    )
}

export default BannerNoImage