import React from 'react'
import CommonBanner from '../Components/Common/CommonBanner'
import WhatisInIt from '../Components/PartnerShip/WhatisInIt'
import Solution from '../Components/PartnerShip/Solution'

const Partnership = () => {
  return (
    <div>
        <CommonBanner 
            head={<>Unlock a new <span className='text-primblue'>revenue stream</span> while we do the rest! </>} 
            para={"Have all of LinxLead solutions, customer support, and help center under your brand in less than 7 days."}
            Image="../Images/Banner/Partnership.png"
            button="Book a Call"
        />
        <WhatisInIt/>
        <Solution/>
    </div>
  )
}

export default Partnership