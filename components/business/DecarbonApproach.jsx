import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import DecarbonApproachMobile from './DecarbonApproachMobile';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, useGSAP);
}

const DecarbonApproach = ({ sectionRefs }) => {
    const container = useRef();
    const svg = useRef();
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
        <>
            {/* <section
                className="decarbon-approach relative lg:px-[95px] pt-20 our-approach web-section hidden sm:block"
                ref={container}
            >
                <div className="w-full mb-10">
                    <h3 className="font-extrabold text-[52px] leading-[3.4rem] text-[#33496F] text-center">
                        Our Approach
                    </h3>
                </div>
                <div className="approaches">
                    <div className="approache section-to-pin approach1">
                        <div className="container bg-[#ffffff70] pl-4 py-5 rounded-[20px] backdrop-blur-md border-2 border-white">
                            <div className="">
                                <div
                                    className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal gap-6 items-center"
                                    id="box1"
                                >
                                    <Image loading="lazy"
                                        {100}
                                        src="/images/business/app1.png"
                                        alt=""
                                        width={108}
                                        height={60}
                                    />
                                    <p className="text-xl leading-[1.56rem] font-medium text-[#666666] pr-10">
                                        <strong className="text-[#333333]">
                                            Transition Planning for NetZero :
                                        </strong>{' '}
                                        Drawing on our experience with blue
                                        carbon, soil carbon, and other carbon
                                        removal projects and government
                                        partnerships, we craft strategic
                                        roadmaps to navigate businesses towards
                                        a NetZero future, aligning with global
                                        sustainability standards and your
                                        carbon-neutral objectives.
                                    </p>
                                </div>

                                <div
                                    className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal gap-6 items-center"
                                    id="box1"
                                >
                                    <Image loading="lazy"
                                        {100}
                                        src="/images/business/app3.png"
                                        alt=""
                                        width={108}
                                        height={60}
                                    />
                                    <p className="text-xl leading-[1.56rem] font-medium text-[#666666] pr-10">
                                        <strong className="text-[#333333]">
                                            Nature and Biodiversity Strategic
                                            Investments :
                                        </strong>{' '}
                                        Leveraging our expertise in carbon
                                        ecosystems, we guide strategic
                                        investments in biodiversity and nature
                                        conservation, enhancing ecological
                                        resilience and carbon sequestration.
                                    </p>
                                </div>
                                <div
                                    className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal gap-6 items-center"
                                    id="box1"
                                >
                                    <Image loading="lazy"
                                        {100}
                                        src="/images/business/app2.png"
                                        alt=""
                                        width={108}
                                        height={60}
                                    />
                                    <p className="text-xl leading-[1.56rem] font-medium text-[#666666] pr-10">
                                        <strong className="text-[#333333]">
                                            Decarbonisation Solutions :
                                        </strong>{' '}
                                        Utilising insights from our
                                        international carbon removal
                                        initiatives, we offer decarbonization
                                        strategies that minimize carbon
                                        footprints and promote eco-friendly
                                        innovations.
                                    </p>
                                </div>
                                <div
                                    className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal gap-6 items-center"
                                    id="box1"
                                >
                                    <Image loading="lazy"
                                        {100}
                                        src="/images/business/app3.png"
                                        alt=""
                                        width={108}
                                        height={60}
                                    />
                                    <p className="text-xl leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Decarbonisation Solutions :
                                        </strong>{' '}
                                        Utilising insights from our
                                        international carbon removal
                                        initiatives, we offer decarbonization
                                        strategies that minimize carbon
                                        footprints and promote eco-friendly
                                        innovations.
                                    </p>
                                </div>
                                <div
                                    className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal gap-6 items-center"
                                    id="box1"
                                >
                                    <Image loading="lazy"
                                        {100}
                                        src="/images/business/app4.png"
                                        alt=""
                                        width={108}
                                        height={60}
                                    />
                                    <p className="text-xl leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Nature and Biodiversity Strategic
                                            Investments :
                                        </strong>{' '}
                                        Leveraging our expertise in carbon
                                        ecosystems, we guide strategic
                                        investments in biodiversity and nature
                                        conservation, enhancing ecological
                                        resilience and carbon sequestration.
                                    </p>
                                </div>
                                <svg ref={svg} viewBox="0 0 300 300">
                                    <circle
                                        id="holder"
                                        className="st0"
                                        cx="151"
                                        cy="151"
                                        r="150"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section
                className="approach-section py-10 lg:px-[132px] hidden sm:block"
                ref={(el) => (sectionRefs.current[0] = el)}
                id="bu-1"
            >
                <div className="w-full mb-10">
                    <h3 className="font-extrabold text-[52px] leading-[3.4rem] text-[#33496F] text-center">
                        Our Approach
                    </h3>
                </div>
                <span></span>
                <div className="approach-wrapper bg-[#ffffff70] border-2 border-white container pl-4 py-5 rounded-[20px]">
                    <div
                        className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal gap-6 items-center"
                        id="box1"
                    >
                        <Image
                            loading="lazy"
                            src="/images/business/app1.png"
                            alt=""
                            width={108}
                            height={60}
                        />
                        <p className="text-xl leading-[1.56rem] font-medium text-[#666666] pr-10">
                            <strong className="text-[#333333]">
                                Transition Planning for NetZero :
                            </strong>{' '}
                            Drawing on our experience with blue carbon, soil
                            carbon, and other carbon removal projects and
                            government partnerships, we craft strategic roadmaps
                            to navigate businesses towards a NetZero future,
                            aligning with global sustainability standards and
                            your carbon-neutral objectives.
                        </p>
                    </div>

                    <div
                        className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal gap-6 items-center"
                        id="box1"
                    >
                        <Image
                            loading="lazy"
                            src="/images/business/app3.png"
                            alt=""
                            width={108}
                            height={60}
                        />
                        <p className="text-xl leading-[1.56rem] font-medium text-[#666666] ml-2 pr-10">
                            <strong className="text-[#333333]">
                                Nature and Biodiversity Strategic Investments :
                            </strong>{' '}
                            Leveraging our expertise in carbon ecosystems, we
                            guide strategic investments in biodiversity and
                            nature conservation, enhancing ecological resilience
                            and carbon sequestration.
                        </p>
                    </div>

                    <div
                        className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal gap-6 items-center"
                        id="box1"
                    >
                        <Image
                            loading="lazy"
                            src="/images/business/app2.png"
                            alt=""
                            width={108}
                            height={60}
                        />
                        <p className="text-xl leading-[1.56rem] font-medium text-[#666666] ml-2  pr-10">
                            <strong className="text-[#333333]">
                                Decarbonisation Solutions :
                            </strong>{' '}
                            Utilising insights from our international carbon
                            removal initiatives, we offer decarbonization
                            strategies that minimize carbon footprints and
                            promote eco-friendly innovations.
                        </p>
                    </div>

                    <div
                        className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal gap-6 items-center"
                        id="box1"
                    >
                        <Image
                            loading="lazy"
                            src="/images/business/app5.png"
                            alt=""
                            width={108}
                            height={60}
                        />
                        <p className="text-xl leading-[1.56rem] font-medium ml-2  text-[#666666]">
                            <strong className="text-[#333333]">
                                Renewables, Desalination, and Water Management
                                Projects :
                            </strong>{' '}
                            With Sustainology’s background in water,
                            desalination & renewable energy projects, we develop
                            solutions that conserve resources and support
                            environmental sustainability, environmental
                            stewardship, and resource efficiency within your
                            organization.
                        </p>
                    </div>

                    <div
                        className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal gap-6 items-center"
                        id="box1"
                    >
                        <Image
                            loading="lazy"
                            src="/images/business/app4.png"
                            alt=""
                            width={108}
                            height={60}
                        />
                        <p className="text-xl leading-[1.56rem] font-medium ml-1  text-[#666666]">
                            <strong className="text-[#333333]">
                                Supply Chain Decarbonisation :
                            </strong>{' '}
                            Building on our experience developing blue carbon
                            projects across borders, we accelerate supply chain
                            decarbonization, implementing practices that reduce
                            emissions and foster a sustainable economy.
                        </p>
                    </div>
                </div>
            </section>
            {/* start for mobile view */}
            <DecarbonApproachMobile />
            {/* end for mobile view */}
        </>
    );
};

export default DecarbonApproach;
