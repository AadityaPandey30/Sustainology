import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CaseStudies = ({ sectionRefs }) => {
    const itemsRef = useRef([]);
    const updateActiveClass = (progress, numItems) => {
        const currentIndex = Math.round(progress * numItems);

        itemsRef.current.forEach((el, i) => {
            el.classList.remove('active', 'opacity-0');
            const isCurrent = i === currentIndex;
            const isNext = i === (currentIndex + 1) % numItems;
            const isPrevious = i === (currentIndex - 1 + numItems) % numItems;
            if (!isNext && !isPrevious && !isCurrent) {
                // If the item is neither the current, next, nor previous, add 'opacity-0'
                el.classList.add('opacity-0');
            }
            if (i === currentIndex) {
                el.classList.add('active');
            }

            if (currentIndex === 5) {
                itemsRef.current[0].classList.add('active');
                itemsRef.current[0].classList.remove('opacity-0');
                itemsRef.current[2].classList.add('opacity-0');
                itemsRef.current[3].classList.add('opacity-0');
            }
        });
    };
    return (
        <section
            className="pb-[40%]"
            id="con-3"
            ref={(el) => (sectionRefs.current[1] = el)}
        >
            <div className="p-2">
                <h2 className="text-4xl md:text-6xl text-[#33496F] font-bold text-center my-6">
                    Case Studies
                </h2>
                <div className="m-[2%] mb-[10%]">
                    <h3 className="text-2xl md:text-5xl my-8 text-[#33496F] font-bold text-center">
                        Sunderbans
                    </h3>
                    <div className="md:flex justify-between max-w-6xl m-auto my-[5%]">
                        <div className="flex text-[#33496F] text-xl my-4 mx-[2%]">
                            <div>
                                <Image
                                    loading="lazy"
                                    src="/images/business/calendar.png"
                                    alt="calender image"
                                    width={30}
                                    height={10}
                                    className="mr-3"
                                />
                            </div>
                            <p className="mr-4">January 13, 2024</p>
                            <li className="list-disc text-[#2F5738]">
                                4 min to read
                            </li>
                        </div>

                        <div className="md:flex text-xl my-4">
                            <p className="px-2 py-1 w-fit bg-[#E0EBD4] text-[#656F5A] rounded-full mx-2 my-2 md:my-0 ">
                                Sustainability{' '}
                            </p>
                            <p className="px-2 py-1 w-fit bg-[#E8EEF9] text-[#33496F] rounded-full mx-2 my-2 md:my-0 ">
                                Community Development
                            </p>
                            <p className="px-2 py-1 w-fit bg-[#EAF5DF] text-[#557F2A] rounded-full mx-2 my-2 md:my-0 ">
                                Carbon Credits
                            </p>
                        </div>
                    </div>

                    <div className="md:flex w-fit m-auto">
                        <Image
                            loading="lazy"
                            src="/images/business/sunder.png"
                            alt="Sundarbans"
                            width={1000}
                            height={1000}
                            layout="responsive"
                            className="mr-3 md:max-w-[45%]"
                        />
                        <div>
                            <div className="max-w-2xl md:ml-[8%] text-xl text-[#666666] text-justify">
                                <p className="text-2xl font-bold my-3 text-[#4C4C4C]">
                                    Introduction
                                </p>

                                <li className="my-1">
                                    <b>Project Scope:</b> Restoration of 1020
                                    hectares of mangrove forests in West Bengal,
                                    India, led by KCSH with Climainvest as the
                                    proponent and Sustainology as the
                                    consultant.
                                </li>
                                <li className="my-1">
                                    <b>Afforestation Progress:</b> 150 hectares
                                    planted with climate-resilient mangrove
                                    species, aiming for full restoration by
                                    2025.
                                </li>
                                <li className="my-1">
                                    <b>Community Empowerment:</b> Local
                                    communities, especially women, gain
                                    training, employment, and sustainable income
                                    opportunities.
                                </li>
                                <li className="my-1">
                                    <b>Advanced Monitoring:</b> Cutting-edge
                                    DMRV technology ensures transparency and
                                    accountability.
                                </li>
                                <li className="my-1">
                                    <b>Outcomes and Benefits:</b> Sequestration
                                    of 962,370 tonnes of CO₂, strengthened
                                    biodiversity and enhanced resilience against
                                    climate-induced disasters.
                                </li>

                                <Link href="/case-study/674715374e555775fc91acb4">
                                    <button className="text-xl text-white bg-[#2F5738] hover:bg-white hover:text-black border-2 py-2 px-[20%] rounded-[6px] my-8">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-[2%]">
                    <h3 className="text-2xl md:text-5xl my-8 text-[#33496F] font-bold text-center">
                        Siberut
                    </h3>
                    <div className="md:flex justify-between max-w-6xl m-auto my-[5%]">
                        <div className="flex text-[#33496F] text-xl my-4 mx-[2%]">
                            <div>
                                <Image
                                    loading="lazy"
                                    src="/images/business/calendar.png"
                                    alt="calender image"
                                    width={30}
                                    height={10}
                                    className="mr-3"
                                />
                            </div>
                            <p className="mr-4">January 13, 2024</p>
                            <li className="list-disc text-[#2F5738]">
                                4 min to read
                            </li>
                        </div>

                        <div className="md:flex text-xl text-center justify-right my-4">
                            <p className="px-2 py-1 w-fit bg-[#E0EBD4] text-[#656F5A] rounded-full mx-2 my-2 md:my-0 ">
                                Sustainability
                            </p>
                            <p className="px-2 py-1 w-fit min-w-[100px] bg-[#E8EEF9] text-[#33496F] rounded-full mx-2 my-2 md:my-0 ">
                                IFM
                            </p>
                            <p className="px-2 py-1 w-fit bg-[#EAF5DF] text-[#557F2A] rounded-full mx-2 my-2 md:my-0 ">
                                Carbon Credits
                            </p>
                        </div>
                    </div>

                    <div className="md:flex w-fit m-auto">
                        <Image
                            loading="lazy"
                            src="/images/business/siber.png"
                            alt="Sundarbans"
                            width={1000}
                            height={1000}
                            layout="responsive"
                            className="mr-3 md:max-w-[45%]"
                        />
                        <div>
                            <div className="max-w-2xl md:ml-[8%] text-xl text-[#666666]">
                                <p className="text-2xl font-bold my-3 text-[#4C4C4C]">
                                    Introduction
                                </p>
                                <li className="my-1">
                                    <b>Project Scope and ARR Implementation:</b>{' '}
                                    Conserving 19,875 hectares of Siberut
                                    Island’s rainforest in Indonesia through ARR
                                    methods, Sustainology, and local partners
                                    reduce emissions from avoided deforestation.
                                </li>
                                <li className="my-1">
                                    <b>Improved Forest Management:</b>{' '}
                                    Sustainable practices, including controlled
                                    logging, non-timber product harvesting, and
                                    anti-poaching measures, maintain forest
                                    health.
                                </li>
                                <li className="my-1">
                                    <b>Community Engagement:</b> Actively
                                    involves local tribes, providing livelihood
                                    options through eco-tourism and sustainable
                                    agriculture.
                                </li>
                                <li className="my-1">
                                    <b>Assisted Regeneration:</b> Uses natural
                                    regeneration techniques in degraded areas to
                                    speed up forest recovery and boost
                                    biodiversity.
                                </li>
                                <li className="my-1">
                                    <b>Outcomes and Benefits:</b> Prevents over
                                    10 million tonnes of CO₂ emissions over 30
                                    years, conserves endangered species
                                    habitats, and supports Indigenous
                                    communities with sustainable incomes and
                                    fair carbon revenue distribution.
                                </li>

                                <Link href="/case-study/67498b034e555775fc91bfd2">
                                    <button className="text-xl text-white bg-[#2F5738] hover:bg-white hover:text-black border-2 py-2 px-[20%] rounded-[6px] my-8">
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
