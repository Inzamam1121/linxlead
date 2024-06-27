import React from 'react'
import Banner from '../Components/Home/Banner'
import WhyUs from '../Components/Home/WhyUs'
import JoinUs from '../Components/Home/JoinUs'
import FAQ from '../Components/Common/FAQ'

const Home = () => {
  return (
    <div>
        <Banner/>
        <WhyUs/>
        <JoinUs/>
        <FAQ/>
    </div>
  )
}

export default Home