import React from 'react'

const BannerNoImage = ({ head, para }) => {
    return (
        <div className='pt-20 pb-10 md:pt-32 md:pb-20 w-[90%] md:w-[70%] lg:w-[50%] mx-auto'>
            <div className="flex justify-between gap-10 items-center">
                <div className={`flex flex-col text-center gap-4 font-pop`}>
                    <h2 className='text-2xl md:text-5xl font-extrabold DropSign'>{head}</h2>
                    <img src="../Images/Prop/Bend.svg" alt="" className='w-[100%]' />
                    <p className=''>{para}</p>
                </div>
            </div>
        </div>
    )
}

export default BannerNoImage