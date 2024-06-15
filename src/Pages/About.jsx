import React from 'react'
import CommonBanner from '../Components/Common/CommonBanner'
import AboutComp from '../Components/About/AboutComp'
import Parternship from '../Components/About/Parternship'
import Team from '../Components/About/Team'

const About = () => {
  return (
    <div>
        <CommonBanner 
            head={<>Linxlead is All About <span className='text-primblue'>You!</span> </>} 
            para={"In 2019, we set out on a mission to create sales automation software that takes care of the most time-consuming tasks and leaves you more room to build meaningful connections and close deals."}
            Image="../Images/Banner/AboutBanner.png"
        />
        <AboutComp/>
        <Parternship/>
        <Team/>
    </div>
  )
}

export default About