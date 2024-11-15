import React from 'react';
import Button from '../common/Button';
import Link from 'next/link';

const Banner = ({ bannerRef, sectionRefs }) => {
    return (
        <section
            className="banner-container relative"
            id="individual-overview"
            ref={(el) => (sectionRefs.current[0] = el)}
        >
            {/* <div className="bg-img"></div> */}
            <div className="bg-img"></div>
            <div className="h-[790.68px] w-full top-0 absolute  -z-10">
                <video
                    src="https://res.cloudinary.com/deels6aft/video/upload/v1720007148/s7gu19c7agp6hxclvgdt.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                    type="video/mp4"
                    className="h-[790.68px] object-cover object-center w-full"
                />
            </div>
            <div className="flex  max-sm:px-2 items-center justify-center h-full bg-400">
                <span className="sm:w-3/4 lg:w-[56%]  text-[#FFFFFF] text-center">
                    <h1 className="font-extrabold md:text-[3.25rem] md:leading-[4.25rem] text-[38px] leading-[2.25rem]">
                        MEASURE, SUPPORT, AND FLOURISH
                    </h1>
                    <p className="text-[#FEFEFD] mt-6 font-medium mdtext-[1.5rem] md:leading-[2.033rem] text-[20px] leading-[1.3rem]">
                        From calculating your carbon footprint to supporting
                        eco-projects and planting trees, discover the powerful
                        impact your individual actions can have
                    </p>
                </span>
            </div>
            <div
                className="fixed top-[283px] right-0  lg:mr-8 space-y-5 text-[#2A3C5B] font-bold text-[1rem] leading-[1.3rem] hidden lg:block w-[154px] z-20 "
                style={{ transform: 'translate(0px, -50px)' }}
            >
                <Link
                    href="#individual-overview"
                    className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full block nav-link"
                >
                    Overview
                </Link>{' '}
                <Link
                    href="#carbon-calculator"
                    className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link"
                >
                    Carbon Calculator
                </Link>
                <Link
                    href="#support-project"
                    className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link"
                >
                    Support Project
                </Link>
                <Link
                    href="#individual-treetology"
                    className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link"
                >
                    Treetology
                </Link>
            </div>

            <span ref={bannerRef}></span>
        </section>
    );
};

export default Banner;
