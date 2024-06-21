import React from 'react'

const WhatisInIt = () => {
  const Data=[
    {
      icon:"../Images/Prop/WhatisInt/Profit.svg",
      head:"New profit source",
      para:"Diversify your portfolio and get an extra revenue flow."
    },
    {
      icon:"../Images/Prop/WhatisInt/Advantage.svg",
      head:"Advantage on the market",
      para:"Add a unique service and stand out from the competition."
    },
    {
      icon:"../Images/Prop/WhatisInt/customer.svg",
      head:"Higher customer retention",
      para:"Keep your clients by giving them the service they need."
    },
    {
      icon:"../Images/Prop/WhatisInt/margins.svg",
      head:"Profit margin increase",
      para:"Get a lower price per seat as your client base grows."
    },
    {
      icon:"../Images/Prop/WhatisInt/save.svg",
      head:"Save time and money",
      para:"Avoid the cost of developing the digital solution in-house."
    },
  ]
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 pb-10 font-pop w-[90%] md:w-[80%] mx-auto'>
      <h2 className='text-3xl md:text-5xl font-bold'>What’s <span className='text-primblue'>in it</span> for you?</h2>
      {Data?.map((item,index)=>(
        <div className="flex gap-4 font-pop">
          <div className="bg-white h-fit rounded-xl p-2 shadow-shadowwhat">
            <img src={item.icon} alt="" className='w-6 h-6' />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className='text-2xl md:text-3xl font-bold'>{item.head}</h2>
            <p className='text-[#A6A6A6]'>{item.para}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WhatisInIt