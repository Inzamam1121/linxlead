import React from 'react'
import CommonBanner from '../../Components/Common/CommonBanner'
import CommonSolution from '../../Components/Common/CommonSolution'

const SmartSequence = () => {
    const Data=[
        {
            image:"../Images/Prop/SolutionData/Smart/image1.png",
            head:<>Create Your Sequence In Under <span className='text-primblue'>5 Minutes.</span></>,
            para:"Drag & drop steps, write message copies for all types of outreach, insert variables, set time delays between steps, and much more, all from the same dashboard."
        },
        {
            image:"../Images/Prop/SolutionData/Smart/image2.png",
            head:<>Build Fom Scratch Or Insert Approven Sequence In <span className='text-primblue'>1 Click.</span></>,
            para:"Use 8 actions and 7 if/else conditions to create your own sequence, or choose among ready-to-use sequences with templates for different outreach strategies."
        },
        {
            image:"../Images/Prop/SolutionData/Smart/image3.png",
            head:<>Nurture <span className='text-primblue'>Leads</span> Ready To Convert In One Place.</>,
            para:"Manage all LinkedIn and email messages in Linxlead’s Smart inbox, save your response templates for easier replies, and create labels to prioritize leads."
        },
        {
            image:"../Images/Prop/SolutionData/Smart/image4.png",
            head:<>Identify Campaigns That Drive The<span className='text-primblue'>Best Results.</span></>,
            para:"Monitor step-by-step analytics, A/B testing, and daily statistics to make data-driven decisions and optimize your campaigns."
        },
        {
            image:"../Images/Prop/SolutionData/Smart/image5.png",
            head:<>Integrate Any <span className='text-primblue'>Workflow</span> To Save Time.</>,
            para:"Sync Linxlead with any other tool to push data through Zapier, Make, or API, and avoid bouncing between different platforms."
        },
    ]
    return (
        <div>
            <CommonBanner
                head={<>Reach all <span className='text-primblue'>your leads</span>, one way or another </>}
                para={"Combine if/else conditions with LinkedIn and email automation, email finder & verifier, and Image & GIF personalization into one Smart sequence to maximize touchpoints with your leads and stand out in their inboxes."}
                Image="../Images/Banner/Solution/Smart.png"
                button="Get started"
            />
            <CommonSolution Data={Data} />
        </div>
    )
}

export default SmartSequence