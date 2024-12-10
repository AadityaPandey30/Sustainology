import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/faq.css';
import Marquee from 'react-fast-marquee';

const AdditionalServices = () => {
    return (
        <div className="">
            <div className="flex flex-col w-full items-center ">
                <div className=" flex rounded-t-[17.59px] w-full mx-4 mt-6 px-2 pb-4 ">
                    <div className="w-full  overflow-hidden ">
                        <Marquee speed={100} autoFill>
                            <div className="flex gap-16">
                                <div className="h-[72px] mt-3 mx-10">
                                    <Image
                                        loading="lazy"
                                        src="/images/business/logos/tprLogo.png"
                                        alt="Article Image"
                                        style={{
                                            mixBlendMode: 'multiply',
                                        }}
                                        sizes="100vw"
                                        className={`h-full w-full object-contain}`}
                                        height={72}
                                        width={225}
                                    />
                                </div>
                                <div className="h-[72px] mt-3 mx-10">
                                    <Image
                                        loading="lazy"
                                        src="/images/business/logos/logo19.png"
                                        alt="Article Image"
                                        style={{
                                            mixBlendMode: 'multiply',
                                        }}
                                        sizes="100vw"
                                        className={`h-full w-full object-contain}`}
                                        height={72}
                                        width={225}
                                    />
                                </div>
                                <div className="h-[72px] mt-3 mx-10">
                                    <Image
                                        loading="lazy"
                                        src="/images/business/logos/logo20.png"
                                        alt="Article Image"
                                        style={{
                                            mixBlendMode: 'multiply',
                                        }}
                                        sizes="100vw"
                                        className={`h-full w-full object-contain}`}
                                        height={72}
                                        width={225}
                                    />
                                </div>
                                <div className="h-[72px] mt-3 mx-10">
                                    <Image
                                        loading="lazy"
                                        src="/images/business/logos/logo22.png"
                                        alt="Article Image"
                                        style={{
                                            mixBlendMode: 'multiply',
                                        }}
                                        sizes="100vw"
                                        className={`h-full w-full object-contain}`}
                                        height={72}
                                        width={225}
                                    />
                                </div>
                                <div className="h-[72px] mt-3 mx-10">
                                    <Image
                                        loading="lazy"
                                        src="/images/business/logos/logo21.png"
                                        alt="Article Image"
                                        style={{
                                            mixBlendMode: 'multiply',
                                        }}
                                        sizes="100vw"
                                        className={`h-full w-full object-contain}`}
                                        height={72}
                                        width={225}
                                    />
                                </div>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl md:text-3xl text-[#33496F] font-bold text-center align-bottom mt-8">
                Project Registries
            </h2>

            <div className="md:flex m-4 md:m-auto w-fit py-[8%] ">
                <div className="basis-1/3 max-w-sm">
                    <h2 className="text-4xl md:text-6xl text-[#33496F] font-bold text-left align-bottom my-6">
                        Additional Services
                    </h2>
                </div>

                <div className="leading-9 basis-2/3 max-w-3xl">
                    <p className="text-2xl">
                        <b>Sale Facilitation:</b> Sustainology offers a
                        comprehensive sale facilitation service to ensure
                        maximum visibility and monetization of your carbon
                        credits. This includes expert listing on prominent
                        carbon marketplaces, along with direct sales support on
                        our proprietary Sustainology platform. Our team will
                        handle the end-to-end process, making it seamless for
                        project developers to reach a global audience and
                        achieve optimal value for their credits.
                    </p>
                    <Link href="/contact-us">
                        <button className="text-xl text-white bg-[#33496F] py-2 px-[12%] rounded-[6px] my-6">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdditionalServices;
