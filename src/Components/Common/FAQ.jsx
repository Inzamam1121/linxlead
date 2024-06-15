import React, { useState } from 'react'

const FAQ = () => {

    const [FAQindex, setFAQindex] = useState(null)

    const FAQData = [
        {
            question: "What is LinxLead?",
            answer: "lorierd f oefveo fbvd fdxkfe kfhefkf d bfidjvbcd gdjkgd fkddkgdogdkfiefdhdknvcd kogmbf mkc mkcdbkjdbx mcd  jfedj cmkd kjfgsjisjkxvdjfgjxv",
        },
        {
            question: "How secure is LinxLead?",
            answer: "lorierd f oefveo fbvd fdxkfe kfhefkf d bfidjvbcd gdjkgd fkddkgdogdkfiefdhdknvcd kogmbf mkc mkcdbkjdbx mcd  jfedj cmkd kjfgsjisjkxvdjfgjxv",
        },
        {
            question: "Can I customize messages?",
            answer: "lorierd f oefveo fbvd fdxkfe kfhefkf d bfidjvbcd gdjkgd fkddkgdogdkfiefdhdknvcd kogmbf mkc mkcdbkjdbx mcd  jfedj cmkd kjfgsjisjkxvdjfgjxv",
        },
        {
            question: "Is there customer support?",
            answer: "lorierd f oefveo fbvd fdxkfe kfhefkf d bfidjvbcd gdjkgd fkddkgdogdkfiefdhdknvcd kogmbf mkc mkcdbkjdbx mcd  jfedj cmkd kjfgsjisjkxvdjfgjxv",
        }
    ]

    return (
        <div className='flex py-10 flex-col gap-8 w-[90%] lg:w-[80%] mx-auto'>
            <div className="flex flex-col gap-3 font-pop">
                <h3 className='text-4xl font-bold'>FAQ<span className='text-primblue'>s</span></h3>
                <p className='md:text-lg'>Get answers to common questions about LinxLead and understand how our tool can revolutionize your LinkedIn strategy.</p>
            </div>
            <div className="flex flex-col bg-white shadow-shadowfaq rounded-xl">
                {FAQData?.map((item, index) => (
                    <div className="py-8 px-8 flex flex-col gap-4 cursor-pointer font-pop border-b-2 border-[#AFABAB] last:border-b-transparent" key={index} onClick={() => { setFAQindex(index) }}>
                        <h3 className='text-lg'>{item.question}</h3>
                        {FAQindex == index && <p>{item.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ