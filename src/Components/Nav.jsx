import React, { useState } from 'react'
import { FaCaretDown, FaSortDown } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { TiThMenu } from 'react-icons/ti'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

    const [MobileMenu, setMobileMenu] = useState(false)
    const [SubMenu, setSubMenu] = useState(false)

    const Tabs = [
        {
            name: "Solutions",
            type: "Main",
            SubArray: [
                {
                    name: "Smart Sequence",
                    Link: "/solutions/smartsequence"
                },
                {
                    name: "Linkedin Solution",
                    Link: "/solutions/linkedin-solution"
                },
                {
                    name: "Email Verification",
                    Link: "/solutions/email-verification"
                },
                {
                    name: "Image Gif Personalization",
                    Link: "/solutions/image-gif-personalization"
                },
            ]
        },
        {
            name: "Partnership",
            Link: "/partnership"
        },
        {
            name: "Pricing",
            Link: "/pricing"
        },
        {
            name: "About Us",
            Link: "/about-us"
        }
    ]

    const location = useLocation()


    return (
        <>
            <div className='bg-white fixed z-50 top-0 w-screen py-2 px-8 flex items-center justify-between gap-4'>
                <Link to="/">
                    <div className="flex gap-1 font-pop text-xl font-semibold items-center">
                        <img src="../Logo.png" alt="" className='w-16 h-16' />
                        <h3>Linxlead</h3>
                    </div>
                </Link>
                <div className=" gap-6 text-lg xl:flex hidden font-pop text-medium items-center">
                    {Tabs.map((item, index) => (
                        <>
                            {item?.type == "Main" ?
                                <div className={`flex gap-2 cursor-pointer group relative items-center font-pop ease-in-out duration-300 border-b-2 ${location.pathname.includes("solutions") ? 'border-primblue' : 'border-transparent'}`}>
                                    <div className="flex gap-2 items center" onClick={() => { setSubMenu(!SubMenu) }}>
                                        <h4>{item.name}</h4>
                                        <FaCaretDown className='text-xl group-hover:rotate-180 ease-in-out duration-300' />
                                    </div>
                                    <div
                                        className={`bg-white shadow-2xl group-hover:flex hidden  rounded-lg py-2 px-4 absolute w-max top-[110%] flex-col gap-2`}
                                    >
                                        {item?.SubArray?.map((item2, index2) => (
                                            <Link to={item2.Link}>
                                                <h3>{item2.name}</h3>
                                            </Link>
                                        ))}
                                    </div>
                                </div> :
                                <Link to={item?.Link} className={`cursor-pointer border-b-2 ${location.pathname == item.Link ? " border-primblue" : "border-transparent"}`}>
                                    <h3>{item.name}</h3>
                                </Link>
                            }
                        </>
                    ))}
                </div>
                <div className="gap-2 xl:flex hidden items-center font-pop">
                    {/* <button className='bg-primblue border-2 border-primblue hover:bg-transparent hover:text-primblue rounded-lg py-2 px-3 text-white font-bold ease-in-out duration-300'>
                        Try for free
                    </button> */}
                    <button className='flex items-center gap-2 rounded-lg border-2 border-tempyellow bg-tempyellow text-black hover:bg-transparent ease-in-out duration-300 py-2 px-3 font-bold'>
                        <img src="../Images/Prop/Thumb.svg" alt="" />
                        <p>Login</p>
                    </button>
                </div>
                <div className='xl:hidden block' onClick={() => { setMobileMenu(!MobileMenu) }}>
                    {!MobileMenu ?
                        <TiThMenu className='text-2xl' /> :
                        <IoClose className='text-3xl' />
                    }
                </div>
            </div>
            {MobileMenu &&
                <div className="bg-white fixed top-0 xl:hidden left-0 rounded-lg w-[80%] md:w-[50%] h-screen py-4 px-6 shadow-2xl">
                    <div className="flex flex-col gap-6 h-full justify-between">
                        <div className='flex flex-col gap-4'>
                            <Link to={"/"}>
                                <div className="flex gap-1 font-pop text-xl font-semibold items-center">
                                    <img src="../Logo.png" alt="" className='w-16 h-16' />
                                    <h3>Linxlead</h3>
                                </div>
                            </Link>
                            <div className="gap-6 text-lg flex flex-col font-pop text-medium px-6">
                                {Tabs.map((item, index) => (
                                    <>
                                        {item?.type == "Main" ?
                                            <div
                                                className='flex flex-col gap-2 cursor-pointer group relative font-pop ease-in-out duration-300'
                                            >
                                                <div className="flex gap-2 items-center" onClick={() => { setSubMenu(!SubMenu) }}>
                                                    <h4>{item.name}</h4>
                                                    <FaCaretDown className={`text-xl ${SubMenu & "rotate-180"} ease-in-out duration-300`} />
                                                </div>
                                                <div className={`${!SubMenu ? "hidden" : "flex"} rounded-lg py-2 px-4 flex-col gap-2`}>
                                                    {item?.SubArray?.map((item2, index2) => (
                                                        <Link to={item2.Link}>
                                                            <h3>{item2.name}</h3>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div> :
                                            <Link to={item?.Link} className='cursor-pointerr'>
                                                <h3>{item.name}</h3>
                                            </Link>
                                        }
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="gap-2 flex flex-col font-pop">
                            {/* <button className='bg-primblue border-2 border-primblue hover:bg-transparent hover:text-primblue rounded-lg py-2 px-3 text-white font-bold ease-in-out duration-300'>
                                Try for free
                            </button> */}
                            <button className='flex items-center text-center justify-center gap-2 rounded-lg border-2 border-tempyellow bg-tempyellow text-black hover:bg-transparent ease-in-out duration-300 py-2 px-3 font-bold'>
                                <img src="../Images/Prop/Thumb.svg" alt="" />
                                <p>Login</p>
                            </button>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default Nav