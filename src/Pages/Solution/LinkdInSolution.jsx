import React from 'react'
import CommonBanner from '../../Components/Common/CommonBanner'
import CommonSolution from '../../Components/Common/CommonSolution'

const LinkdInSolution = () => {
    const Data = [
        {
            image: "../Images/Prop/SolutionData/Linkdin/image1.png",
            head: <>Stay Safe With <span className='text-primblue'>3-Layer</span> Protection</>,
            para: "Linxlead reaches out to your leads through a dedicated, country-based IP address according to your pre-set limits and delays between actions, imitating humanlike behavior."
        },
        {
            image: "../Images/Prop/SolutionData/Linkdin/image2.png",
            head: <>Stand Out In Your <span className='text-primblue'>Lead's</span> Inbox.</>,
            para: "Include variables and/or hyper-personalized images & GIFs to automatically tailor connection requests, messages, and InMails to every lead to increase the response rate. "
        },
        {
            image: "../Images/Prop/SolutionData/Linkdin/image3.png",
            head: <>Choose Among <span className='text-primblue'>10 Sources</span> To Import Leads.</>,
            para: "Manage all LinkedIn and email messages in Linxlead’s Smart inbox, save your response templates for easier replies, and create labels to prioritize leads."
        },
        {
            image: "../Images/Prop/SolutionData/Linkdin/image4.png",
            head: <>Find Your Leads' <span className='text-primblue'>Business</span> Emails.</>,
            para: "Discover your leads' business emails even if not connected on LinkedIn, and combine 2 outreach channels to reach your leads one way or another."
        },
        {
            image: "../Images/Prop/SolutionData/Linkdin/image5.png",
            head: <>Get In Touch With More <span className='text-primblue'>Leads Faster.</span></>,
            para: "Combine if/else conditions with connection requests, messages, paid InMails, and the View and Follow steps into Smart sequence to contact more leads in less time."
        },
        {
            image: "../Images/Prop/SolutionData/Linkdin/image6.png",
            head: <><span className='text-primblue'>Blacklist</span> Specific Leads Across All Team Seats.</>,
            para: "Enter LinkedIn profile URL, or name, company name, or job title as an exact or partial match to exclude leads from your and your team’s outreach. "
        },
    ]
    return (
        <div>
            <CommonBanner
                head={<>Take advantage of <span className='text-primblue'>LinkedIn's</span> full potential. </>}
                para={"Send connection requests, personalize all types of LinkedIn messages, and combine paid InMails, all on autopilot."}
                Image="../Images/Banner/Solution/LinkDin.png"
                button="Get started"
            />
            <CommonSolution Data={Data} />
        </div>
    )
}

export default LinkdInSolution