import React from 'react'

const Solution = () => {
    const Data=[
        {
            image:"../Images/Prop/Solution/Customize.png",
            head:<><span className='text-primblue'>Customize</span> The Platform To Your Liking.</>,
            para:"Our team will provide you with your version of Linxlead, done entirely in your colors and branding, located under the subdomain of your choice, without any additional set-up costs."
        },
        {
            image:"../Images/Prop/Solution/Brand.png",
            head:<>Have Our Support Team & Help Center Under <span className='text-primblue'>Your Brand.</span></>,
            para:"Linxlead’s support team will take care of your clients under your brand through in-app chat and WhatsApp, while Linxlead’s help center will be available to your clients on your subdomain. "
        },
        {
            image:"../Images/Prop/Solution/Manager.png",
            head:<>Speak To Your Dedicated <span className='text-primblue'>Success Manager</span> Anytime.</>,
            para:"If you have any questions, need help with your accounts, or want to catch up or give feedback, jump on a call or ping your Success Manager on a Slack channel created specifically for your company."
        },
        {
            image:"../Images/Prop/Solution/Agency.png",
            head:<>Manage All Seats From The <span className='text-primblue'>Agency Dashboard.</span></>,
            para:"You can assign platform roles and permissions, invite co-workers, appoint multiple admins, and oversee all clients in one place."
        },
        {
            image:"../Images/Prop/Solution/GTM.png",
            head:<>Enhance and analyze with our<span className='text-primblue'>GTM integration.</span></>,
            para:"Create custom chat, monitor user behavior, measure ad success, track the number of registrations and much more thanks to our unique-on-the-market Google Tag Manager integration."
        },
    ]
  return (
    <div className='w-[90%] md:w-[80%] mx-auto flex flex-col gap-6 items-center font-pop my-10 md:my-20'>
        <h2 className='text-center text-3xl max-w-3xl lg:text-5xl font-bold'>Have your solution <span className='text-primblue'>live and ready</span> in less than 7 days.</h2>
        <div className="flex flex-col gap-20">
            {Data?.map((item,index)=>(
                <div className={`flex gap-8 flex-col items-center justify-between ${index%2==0? "lg:flex-row":"lg:flex-row-reverse"}`} key={index}>
                    <div className="basis-[40%]">
                        <img src={item.image} alt="" className='md:w-[70%] mx-auto' />
                    </div>
                    <div className="flex basis-[45%] flex-col gap-6 font-pop">
                        <h2 className='text-2xl md:text-4xl font-bold'>{item.head}</h2>
                        <p>{item.para}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Solution