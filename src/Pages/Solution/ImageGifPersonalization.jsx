import React from 'react'
import CommonBanner from '../../Components/Common/CommonBanner'
import CommonSolution from '../../Components/Common/CommonSolution'

const ImageGifPersonalization = () => {
    const Data=[
        {
            image:"../Images/Prop/SolutionData/GIF/image1.png",
            head:<>Humanize Your <span className='text-primblue'>Outreach</span> At Scale.</>,
            para:"Add your lead’s LinkedIn profile picture, company logo, text with variables, and any other picture to your image or GIF, and Linxlead will tailor it to every lead."
        },
        {
            image:"../Images/Prop/SolutionData/GIF/image2.png",
            head:<>Tweak your images & GIFs directly in Linxlead.</>,
            para:"Customize images & GIFs in Linxlead editor, and import them into your messages in one click without any 3rd party tools, picture editor software, or extra charge."
        },
        {
            image:"../Images/Prop/SolutionData/GIF/image3.png",
            head:<>Keep It As A Template For <span className='text-primblue'>Future Use.</span></>,
            para:"Save best-performing images & GIFs to your library, edit, and re-purpose them in another outreach campaign."
        },
    ]
    return (
        <div>
            <CommonBanner
                head={<>Catch your leads' attention with a <span className='text-primblue'>unique</span> approach</>}
                para={"Include personalized Images and GIFs in your Linkedin and email messages to Increase your response rate to 63%"}
                Image="../Images/Banner/Solution/GIF.png"
                button="Get started"
            />
            <CommonSolution Data={Data} />
        </div>
    )
}

export default ImageGifPersonalization