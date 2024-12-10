import React, { useRef } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { PiStarFourFill } from 'react-icons/pi';
import Link from 'next/link';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Benefits = ({ sectionRefs }) => {
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
        <div>
            <section
                id="cu-3"
                ref={(el) => (sectionRefs.current[2] = el)}
                className="p-[2%] bg-gradient-to-b from-[#E0EBD4] to-[#596c5d]"
            >
                <div className="m-auto">
                    <h2 className="text-4xl md:text-6xl text-[#33496F] font-bold text-center my-6">
                        Elevate Your Business with Sustainology API
                    </h2>
                    <p className="text-2xl m-auto text-[#33496F] font-normal pt-6 px-[6%] text-center">
                        Using the Sustainology API isn't just smart—it's
                        essential. By offering climate-conscious solutions, your
                        business can attract eco-aware customers and strengthen
                        brand loyalty. Here’s how Sustainology can enhance your
                        business’s sustainability profile
                    </p>
                    <div className="py-16 flex flex-col md:flex-row-reverse justify-center m-auto mx-2">
                        <Image
                            loading="lazy"
                            src="/images/business/benefits-bg.png"
                            alt="Features Image"
                            width={500}
                            height={500}
                            // layout=""
                            className="h-1/2 md:w-[50%] my-5 md:my-0"
                        />
                        <div className="">
                            <div className="relative md:left-16 md:top-20 rounded-[20px] max-w-2xl px-[8%] py-[7%] bg-gradient-radial from-[#ffffff31] to-[#ffffffbe] border-[#ffffff72] backdrop-blur-sm border-2">
                                <div className="my-3">
                                    <div className="flex">
                                        <div>
                                            <PiStarFourFill className="mt-2 mr-3" />
                                        </div>
                                        <p className="text-lg md:text-2xl text-gray-700">
                                            <b className="text-[#333333]">
                                                Enhance Brand Reputation:{' '}
                                            </b>
                                            Show customers you care about the
                                            planet by providing clear climate
                                            impact data and carbon offsetting
                                            options.
                                        </p>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="flex">
                                        <div>
                                            <PiStarFourFill className="mt-2 mr-3" />
                                        </div>
                                        <p className="text-lg md:text-2xl text-gray-700">
                                            <b className="text-[#333333]">
                                                Stay Ahead of Regulations:{' '}
                                            </b>
                                            With stricter climate regulations
                                            coming, integrating Sustainology's
                                            API ensures compliance and keeps you
                                            ahead.
                                        </p>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="flex">
                                        <div>
                                            <PiStarFourFill className="mt-2 mr-3" />
                                        </div>
                                        <p className="text-lg md:text-2xl text-gray-700">
                                            <b className="text-[#333333]">
                                                Drive Customer Engagement:{' '}
                                            </b>
                                            Eco-conscious consumers are more
                                            likely to support businesses that
                                            actively reduce their carbon
                                            footprint.
                                        </p>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="flex">
                                        <div>
                                            <PiStarFourFill className="mt-2 mr-3" />
                                        </div>
                                        <p className="text-lg md:text-2xl text-gray-700">
                                            <b className="text-[#333333]">
                                                Increase Revenue Opportunities:{' '}
                                            </b>
                                            Offering climate-friendly options
                                            like carbon offsets can create new
                                            revenue streams and attract a
                                            broader, value-driven audience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-2 md:mx-[13%]">
                        <p className="text-white text-xl flex">
                            Integrate our APIs
                            <FaArrowRight className="pb-1 size-8 pl-4" />
                        </p>
                        <Link href="/contact-us">
                            <button className="text-xl text-white bg-[#2F5738] py-2 px-[12%] rounded-[6px] my-6">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benefits;
