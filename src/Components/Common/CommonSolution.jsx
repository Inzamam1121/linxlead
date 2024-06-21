import React from 'react'

const CommonSolution = ({Data}) => {

  return (
    <div className='w-[90%] md:w-[80%] mx-auto flex flex-col gap-6 items-center font-pop my-10 md:my-20'>
        <div className="flex flex-col gap-20">
            {Data?.map((item,index)=>(
                <div className={`flex gap-8 flex-col items-center justify-between ${index%2==0? "lg:flex-row":"lg:flex-row-reverse"}`} key={index}>
                    <div className="basis-[40%]">
                        <img src={item.image} alt="" className='md:w-[70%] mx-auto' />
                    </div>
                    <div className="flex basis-[45%] flex-col gap-6 font-pop">
                        <h2 className='leading-9 md:leading-[3.5rem] text-[1.5rem] md:text-[2.25rem] font-bold'>{item.head}</h2>
                        <p className='text-base md:text-lg'>{item.para}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CommonSolution