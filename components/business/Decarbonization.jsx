import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import DecarbonizationMobile from './DecarbonizationMobile';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Decarbonization = ({ setShowModal, sectionRefs }) => {
    const container = useRef();

    useGSAP(
        () => {
            let solutionTimeln = gsap.timeline({
                scrollTrigger: {
                    trigger: '.solutions',
                    pin: true,
                    pinSpacing: true,
                    start: 'left-=30px left',
                    end: '+=2000',
                    scrub: 1,
                    marker: true,
                },
            });

            solutionTimeln.addLabel('solution1');
            solutionTimeln.to('.solution-1', {
                yPercent: 0,
                opacity: 1,
            });

            solutionTimeln.from('.solution-2', {
                yPercent: 100,
                opacity: 0,
            });
            solutionTimeln.addLabel('solution2');
        },
        { scope: container }
    );
    return (
        <>
            <section
                className="lg:px-[132px] pb-[8.42rem] solutions-section hidden sm:block"
                ref={container}
            >
                <div className="solutions-container">
                    <div className="w-full">
                        <h3 className="font-extrabold text-[52px] leading-[3.4rem] text-[#33496F] text-center pt-10">
                            Decarbonisation and Net Zero Solutions
                        </h3>
                    </div>
                    <div
                        id="bu-2"
                        ref={(el) => (sectionRefs.current[1] = el)}
                    ></div>
                    <div className="solutions">
                        <div className="solution solution-1 mt-10 bg-[#E0EBD44D] rounded-[1.75rem] p-7 border border-[#FCFDFA] z-30">
                            <div className="bg-[#ffffff] rounded-[1.25rem] px-[4.5rem] py-12 border-[#E0EBD4] border">
                                <div className="grid lg:grid-cols-2">
                                    <div className="lg:col-span-1 flex flex-col">
                                        <h4 className="font-semibold text-[40px] leading-[40px] text-[#33496F]">
                                            Your elevation to carbon neutral
                                        </h4>
                                        <p className="mt-[2.40rem] text-xl font-medium text-[#666666]">
                                            On receiving your assessment
                                            results, seamlessly integrate with
                                            our APIs to embark on actionable
                                            steps towards reducing your
                                            environmental footprint. We
                                            precisely calculate the emissions
                                            for your product or service,
                                            empowering you to facilitate your
                                            product's journey towards carbon
                                            neutrality with ease.
                                        </p>
                                        <div className="flex items-center mt-10 mb-4 gap-3 cursor-pointer mt-auto">
                                            {/* <span className="text-[#2F5738] text-xl font-semibold">
                                                Start Integrating
                                            </span>
                                            <Image loading="lazy"
                                                {100}
                                                src="/arrow-right.svg"
                                                alt=""
                                                height={28}
                                                width={20}
                                            /> */}
                                        </div>
                                        <div className="md:mr-28 mb-3">
                                            <Link
                                                href="contact-us"
                                                className=" text-xl leading-[1.375rem] font-semibold block text-center py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]"
                                            >
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-1 flex justify-end">
                                        <div className="relative h-[535px] w-[399px]">
                                            <Image
                                                loading="lazy"
                                                src="/images/business/decarbon1.png"
                                                alt=""
                                                layout="fill"
                                                objectFit="cover"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="solution solution-2 mt-10 bg-[#E0EBD44D] rounded-[1.75rem] p-7 border border-[#FCFDFA] z-30">
                            <div className="bg-[#ffffff] rounded-[1.25rem] px-[4.5rem] py-12 border-[#E0EBD4] border">
                                <div className="grid lg:grid-cols-2">
                                    <div className="lg:col-span-1 flex flex-col">
                                        <h4 className="font-semibold text-[40px] leading-[40px] text-[#33496F]">
                                            Empower Your Customers to Drive
                                            Climate Action
                                        </h4>
                                        <p className="mt-[2.40rem] text-xl leading-[1.56rem] font-medium text-[#666666]">
                                            Users can effortlessly make
                                            fractional contributions to
                                            certified carbon credit projects
                                            from any point within your website
                                            or app. As a testament to our
                                            commitment, we deliver dynamic
                                            purchase certificates to
                                            contributors, reflecting their vital
                                            role in advancing sustainability.
                                        </p>
                                        <div className="flex items-center mt-10 mb-4 gap-3 cursor-pointer mt-auto">
                                            {/* <span className="text-[#2F5738] text-xl font-semibold">
                                                Start Integrating
                                            </span>
                                            <Image loading="lazy"
                                                {100}
                                                src="/arrow-right.svg"
                                                alt=""
                                                height={28}
                                                width={20}
                                            /> */}
                                        </div>
                                        <div className="md:mr-28 mb-3">
                                            <Link
                                                href="contact-us"
                                                className="text-xl leading-[1.375rem] font-semibold block text-center py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]"
                                            >
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-1 flex justify-end">
                                        <div className="relative h-[535px] w-[399px]">
                                            <Image
                                                loading="lazy"
                                                src="/images/business/decarbon2.png"
                                                alt=""
                                                layout="fill"
                                                objectFit="cover"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sm:hidden block">
                <DecarbonizationMobile />
            </div>
        </>
    );
};

export default Decarbonization;
