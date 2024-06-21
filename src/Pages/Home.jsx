import React from 'react'
import Banner from '../Components/Home/Banner'
import WhyUs from '../Components/Home/WhyUs'
import JoinUs from '../Components/Home/JoinUs'
import FAQ from '../Components/Common/FAQ'

const Home = () => {
  return (
    <div>
        <Banner/>
        <p className='text-center mt-10 font-pop md:text-xl'>Esteemed organizations that trust and utilize LinxLead.com for their LinkedIn automation needs.</p>
        <WhyUs/>
        <JoinUs/>
        <FAQ/>
    </div>
  )
}

export default Home