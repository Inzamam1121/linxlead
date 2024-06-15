import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FiFacebook, FiTwitter } from 'react-icons/fi'

const Team = () => {

    const TeamData=[
        {
            image:"../Images/Prop/Team/Jocelyn.png",
            Head:"Jocelyn Schleifer",
            Position:"Co-Founder",
            para:"There are many variations of passages of Lorem Ipsum available",
            Social:[
                {
                    link:"",
                    icon:FiFacebook
                },
                {
                    link:"",
                    icon:FaInstagram
                },
                {
                    link:"",
                    icon:FiTwitter
                },
            ]
        },
        {
            image:"../Images/Prop/Team/Martin.png",
            Head:"Martin Donin",
            Position:"CEO",
            para:"There are many variations of passages of Lorem Ipsum available",
            Social:[
                {
                    link:"",
                    icon:FiFacebook
                },
                {
                    link:"",
                    icon:FaInstagram
                },
                {
                    link:"",
                    icon:FiTwitter
                },
            ]
        },
        {
            image:"../Images/Prop/Team/Jordyn.png",
            Head:"Jordyn Septimus",
            Position:"Development team",
            para:"There are many variations of passages of Lorem Ipsum available",
            Social:[
                {
                    link:"",
                    icon:FiFacebook
                },
                {
                    link:"",
                    icon:FaInstagram
                },
                {
                    link:"",
                    icon:FiTwitter
                },
            ]
        },
        {
            image:"../Images/Prop/Team/Leo.png",
            Head:"Leo Arcand",
            Position:"Software Engineer",
            para:"There are many variations of passages of Lorem Ipsum available",
            Social:[
                {
                    link:"",
                    icon:FiFacebook
                },
                {
                    link:"",
                    icon:FaInstagram
                },
                {
                    link:"",
                    icon:FiTwitter
                },
            ]
        },
        {
            image:"../Images/Prop/Team/Marilyn.png",
            Head:"Marilyn Levin",
            Position:"Marketing team",
            para:"There are many variations of passages of Lorem Ipsum available",
            Social:[
                {
                    link:"",
                    icon:FiFacebook
                },
                {
                    link:"",
                    icon:FaInstagram
                },
                {
                    link:"",
                    icon:FiTwitter
                },
            ]
        },
        {
            image:"../Images/Prop/Team/Lindsey.png",
            Head:"Lindsey Dokidis",
            Position:"Customer success team",
            para:"There are many variations of passages of Lorem Ipsum available",
            Social:[
                {
                    link:"",
                    icon:FiFacebook
                },
                {
                    link:"",
                    icon:FaInstagram
                },
                {
                    link:"",
                    icon:FiTwitter
                },
            ]
        },
        {
            image:"../Images/Prop/Team/Hanna.png",
            Head:"Hanna Dias",
            Position:"Product team",
            para:"There are many variations of passages of Lorem Ipsum available",
            Social:[
                {
                    link:"",
                    icon:FiFacebook
                },
                {
                    link:"",
                    icon:FaInstagram
                },
                {
                    link:"",
                    icon:FiTwitter
                },
            ]
        },
        {
            image:"../Images/Prop/Team/Ryan.png",
            Head:"Ryan Gouse",
            Position:"Sales team",
            para:"There are many variations of passages of Lorem Ipsum available",
            Social:[
                {
                    link:"",
                    icon:FiFacebook
                },
                {
                    link:"",
                    icon:FaInstagram
                },
                {
                    link:"",
                    icon:FiTwitter
                },
            ]
        }
    ]

  return (
    <div className='my-10 w-[90%] lg:w-[80%] mx-auto'>
        <div className="flex flex-col gap-4 font-pop justify-center items-center text-center">
            <h4 className='font-medium text-lg'>OUR TEAM</h4>
            <h1 className='text-4xl font-semibold'>Meet the LinxLead team</h1>
            <p className='max-w-4xl font-medium'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-10">
            {TeamData?.map((item,index)=>(
                <div className="flex flex-col border-2 border-[#EAECF0] rounded-lg" key={index}>
                    <div className=''>
                        <img src={item.image} alt="" />
                    </div>
                    <div className="bg-white py-6 px-4 flex flex-col gap-8">
                        <div className="flex flex-col gap-4 font-pop">
                            <h3 className='text-xl font-semibold'>{item.Head}</h3>
                            <h4 className='text-lg font-medium'>{item.Position}</h4>
                            <p className='text-[#5F6980]'>{item.para}</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            {item.Social.map((item2,index2)=>(
                                <a href={item2?.link} target='_blank'>
                                    <div className="bg-[#F2F4F7] p-2 rounded-full">
                                        <item2.icon className='text-xl'/>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team