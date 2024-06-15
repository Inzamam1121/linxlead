import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Rating } from '@mui/material';
import { Pagination } from 'swiper/modules';

const Testimonial = () => {

    const TestimonialData = [
        {
            name: "Leo",
            Positon: "Mid Market",
            rating: "5",
            head: "Absolutely love it!",
            para: "I've been using LinxLead for the past six months, and it's been a complete game-changer. The LinkedIn automation features are top-notch, making lead generation and appointment setting a breeze. The detailed reports help me track my progress and adjust my strategies effectively. I’ve never seen such a significant boost in my sales pipeline before.",
            img: "../Images/Prop/Test.png"
        },
        {
            name: "Leo",
            Positon: "Mid Market",
            rating: "5",
            head: "Absolutely love it!",
            para: "I've been using LinxLead for the past six months, and it's been a complete game-changer. The LinkedIn automation features are top-notch, making lead generation and appointment setting a breeze. The detailed reports help me track my progress and adjust my strategies effectively. I’ve never seen such a significant boost in my sales pipeline before.",
            img: "../Images/Prop/Test.png"
        },
        {
            name: "Leo",
            Positon: "Mid Market",
            rating: "5",
            head: "Absolutely love it!",
            para: "I've been using LinxLead for the past six months, and it's been a complete game-changer. The LinkedIn automation features are top-notch, making lead generation and appointment setting a breeze. The detailed reports help me track my progress and adjust my strategies effectively. I’ve never seen such a significant boost in my sales pipeline before.",
            img: "../Images/Prop/Test.png"
        },
        {
            name: "Leo",
            Positon: "Mid Market",
            rating: "5",
            head: "Absolutely love it!",
            para: "I've been using LinxLead for the past six months, and it's been a complete game-changer. The LinkedIn automation features are top-notch, making lead generation and appointment setting a breeze. The detailed reports help me track my progress and adjust my strategies effectively. I’ve never seen such a significant boost in my sales pipeline before.",
            img: "../Images/Prop/Test.png"
        },
        {
            name: "Leo",
            Positon: "Mid Market",
            rating: "5",
            head: "Absolutely love it!",
            para: "I've been using LinxLead for the past six months, and it's been a complete game-changer. The LinkedIn automation features are top-notch, making lead generation and appointment setting a breeze. The detailed reports help me track my progress and adjust my strategies effectively. I’ve never seen such a significant boost in my sales pipeline before.",
            img: "../Images/Prop/Test.png"
        },
        {
            name: "Leo",
            Positon: "Mid Market",
            rating: "5",
            head: "Absolutely love it!",
            para: "I've been using LinxLead for the past six months, and it's been a complete game-changer. The LinkedIn automation features are top-notch, making lead generation and appointment setting a breeze. The detailed reports help me track my progress and adjust my strategies effectively. I’ve never seen such a significant boost in my sales pipeline before.",
            img: "../Images/Prop/Test.png"
        },
        {
            name: "Leo",
            Positon: "Mid Market",
            rating: "5",
            head: "Absolutely love it!",
            para: "I've been using LinxLead for the past six months, and it's been a complete game-changer. The LinkedIn automation features are top-notch, making lead generation and appointment setting a breeze. The detailed reports help me track my progress and adjust my strategies effectively. I’ve never seen such a significant boost in my sales pipeline before.",
            img: "../Images/Prop/Test.png"
        },
    ]
    return (
        <div className='flex flex-col gap-10 w-[90%] lg:w-[80%] mx-auto justify-center items-center'>
            <h1 className='text-3xl md:text-5xl font-bold'>See how Linxlead helps others <span className='text-primblue'>increase revenue.</span></h1>
            <div className='max-w-[100%]'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper my-10"
                >
                    {TestimonialData?.map((item, index) => (
                        <SwiperSlide>
                            <div className="bg-white mx-2 my-10 shadow-shadowfaq rounded-xl py-6 px-4 font-pop flex flex-col gap-6">
                                <div className="flex gap-4 w-full">
                                    <div className="w-20 rounded-full">
                                        <img src={item.img} alt="" className='w-full h-full rounded-full' />
                                    </div>
                                    <div className="flex w-full flex-col gap-2">
                                        <h2 className='text-lg font-bold'>{item.name}</h2>
                                        <div className="flex justify-between">
                                            <p>{item.Positon}</p>
                                            <Rating name="read-only" value={item.rating} readOnly />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 items-center justify-center text-center font-pop">
                                    <h3 className='text-lg font-semibold'>{item.head}</h3>
                                    <p className='text-left'>{item.para}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonial