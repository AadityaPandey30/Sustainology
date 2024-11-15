import React from 'react';
import Image from 'next/image';
import { LuArrowRight } from 'react-icons/lu';

const CareerBanner = ({ handelScroll }) => {
    return (
        <div className="h-[497px] w-full overflow-x-hidden">
            <div className="absolute lg:h-[650px] md:h-[626px] h-[595px]  w-full -z-10  ">
                <div className="absolute  right-0 top-3">
                    <Image
                        loading="lazy"
                        src="/career-right-vector.png"
                        alt=""
                        sizes="100vw"
                        className="h-full  w-full"
                        height={754.72}
                        width={1005.96}
                    />
                </div>
                <div className="absolute top-0 h-[600px] w-full">
                    <Image
                        loading="lazy"
                        src="/carrer-centre-vector.png"
                        alt=""
                        sizes="100vw"
                        className="h-full w-full"
                        height={1164.12}
                        width={1722}
                    />
                </div>
                <div className="absolute bottom-0 ">
                    <Image
                        loading="lazy"
                        src="/caree-left-vecor.png"
                        alt=""
                        sizes="100vw"
                        className="h-full  w-full"
                        height={646.16}
                        width={851.22}
                    />
                </div>
            </div>
            <section className=" overflow-hidden lg:px-[95px] max-lg:px-2 ">
                <div className="career-background  flex flex-col justify-center items-center">
                    <div className="text-center md:w-[85%] ">
                        <p className="font-bold text-xl md:text-2xl text-[#305839] mb-20">
                            Careers@Sustainology
                        </p>
                        <h1 className="font-bold text-4xl md:text-5xl text-[#2A3C5B] mb-8 w-full ">
                            Join Our Team and Unleash Your Potential In Driving
                            Sustainable Changes
                        </h1>
                        <button
                            className="py-2 pb-[10px] px-4 md:pb-[15px] md:py-3 md:px-6 rounded-lg bg-[#2F5738] text-xl md:text-2xl font-semibold text-[#FEFEFD] hover:bg-[#DCE2DD] hover:border border-[#2F5738] hover:text-[#2F5738] "
                            onClick={handelScroll}
                        >
                            <p className="flex items-center">
                                Explore Open Roles
                                <LuArrowRight className="text-lg mt-1 ml-2" />
                            </p>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareerBanner;
