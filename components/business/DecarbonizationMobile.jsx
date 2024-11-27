import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DecarbonizationMobile = () => {
    return (
        <section className="lg:px-[95px] pt-14 md:pb-[8.42rem] pb-12 solutions-section">
            <div className="solutions-container">
                <div className="w-full">
                    <h3 className="font-extrabold md:text-[52px] md:leading-[3.4rem] text-4xl text-[#33496F] text-center">
                        Decarbonisation and Net Zero Solutions
                    </h3>
                </div>

                {/* Card 1 Start */}

                <div className="flex justify-center p-5">
                    <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-white py-11 px-6 text-center">
                        <div className="w-full pb-6">
                            <h3 className="font-bold text-4xl text-[#33496F] text-center">
                                Your elevation to carbon neutral
                            </h3>
                        </div>

                        <div className="relative  w-full my-3">
                            <Image
                                loading="lazy"
                                src="/images/business/decarbon1.png"
                                alt=""
                                sizes="100vw"
                                width={246.86}
                                height={595}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        <div className="">
                            {/* <h4 className="font-bold text-xl leading-8 text-[#4C4C4C]">
                                Have Your ESG Targets in Place? Invest in
                                Tailored Carbon Credit Portfolios !
                            </h4> */}
                            <p className="my-4 text-[#808080] font-semibold ">
                                On receiving your assessment results, seamlessly
                                integrate with our APIs to embark on actionable
                                steps towards reducing your environmental
                                footprint. We precisely calculate the emissions
                                for your product or service, empowering you to
                                facilitate your product's journey towards carbon
                                neutrality with ease.
                            </p>
                        </div>
                        {/* <div className="flex justify-center">
                            <Link href="/projects">
                                <div className="flex items-center  mb-4 gap-3 cursor-pointer">
                                    <span className="text-[#2F5738] font-semibold text-center">
                                        Start Integrating
                                    </span>
                                    <Image loading="lazy"
                                        {100}
                                        src="/arrow-right.svg"
                                        alt=""
                                        height={28}
                                        width={20}
                                    />
                                </div>
                            </Link>
                        </div> */}
                        <div className="">
                            <Link href="contact-us">
                                <button className="leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 1 End */}

                {/* Card 2 Start */}

                <div className="flex justify-center p-5">
                    <div className="mt-5 max-w-sm rounded overflow-hidden shadow-lg bg-white py-11 px-6 text-center">
                        <div className="w-full pb-6">
                            <h3 className="font-bold text-4xl text-[#33496F] text-center">
                                Empower Your Customers to Drive Climate Action
                            </h3>
                        </div>

                        <div className="relative w-full  my-3">
                            <Image
                                loading="lazy"
                                src="/images/business/decarbon2.png"
                                alt=""
                                sizes="100vw"
                                width={246.86}
                                height={595}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="">
                            {/* <h4 className="font-bold text-xl leading-8 text-[#4C4C4C]">
                                Have Your ESG Targets in Place? Invest in
                                Tailored Carbon Credit Portfolios !
                            </h4> */}
                            <p className="my-4 text-[#808080] font-semibold ">
                                Users can effortlessly make fractional
                                contributions to certified carbon credit
                                projects from any point within your website or
                                app. As a testament to our commitment, we
                                deliver dynamic purchase certificates to
                                contributors, reflecting their vital role in
                                advancing sustainability.
                            </p>
                        </div>
                        {/* <div className="flex justify-center">
                            <Link href="/projects">
                                <div className="flex items-center  mb-4 gap-3 cursor-pointer">
                                    <span className="text-[#2F5738] font-semibold text-center">
                                        Start Integrating
                                    </span>
                                    <Image loading="lazy"
                                        {100}
                                        src="/arrow-right.svg"
                                        alt=""
                                        height={28}
                                        width={20}
                                    />
                                </div>
                            </Link>
                        </div> */}
                        <div className="">
                            <Link href="contact-us">
                                <button className="leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card 2 End */}
            </div>
        </section>
    );
};

export default DecarbonizationMobile;
