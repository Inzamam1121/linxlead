import React from 'react'
import BannerNoImage from '../Components/Common/BannerNoImage'
import PerfectPlan from '../Components/Pricing/PerfectPlan'
import Testimonial from '../Components/Pricing/Testimonial'
import PricingSec from '../Components/Pricing/PricingSec'

const Pricing = () => {
  return (
    <div>
        <BannerNoImage 
            head={<><span className='text-primblue'>Supercharge</span> your outreach with LinxLead! </>} 
            para={"Start your 7-day free trial, and choose the right plan for your business."}
        />
        <PricingSec/>
        <PerfectPlan/>
        <Testimonial/>
    </div>
  )
}

export default Pricing