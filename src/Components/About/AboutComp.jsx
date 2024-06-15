import React from 'react'
import { IoBag } from 'react-icons/io5'

const AboutComp = () => {

    const ImagesData=[
        "../Images/Prop/AboutComp/image1.png",
        "../Images/Prop/AboutComp/image2.png",
        "../Images/Prop/AboutComp/image3.png",
        "../Images/Prop/AboutComp/image4.png",
        "../Images/Prop/AboutComp/image5.png",
        "../Images/Prop/AboutComp/image6.png",
    ]
    return (
        <div className='w-[90%] md:w-[80%] mx-auto mb-20 flex flex-col lg:flex-row justify-between gap-10 items-center'>
            <div className="flex flex-col gap-10 basis-[50%]">
                <div className="w-[60%] relative mx-auto">
                    <img src="../Images/Prop/AboutComp.png" alt="" className='w-full' />
                    <img src="../Images/Prop/AboutTag.png" alt="" className='absolute top-[10%] left-[-30%] w-[70%]' />
                    <img src="../Images/Prop/AboutTag2.png" alt="" className='absolute bottom-[10%] right-[-30%] w-[70%]' />
                </div>
                <div className="flex gap-8 items-center max-w-[100%] overflow-x-auto">
                    {ImagesData?.map((item,index)=>(
                        <img 
                            src={item} 
                            alt="" 
                            className='w-[33.33%]'
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4 basis-[50%]">
                <div className="flex gap-2 items-center font-pop">
                    <div className="bg-tempyellow rounded-lg p-2">
                        <IoBag className='text-white text-xl' />
                    </div>
                    <p className='text-lg'>About Us</p>
                </div>
                <h2 className='text-3xl md:text-5xl font-extrabold'>We Change The Industry For The <span className='text-tempyellow'>Better</span>.</h2>
                <p className='font-medium'>At LinxLead, we're revolutionizing outreach by empowering genuine connections and fostering lasting relationships. Our platform is dedicated to redefining industry standards, enabling authentic engagement and meaningful interactions. </p>
                <p className='font-medium'>With LinxLead, you can expect unparalleled support and industry-leading performance as we reshape the way businesses connect and thrive.</p>
            </div>
        </div>
    )
}

export default AboutComp