import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    const SocialLinks = [
        {
            icon: FaFacebook,
            link: "",
        },
        {
            icon: FaInstagram,
            link: "",
        },
        {
            icon: FaYoutube,
            link: "",
        },
        {
            icon: FaTwitter,
            link: "",
        },
    ]

    const Features = [
        "Something Great",
        "Another Thing",
        "So many Features",
        "It's Amazing"
    ]

    const Company = [
        {
            Link: "",
            head: "Blog"
        },
        {
            Link: "",
            head: "About Us"
        },
        {
            Link: "",
            head: "Contact"
        },
        {
            Link: "",
            head: "Jobs"
        }
    ]

    const Legal = [
        {
            Link: "",
            head: "Privacy Policy"
        },
        {
            Link: "",
            head: "Terms of Use"
        },
        {
            Link: "",
            head: "Cookie Policy"
        }
    ]

    return (
        <div className='flex flex-col gap-8 lg:flex-row justify-between w-[90%] lg:w-[80%] mx-auto my-20'>
            <div className="flex flex-col gap-4 font-pop">
                <h2 className='text-xl'>© 2024 LinxLead</h2>
                <div className="flex gap-2 items-center">
                    {SocialLinks?.map((item, index) => (
                        <a href={item.link} target='_blank' key={index}>
                            <item.icon className='text-2xl' />
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex gap-6 basis-[60%] justify-between">
                <div className="flex flex-col gap-4 font-pop">
                    <h3 className='text-xl font-medium'>Features</h3>
                    <div className="flex flex-col gap-2">
                        {Features?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 font-pop">
                    <h3 className='text-xl font-medium'>Company</h3>
                    <div className="flex flex-col gap-2">
                        {Company?.map((item, index) => (
                            <Link to={item.Link} key={index}>
                                <p>{item.head}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 font-pop">
                    <h3 className='text-xl font-medium'>Legal</h3>
                    <div className="flex flex-col gap-2">
                        {Legal?.map((item, index) => (
                            <Link to={item.Link} key={index}>
                                <p>{item.head}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer