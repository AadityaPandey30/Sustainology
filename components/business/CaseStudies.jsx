import React from 'react'
import Image from 'next/image'

const CaseStudies = () => {
    return (
        <section>
            <div className='p-2'>
                <h2 className="text-4xl md:text-6xl text-[#33496F] font-bold text-center my-6">
                    Case Studies
                </h2>
                <div className='mx-[2%]'>
                    <h3 className='text-2xl md:text-5xl my-8 text-[#33496F] font-bold text-center'>Sunderbans</h3>
                    <div className='md:flex justify-between max-w-6xl m-auto my-[5%]'>

                        <div className='flex text-[#33496F] text-xl my-4 mx-[2%]'>
                            <div>
                                <Image
                                    loading="lazy"
                                    src="/images/business/calendar.png"
                                    alt="calender image"
                                    width={30}
                                    height={10}
                                    className="mr-3" />
                            </div>
                            <p className='mr-4'>January  13, 2024</p>
                            <li className='list-disc text-[#2F5738]'>4 min to read</li>
                        </div>

                        <div className='md:flex text-xl my-4'>
                            <p className='px-2 py-1 w-fit bg-[#E0EBD4] text-[#656F5A] rounded-full mx-2 my-2 md:my-0 '>Sustainability </p>
                            <p className='px-2 py-1 w-fit bg-[#E8EEF9] text-[#33496F] rounded-full mx-2 my-2 md:my-0 '>Community Development</p>
                            <p className='px-2 py-1 w-fit bg-[#EAF5DF] text-[#557F2A] rounded-full mx-2 my-2 md:my-0 '>Carbon Credits</p>
                        </div>
                    </div>

                    <div className='md:flex w-fit m-auto'>
                        <Image
                        loading="lazy"
                        src="/images/business/sundar.png"
                        alt="calender image"
                        width={500}
                        height={500}
                        layout='responsive'
                        className="mr-3 max-w-1/2" />
                        
                        <div className='max-w-2xl md:ml-[3%]'>
                            <p className='text-2xl font-bold my-3 text-[#4C4C4C]'>Introduction</p>
                            <p className='text-xl text-[#666666]'>
                            <li><b>Project Scope:</b> Restoration of 1020 hectares of mangrove forests in West Bengal, India, led by KCSH with Climainvest as the proponent and Sustainology as the consultant.</li>
                            <li><b>Afforestation Progress:</b> 150 hectares planted with climate-resilient mangrove species, aiming for full restoration by 2025.</li>
                            <li><b>Community Empowerment:</b> Local communities, especially women, gain training, employment, and sustainable income opportunities.</li>
                            <li><b>Advanced Monitoring:</b> Cutting-edge DMRV technology ensures transparency and accountability.</li>
                            <li><b>Outcomes and Benefits:</b> Sequestration of 962,370 tonnes of CO₂, strengthened biodiversity and enhanced resilience against climate-induced disasters.</li>
                            </p>

                            <Link href
                            <button className=''></button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default CaseStudies
