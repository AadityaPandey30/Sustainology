'use client';
import React, { useState, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Integration = ({ sectionRefs }) => {
    const itemsRef = useRef([]);
    const slides = [
        {
            id: 'slide-1',
            title: 'Obtain API Token Access',
            description:
                "Unlike traditional API keys, Sustainology's API uses token-based authentication. Once your business is registered in our system, you'll receive access to seamlessly showcase carbon emissions data directly on your platform, enabling real-time sustainability insights for your customers.",
        },
        {
            id: 'slide-2',
            title: 'Incorporate LCA Results',
            description:
                'We conduct a detailed Life Cycle Assessment (LCA) for each product. This data is fed into the system, enabling precise calculation of carbon emissions throughout the product’s lifecycle.',
        },
        {
            id: 'slide-3',
            title: 'Link Product ID with Carbon Data',
            description:
                'Map each product in your database to its respective LCA result. The API returns carbon emission values based on this linked product ID.',
        },
        {
            id: 'slide-4',
            title: 'Integrate Core Features',
            description:
                'Choose which sustainability features to enable, such as carbon tracking, real-time offsetting, or donation options, and configure these based on the token-based access and LCA data integration.',
        },
    ];

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

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
        <section id="cu-2" ref={(el) => (sectionRefs.current[1] = el)}>
            <div className="flex flex-col lg:flex-row items-center p-4 m-auto justify-center h-screen bg-gradient-to-b from-[#182C1C] to-[#1A2538] text-white">
                {/* Buttons */}
                <div className="flex lg:flex-col lg:space-y-4 lg:mr-8 mb-4 lg:mb-0 space-x-4 lg:space-x-0">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            className="w-10 h-10 md:w-20 md:h-20 rounded-full border-2 hover:bg-[#35661d3d] border-gray-400 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 text-2xl"
                            onClick={() => handleClick(slide.id)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                {/* Slides */}
                <div className="w-full lg:w-2/3 h-2/5 lg:h-2/3 md:mx-0 overflow-y-auto no-scrollbar snap-y snap-mandatory">
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            id={slide.id}
                            className="snap-start w-full h-[33vh] md:h-[90%] mx-auto my-16 flex flex-col p-[5%] md:py-[10%] md:px-[10%] text-left bg-opacity-75 bg-[#ffffff2f] rounded-[12px] md:rounded-[67px] text-white border-[#ffffff55] border-2"
                        >
                            <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
                                {slide.title}
                            </h2>
                            <p className="text-sm lg:text-2xl">
                                {slide.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integration;
