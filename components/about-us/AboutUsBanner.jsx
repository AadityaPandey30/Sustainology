import React from 'react';
import Button from '../common/Button';
import { useFetch } from '@/hook/getDataOnLoad';
import Link from 'next/link';

const AboutUsBanner = ({ bannerRef }) => {
    const statResponse = useFetch({ url: '/about-stat/get-all' });
    const stateData = statResponse?.data?.response?.[0] || {};
    return (
        <>
            <section className="banner-container-about">
                <div className="bg-img-about">
                    <div className="absolute top-[29%] max-[321px]:top-[30%] left-[10%] w-[79%] ">
                        <div>
                            <h1 className="font-extrabold text-4xl sm:text-[52px] sm:leading-[68px] text-white">
                                <p> YOUR PARTNERS IN GLOBAL SUSTAINABILITY</p>
                            </h1>

                            <p className="py-3 sm:py-3 md:py-0 font-medium sm:text-2xl text-xl  text-[#FEFEFD] w-[82%]">
                                Step into the future with us — A future
                                reimagined with sustainability at its core,
                                where green solutions lead the way.
                            </p>
                        </div>
                        <div className="grid lg:flex lg:justify-between sm:grid-cols-3 lg:mt-16  grid-cols-2 sm:w-[80%]">
                            <div className="lg:w-fit">
                                <p className="text-[#DCE0E7] lg:text-[1.56rem] text-xl md:text-2xl leading-[2.37rem]">
                                    Certifications
                                </p>
                                <p className="font-bold lg:text-5xl text-3xl leading-[4rem] md:text-4xl text-[#F2EFDE]">
                                    {stateData?.certification || 0}
                                </p>
                            </div>
                            <div className="lg:w-fit">
                                <p className="text-[#DCE0E7] lg:text-[1.56rem] text-xl md:text-2xl leading-[2.37rem]">
                                    Countries Served
                                </p>
                                <p className="font-bold lg:text-5xl text-3xl md:text-4xl leading-[4rem] text-[#F2EFDE]">
                                    {stateData?.country_served || 0}
                                </p>
                            </div>
                            <div className="lg:w-fit">
                                <p className="text-[#DCE0E7] lg:text-[1.56rem] text-xl md:text-2xl leading-[2.37rem]">
                                    Team
                                </p>
                                <p className="font-bold lg:text-5xl text-3xl md:text-4xl leading-[4rem] text-[#F2EFDE]">
                                    {stateData?.team || 0}
                                </p>
                            </div>
                            <div className="lg:w-fit">
                                <p className="text-[#DCE0E7] lg:text-[1.56rem] text-xl md:text-2xl leading-[2.37rem]">
                                    Tons of CO2 Offset
                                </p>
                                <p className="font-bold lg:text-5xl text-3xl md:text-4xl leading-[4rem] text-[#F2EFDE]">
                                    {stateData?.tons_of_co2 || 0}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="fixed top-[252.23px] right-0  lg:mr-8 space-y-5 text-[#2A3C5B] font-bold text-[1rem] leading-[1.3rem] hidden lg:block w-[134px] z-20 "
                    style={{ transform: 'translate(0px, -50px)' }}
                >
                    <Link
                        href="#mission-vision"
                        className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full  block nav-link"
                    >
                        Mission/Vision
                    </Link>
                    <Link
                        href="#our-values"
                        className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link"
                    >
                        Our Values
                    </Link>
                    <Link
                        href="#founders"
                        className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link "
                    >
                        Founders
                    </Link>
                    {/* <Link
                        href="#advisors"
                        className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link"
                    >
                        Advisors
                    </Link> */}
                    <Link
                        href="#partners"
                        className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link "
                    >
                        Partners
                    </Link>
                    <Link
                        href="#about-technology"
                        className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link"
                    >
                        Technology
                    </Link>
                </div>
            </section>
            <span ref={bannerRef}></span>
        </>
    );
};

export default AboutUsBanner;
