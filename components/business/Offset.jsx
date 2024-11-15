import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Offset = ({ sectionRefs }) => {
    const container = useRef();

    useGSAP(
        () => {
            let creditTimeln = gsap.timeline({
                scrollTrigger: {
                    trigger: '.credits-container',
                    pin: true,
                    pinSpacing: true,
                    start: 'left-=80px left',
                    end: '+=2000',
                    scrub: 1,
                    marker: true,
                },
            });
            creditTimeln.addLabel('credit1');
            creditTimeln.to('.credit-1', {
                opacity: 1,
            });
            creditTimeln.from('.credit-2', {
                opacity: 0,
            });
            creditTimeln.addLabel('credit2');
            creditTimeln.to(
                '.credit-1',
                {
                    opacity: 0,
                },
                '-=0.3'
            );
            creditTimeln.to('.credit-2', {
                opacity: 1,
            });
        },
        { scope: container }
    );
    return (
        <section
            className="lg:px-[95px] sm:py-16 sm:py-10 offset-container credits-section"
            ref={container}
        >
            <div className="hidden sm:block credits-container bg-white rounded-[20px] py-7 px-12">
                <div className="w-full">
                    <h3 className="font-bold text-[52px] text-[#33496F] text-center">
                        Offset with high-quality Carbon Credits
                    </h3>
                </div>
                <div
                    id="bu-4"
                    ref={(el) => (sectionRefs.current[3] = el)}
                ></div>
                <div className="credits">
                    <div className="grid lg:grid-cols-2 py-8 credit credit-1 gap-24">
                        <div className="lg:col-span-1">
                            <div className="relative h-[389px] w-full">
                                <Image
                                    loading="lazy"
                                    src="/images/business/offset1.png"
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    className=""
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-1 pr-20 mr-2">
                            <h4 className="font-bold text-4xl leading-[3rem] text-[#4C4C4C]">
                                Access Large Volume Carbon Credits for Your
                                Initiatives
                            </h4>
                            <p className="mt-8 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                Our platform simplifies bulk purchasing of
                                carbon credits for your sustainability
                                initiatives, allowing businesses to efficiently
                                procure credits of the highest quality for their
                                projects. With seamless access to these credits,
                                you can bolster your environmental impact and
                                support meaningful projects on a significant
                                scale. Benefit from meticulously vetted projects
                                utilizing our proprietary satellite monitoring
                                technology, ensuring transparency and
                                accountability throughout the process."
                            </p>
                            <Link href="/projects">
                                <div className="flex items-center mt-10 mb-4 gap-3 cursor-pointer ">
                                    <span className="text-[#2F5738] text-xl font-semibold ">
                                        Invest In Sustainability
                                    </span>
                                    <Image
                                        loading="lazy"
                                        src="/arrow-right.svg"
                                        alt=""
                                        height={28}
                                        width={20}
                                    />
                                </div>
                            </Link>
                            <div className="mr-28">
                                <Link href="contact-us">
                                    <button className=" text-xl leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 py-8 credit credit-2 gap-24">
                        <div className="lg:col-span-1 flex flex-col">
                            <h4 className="font-bold text-4xl leading-[3rem] text-[#4C4C4C]">
                                Have Your ESG Targets in Place? Invest in
                                Tailored Carbon Credit Portfolios !
                            </h4>
                            <p className="mt-8 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                Our platform provides businesses with the chance
                                to invest in carbon credits tailored to meet
                                their specific environmental, social, and
                                governance objectives. This customized approach
                                guarantees that your investments perfectly align
                                with your sustainability mission, fostering
                                impactful change.
                            </p>
                            <Link href="/projects">
                                <div className="flex items-center mb-4 gap-3 cursor-pointer mt-10 text-center">
                                    <span className="text-[#2F5738] text-xl font-semibold">
                                        Invest In Sustainability
                                    </span>
                                    <Image
                                        loading="lazy"
                                        src="/arrow-right.svg"
                                        alt=""
                                        height={28}
                                        width={20}
                                    />
                                </div>
                            </Link>
                            <div className="mr-28">
                                <Link href="contact-us">
                                    <button className=" text-xl leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="relative h-[372px] w-full">
                                <Image
                                    loading="lazy"
                                    src="/images/business/offset2.png"
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Cards Start */}

            <div className="sm:hidden flex justify-center pt-12 ">
                <div className="mt-5 max-w-sm rounded overflow-hidden shadow-lg bg-white py-11 px-6 text-center">
                    {/* <img
                    className="w-full"
                    src="/img/card-top.jpg"
                    alt="Sunset in the mountains"
                /> */}

                    <div className="w-full">
                        <h3 className="font-bold text-2xl text-[#33496F] text-left">
                            Offset with high-quality Carbon Credits
                        </h3>
                    </div>

                    <div className="relative w-full">
                        <Image
                            loading="lazy"
                            src="/images/business/offset1.png"
                            alt=""
                            sizes="100vw"
                            height={389}
                            width={476}
                            className=" h-full w-full object-cover"
                        />
                    </div>

                    <div className="">
                        <h4 className="font-bold text-xl leading-8 text-[#4C4C4C]">
                            Access Large Volume Carbon Credits for Your
                            Initiatives
                        </h4>
                        <p className="my-4 text-[#666666] font-semibold ">
                            Our platform simplifies bulk purchasing of carbon
                            credits for your sustainability initiatives,
                            allowing businesses to efficiently procure credits
                            of the highest quality for their projects. With
                            seamless access to these credits, you can bolster
                            your environmental impact and support meaningful
                            projects on a significant scale. Benefit from
                            meticulously vetted projects utilizing our
                            proprietary satellite monitoring technology,
                            ensuring transparency and accountability throughout
                            the process."
                        </p>
                    </div>
                    <div>
                        <Link href="/projects">
                            <div className="flex items-center mt-10 mb-4 gap-3 cursor-pointer text-center">
                                <span className="text-[#2F5738] font-semibold">
                                    Invest In Sustainability
                                </span>
                                <Image
                                    loading="lazy"
                                    src="/arrow-right.svg"
                                    alt=""
                                    height={28}
                                    width={20}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <Link href="contact-us">
                            <button className="leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="sm:hidden flex justify-center py-12">
                <div className="mt-5 max-w-sm rounded overflow-hidden shadow-lg bg-white py-11 px-6 text-center">
                    {/* <img
                    className="w-full"
                    src="/img/card-top.jpg"
                    alt="Sunset in the mountains"
                /> */}

                    <div className="w-full">
                        <h3 className="font-bold text-2xl text-[#33496F] text-left">
                            Offset with high-quality Carbon Credits
                        </h3>
                    </div>

                    <div className="relative w-full">
                        <Image
                            loading="lazy"
                            src="/images/business/offset2.png"
                            alt=""
                            sizes="100vw"
                            height={389}
                            width={476}
                            className=" h-full w-full object-cover"
                        />
                    </div>

                    <div className="">
                        <h4 className="font-bold text-xl leading-8 text-[#4C4C4C]">
                            Have Your ESG Targets in Place? Invest in Tailored
                            Carbon Credit Portfolios !
                        </h4>
                        <p className="my-4 text-[#808080] font-semibold ">
                            Our platform provides businesses with the chance to
                            invest in carbon credits tailored to meet their
                            specific environmental, social, and governance
                            objectives. This customized approach guarantees that
                            your investments perfectly align with your
                            sustainability mission, fostering impactful change.
                        </p>
                    </div>
                    <div>
                        <Link href="/projects">
                            <div className="flex items-center mt-10 mb-4 gap-3 cursor-pointer">
                                <span className="text-[#808080] font-semibold text-center">
                                    Invest In Sustainability
                                </span>
                                <Image
                                    loading="lazy"
                                    src="/arrow-right.svg"
                                    alt=""
                                    height={28}
                                    width={20}
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <Link href="contact-us">
                            <button className="leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Responsive Cards End */}
        </section>
    );
};

export default Offset;
