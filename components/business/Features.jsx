import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import '../../styles/business.css';
import FeaturesMobile from './FeaturesMobile';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Features = ({ sectionRefs }) => {
    const [isMobile, setIsMobile] = useState(false);
    const itemsRef = useRef([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1100);
        };
        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return <FeaturesMobile />;
    }

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
                id="cu-1"
                className="pt-4 pb-24"
                ref={(el) => (sectionRefs.current[0] = el)}
            >
                <h2 className="text-4xl md:text-6xl text-[#33496F] font-bold text-center mt-6">
                    Features
                </h2>
                {/* Circular Layout */}
                <div className="min-h-screen flex flex-col items-center justify-center px-8 relative text-left -top-24">
                    <div className="w-[25%] relative m-auto pb-12">
                        {/* Container for the circle */}
                        <div className="absolute inset-5">
                            <Image
                                loading="lazy"
                                src="/images/business/Mobile-feature.png"
                                alt="Features Image"
                                width={500}
                                height={0}
                                // layout="responsive"
                                className="rounded-lg w-[85%] max-w-xl absolute -top-[100px] left-[9%]"
                            />
                            {/* Advanced Reporting Tools */}
                            <div
                                className="absolute"
                                style={{
                                    transform:
                                        'rotate(10deg) translate(110%) rotate(-10deg)',
                                }}
                            >
                                <div className="p-3 bg-[#C9D6B0] shadow-lg rounded-lg border border-[#0666ff64] w-70 flex flex-col items-left">
                                    <h3 className="text-2xl font-semibold text-[#33496F]">
                                        Advanced Reporting Tools
                                    </h3>
                                    <p className="text-[#666666] text-xl mt-2">
                                        Access detailed climate impact reports
                                        and integrate them into your business
                                        intelligence dashboard.
                                    </p>
                                </div>
                            </div>

                            {/* Order Management Integration */}
                            <div
                                className="absolute"
                                style={{
                                    transform:
                                        'rotate(90deg) translate(110%) rotate(-90deg)',
                                }}
                            >
                                <div className="p-3 bg-[#2f573828] shadow-lg rounded-lg border border-[#0666ff64] w-70 flex flex-col items-left">
                                    <h3 className="text-2xl font-semibold text-[#33496F]">
                                        Order Management Integration
                                    </h3>
                                    <p className="text-[#666666] text-xl mt-2">
                                        Sync with your existing order management
                                        system to track carbon emissions for
                                        every transaction.
                                    </p>
                                </div>
                            </div>

                            {/* Real-Time Carbon Offsetting */}
                            <div
                                className="absolute"
                                style={{
                                    transform:
                                        'rotate(170deg) translate(110%) rotate(-170deg)',
                                }}
                            >
                                <div className="p-3 bg-[#f5ff6650] shadow-lg rounded-lg border border-[#0666ff64] w-70 flex flex-col items-left">
                                    <h3 className="text-2xl font-semibold text-[#33496F]">
                                        Real-Time Carbon Offsetting
                                    </h3>
                                    <p className="text-[#666666] text-xl mt-2">
                                        Provide real-time carbon offset options
                                        to customers at checkout, enhancing your
                                        sustainability profile.
                                    </p>
                                </div>
                            </div>

                            {/* Life Cycle Assessment */}
                            <div
                                className="absolute"
                                style={{
                                    transform:
                                        'rotate(216deg) translate(110%) rotate(-216deg)',
                                }}
                            >
                                <div className="p-3 bg-[#87878721] shadow-lg rounded-lg border border-[#0666ff64] w-70 flex flex-col items-left">
                                    <h3 className="text-2xl font-semibold text-[#33496F] ">
                                        Life Cycle Assessment
                                    </h3>
                                    <p className="text-[#666666] text-xl mt-2">
                                        Tracking the life cycle of your product
                                        from Cradle-To-Grave and Cradle-To-Gate
                                    </p>
                                </div>
                            </div>

                            {/* Automation of Carbon Tracking */}
                            <div
                                className="absolute"
                                style={{
                                    transform:
                                        'rotate(324deg) translate(110%) rotate(-324deg)',
                                }}
                            >
                                <div className="p-3 bg-[#ffd6d65d] shadow-lg rounded-lg border border-[#0666ff64] w-70 flex flex-col items-left">
                                    <h3 className="text-2xl font-semibold text-[#33496F]">
                                        Automation of Carbon Tracking
                                    </h3>
                                    <p className="text-[#666666] text-xl mt-2">
                                        Automatically calculate carbon emissions
                                        for products, deliveries, or operations
                                        without manual work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h2 className="text-4xl md:text-6xl text-[#33496F] font-bold text-center pt-16 pb-6">
                Simple Steps to Integrate Sustainology API
            </h2>
        </div>
    );
};

export default Features;
