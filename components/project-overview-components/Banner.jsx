import React from 'react';
import Button from '../common/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Banner = ({ bannerRef, projectDetails }) => {
    const styles = {
        height: '752px',
        width: ' 100%',
        position: 'absolute',

        top: '0',
        zIndex: '-2',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(90.24deg, rgba(9, 9, 9, 0.65) 0.22%, rgba(9, 9, 9, 0.65)0.22%),
        url(${projectDetails?.images?.[0]?.image || '/project_overview.png'})`,
    };

    const router = useRouter();

    return (
        <section className="banner-container-project md:mb-32 mb-12 ">
            <div className="" style={styles}></div>
            <div className="font-medium md:text-xl text-lg text-[#F2EFDE] pt-2 lg:pl-[132px] px-10 lg:pr-0 relative top-24">
                <button
                    className="flex items-center"
                    onClick={() => router.back()}
                >
                    <span className="mr-2">
                        <Image
                            loading="lazy"
                            src="/left-arrow.svg"
                            alt=""
                            height={24}
                            width={24}
                        />
                    </span>
                    Back to projects
                </button>
            </div>
            <div className="flex items-center justify-center h-full  pt-2 lg:px-[95px] px-10 ">
                <div className="sm:w-3/4 md:w-[75%]  text-white text-center">
                    <h1 className="font-bold text-[38px] leading-[2.25rem] md:text-[3.25rem] md:leading-[4.4rem] uppercase ">
                        {projectDetails?.title}
                    </h1>

                    <p className="lg:mt-[28px] md:mt-[20px] mt-[12px] font-semibold md:text-[1.75rem] md:leading-[2.37rem] text-[20px] leading-[1.3rem] ">
                        {projectDetails?.projectId}
                    </p>
                    <div className="md:mt-[104px] mt-[50px] flex  font-semibold md:text-[1.75rem] md:leading-[2.3rem] text-[20px] leading-[1.3rem]">
                        <p className="flex items-start justify-end capitalize w-1/2   pr-8 border-e-2 border-[#fff]">
                            <Image
                                loading="lazy"
                                src="/flag.svg"
                                height={20}
                                width={28}
                                className="sm:mt-[8px] mt-[4px]"
                                alt=""
                            />
                            {projectDetails?.location?.country}
                        </p>

                        <p className="w-1/2  pl-8  text-start">
                            {projectDetails?.area}
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="fixed top-[252.23px] right-0  lg:mr-8 space-y-5 text-[#2A3C5B] font-bold text-[1rem] leading-[1.3rem] hidden lg:block w-[134px] z-20 "
                style={{ transform: 'translate(0px, -50px)' }}
            >
                <Link
                    href="#overview"
                    className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full block nav-link "
                >
                    Overview
                </Link>
                <Link
                    href="#pricing"
                    className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link"
                >
                    Pricing
                </Link>
                <Link
                    href="#satellite-image"
                    className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 whitespace-nowrap block nav-link"
                >
                    Satellite Image
                </Link>
                <Link
                    href="#gallery"
                    className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link"
                >
                    Gallery
                </Link>
                <Link
                    href="#sdg-goals"
                    className="bg-[#f5f5f57c] text-center border border-[#C8C8C8] px-[20px] py-[10px] rounded-[40px] w-full mt-6 block nav-link "
                >
                    SDG Goals
                </Link>
            </div>

            <span ref={bannerRef}></span>
        </section>
    );
};

export default Banner;
