import React from 'react'
import CommonBanner from '../../Components/Common/CommonBanner'
import CommonSolution from '../../Components/Common/CommonSolution'

const EmailVerification = () => {
    const Data=[
        {
            image:"../Images/Prop/SolutionData/Email/image1.png",
            head:<>Choose How To Discover Your <span className='text-primblue'>Leads’ Business</span> Emails.</>,
            para:"Upload your lead’s name and company domain, or their LinkedIn profile URL, even if they’re not part of your network, and let Linxlead find and verify their email addresses."
        },
        {
            image:"../Images/Prop/SolutionData/Email/image2.png",
            head:<>Get Your Leads' Email Addresses In <span className='text-primblue'>One Step.</span></>,
            para:"Don’t break your outreach flow. Make the Email finder & verifier step part of your Smart sequence and seamlessly use the data to engage with your leads immediately."
        },
        {
            image:"../Images/Prop/SolutionData/Email/image3.png",
            head:<>Get <span className='text-primblue'>Double-Verified</span> Emails.</>,
            para:"We won’t provide you with catch-all email addresses. Instead, we double-verify emails to protect your domain. "
        },
    ]
    return (
        <div>
            <CommonBanner
                head={<>Send emails that <span className='text-primblue'>land</span> straight into inbox</>}
                para={"Find and verify your lead's email addresses to increase deliverability and safeguard your domain"}
                Image="../Images/Banner/Solution/Email.png"
                button="Get started"
            />
            <CommonSolution Data={Data} />
        </div>
    )
}

export default EmailVerification