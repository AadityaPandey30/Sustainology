import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const DevelopmentProcess = ({ sectionRefs }) => {
    const [activeSection, setActiveSection] = useState('car-1');

    const itemsRef = useRef([]);
    const sections = ['car-1', 'car-2'];

    const handleSwipe = (direction) => {
        const currentIndex = sections.indexOf(activeSection);

        if (direction === 'left' && currentIndex < sections.length - 1) {
            setActiveSection(sections[currentIndex + 1]);
        } else if (direction === 'right' && currentIndex > 0) {
            setActiveSection(sections[currentIndex - 1]);
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        trackMouse: true, // Enables swipe detection with a mouse
    });

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

            if (currentIndex === 2) {
                itemsRef.current[0].classList.add('active');
                itemsRef.current[0].classList.remove('opacity-0');
                itemsRef.current[2].classList.add('opacity-0');
                itemsRef.current[3].classList.add('opacity-0');
            }
        });
    };

    return (
        <div
            {...handlers}
            className="relative bg-gradient-to-b from-[#98BA76] to-[#DCE0E7] py-[3%] overflow-hidden"
            id="con-2"
            ref={(el) => (sectionRefs.current[1] = el)}
        >
            <section>
                {/* Background Image */}
                <Image
                    src="/images/green.png" // Path relative to the 'public' directory
                    alt="Background"
                    width={800}
                    height={800}
                    layout="responsive"
                    className={`absolute w-fit max-w-5xl top-[20%] -right-[18%] h-3/5 pointer-events-none
    transition-transform duration-2000 ease-in-out
    ${activeSection === 'car-1' ? 'translate-x-0' : '-translate-x-[100%]'}`}
                />

                <h2 className="text-4xl md:text-6xl text-[#33496F] font-bold text-left py-6 pl-[3%]">
                    The Development Process
                </h2>
                <hr className="border-black border-1 mx-[3%] max-w-7xl" />
                {/* Sections Wrapper */}
                <div className="relative h-fit">
                    {/* Navigation Buttons */}
                    <div className="flex w-fit m-auto mt-8">
                        <button onClick={() => setActiveSection('car-1')}>
                            <div
                                className={`w-4 h-4 rounded-full m-2 ${
                                    activeSection === 'car-1'
                                        ? 'bg-[#33496F]'
                                        : 'bg-[#999999]'
                                } border-black`}
                            ></div>
                        </button>
                        <button onClick={() => setActiveSection('car-2')}>
                            <div
                                className={`w-4 h-4 rounded-full m-2 ${
                                    activeSection === 'car-2'
                                        ? 'bg-[#33496F]'
                                        : 'bg-[#999999]'
                                } border-black`}
                            ></div>
                        </button>
                    </div>
                    {/* First Section */}
                    <div
                        id="car-1"
                        className={`transition-opacity duration-500 ease-in-out ${
                            activeSection === 'car-1'
                                ? 'opacity-100'
                                : 'opacity-0 absolute'
                        }`}
                    >
                        {/* First Div */}
                        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:gap-10 mx-[1%] mt-[3%]">
                            <div className="mx-2 my-4 md:my-10 p-7 pl-10 w-full rounded-[20px] border-white border-2 max-w-[700px] bg-gradient-radial from-[#c1ffb75a] to-[#ffffffc3] backdrop-blur-md min-h-[35vh]">
                                <p className="text-xl md:text-3xl text-[#33496F] mb-3 mt-1 font-medium">
                                    Feasibility Assessment & Project Design
                                </p>
                                <ul className="text-xl md:text-[23px] list-disc leading-9 text-[#33496F]">
                                    <li className="mb-1">
                                        Analysis of the potential for emission
                                        reductions or carbon capture based on
                                        location, resources, and environmental
                                        impact.
                                    </li>
                                    <li className="mb-1">
                                        Defining of the project’s objectives,
                                        methodology, and compliance with carbon
                                        standards (e.g., VCS, Gold Standard).
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Second Div */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-10  mx-[1%]">
                            <div className="mx-2 my-4 md:my-10 p-7 pl-10 w-full rounded-[20px] min-h-[40vh] border-white border-2 max-w-[700px] bg-[#2F5738]">
                                <p className="text-xl md:text-3xl text-[#ffffff] mb-3 mt-1 font-normal">
                                    Baseline Studies & Data Collection
                                </p>
                                <ul className="text-xl md:text-[23px] list-disc leading-9 text-[#C9D6B0]">
                                    <li className="mb-1">
                                        Establishing a “baseline” to measure
                                        current emissions levels.
                                    </li>
                                    <li className="mb-1">
                                        Gathering data on local ecosystems,
                                        carbon stocks, and socio-economic
                                        factors to set measurable benchmarks.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Third Div */}
                        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:gap-10  mx-[1%]">
                            <div className="mx-2 my-4 md:my-10 p-7 pl-10 w-full rounded-[20px] min-h-[40vh] border-white border-2 max-w-[700px] bg-gradient-radial from-[#c1ffb75a] to-[#ffffffc3] backdrop-blur-md">
                                <p className="text-xl md:text-3xl text-[#33496F] mb-3 mt-1 font-medium">
                                    Implementation & Monitoring Plan
                                </p>
                                <ul className="text-xl md:text-[23px] list-disc leading-9 text-[#33496F]">
                                    <li className="mb-1">
                                        Outlining the step-by-step project
                                        activities, timelines, and resource
                                        requirements.
                                    </li>
                                    <li className="mb-1">
                                        Designing a robust monitoring plan to
                                        track emissions reductions, ensuring
                                        accuracy and transparency.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Second Section */}
                    <div
                        id="car-2"
                        className={`transition-opacity duration-500 ease-in-out ${
                            activeSection === 'car-2'
                                ? 'opacity-100'
                                : 'opacity-0 absolute'
                        }`}
                    >
                        {/* First Div */}
                        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:gap-10 mx-[1%] mt-[3%]">
                            <div className="mx-2 my-4 md:my-10 p-7 pl-10 w-full rounded-[20px] border-white border-2 max-w-[700px] bg-gradient-radial from-[#c1ffb75a] to-[#ffffffc3] backdrop-blur-md min-h-[35vh]">
                                <p className="text-xl md:text-3xl text-[#33496F] mb-3 mt-1 font-medium">
                                    Validation & Verification
                                </p>
                                <ul className="text-xl md:text-[23px] list-disc leading-9 text-[#33496F]">
                                    <li className="mb-1">
                                        Independent auditor’s review the project
                                        design and validate emission reduction
                                        claims.
                                    </li>
                                    <li className="mb-1">
                                        Periodic verification checks are
                                        conducted to ensure the project meets
                                        its goals and adheres to global carbon
                                        standards.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Second Div */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-10 mx-[1%] lg:ml-[22%]">
                            <div className="mx-2 my-4 md:my-10 p-7 pl-10 w-full rounded-[20px] min-h-[40vh] border-white border-2 max-w-[700px] bg-gradient-radial from-[#c1ffb75a] to-[#ffffffc3] backdrop-blur-md">
                                <p className="text-xl md:text-3xl text-[#33496F] mb-3 mt-1 font-medium">
                                    Ongoing Monitoring & Reporting
                                </p>
                                <ul className="text-xl md:text-[23px] list-disc leading-9 text-[#33496F]">
                                    <li className="mb-1">
                                        Continuous monitoring ensures long-term
                                        project success and environmental
                                        integrity.
                                    </li>
                                    <li className="mb-1">
                                        Transparent reporting keeps stakeholders
                                        informed about project impact and
                                        progress.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Third Div */}
                        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start lg:gap-10 mx-[1%]">
                            <div className="mx-2 my-4 md:my-10 p-7 pl-10 w-full rounded-[20px] min-h-[40vh] border-white border-2 max-w-[700px] bg-[#2F5738]">
                                <p className="text-xl md:text-3xl text-[#ffffff] mb-3 mt-1 font-normal">
                                    Baseline Studies & Data Collection
                                </p>
                                <ul className="text-xl md:text-[23px] list-disc leading-9 text-[#C9D6B0]">
                                    <li className="mb-1">
                                        Upon successful verification, carbon
                                        credits are issued based on the volume
                                        of emissions reduced or removed.
                                    </li>
                                    <li className="mb-1">
                                        These credits can be sold or retired to
                                        meet sustainability commitments.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex w-fit m-auto">
                    <button onClick={() => setActiveSection('car-1')}>
                        <div
                            className={`w-4 h-4 rounded-full m-2 ${
                                activeSection === 'car-1'
                                    ? 'bg-[#33496F]'
                                    : 'bg-[#999999]'
                            } border-black`}
                        ></div>
                    </button>
                    <button onClick={() => setActiveSection('car-2')}>
                        <div
                            className={`w-4 h-4 rounded-full m-2 ${
                                activeSection === 'car-2'
                                    ? 'bg-[#33496F]'
                                    : 'bg-[#999999]'
                            } border-black`}
                        ></div>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default DevelopmentProcess;
