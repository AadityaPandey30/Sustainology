import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useFetch } from '@/hook/getDataOnLoad';
import Marquee from 'react-fast-marquee';

const Banner = ({ bannerRef }) => {
    const logoRef = useRef(null);
    const styles = {
        height: '790.68px',
        width: ' 100%',
        position: 'absolute',
        top: '0',
        zIndex: '-10',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `radial-gradient(
            92.43% 50% at 50% 50%,
            rgba(17, 54, 23, 0.56) 0%,
            rgba(17, 54, 23, 0.57) 0%,
            rgba(17, 54, 23, 0.31) 0.01%,
            rgba(14, 46, 19, 0.86) 100%
        )`,
    };

    const router = useRouter();
    const { data } = useFetch({ url: '/ribbon/all-active' });

    const ribbonData = data?.response?.getAllRibbon || [];

    useEffect(() => {
        // Start the scale animation once the component mounts
        const logo = logoRef.current;
        if (logo) {
            // Scale the logo after a very short timeout to ensure the transition is triggered
            setTimeout(() => {
                logo.classList.add('logo-scaled');
            }, 20);
        }
    }, []);

    return (
        <section className="h-fit  overflow-hidden relative">
            <div className="bg-img"></div>
            <div style={styles}>
                <video
                    autoPlay
                    playsInline
                    loop
                    muted
                    className="h-[790.68px] object-cover object-center w-full"
                >
                    <source
                        src="https://res.cloudinary.com/deels6aft/video/upload/v1720007156/yu6fpecsfxpzxb09k5ic.mp4"
                        type="video/mp4"
                    />
                    {/* <source src="/videos/Home Page.mp4" type="video/mp4" /> */}
                </video>
            </div>
            {ribbonData?.length > 0 && (
                <div className="overflow-hidden bg-[#FFFFFF45] border border-white text-white text-lg h-9 flex items-center absolute top-20 left-0 right-0">
                    <Marquee speed={65} autoFill>
                        {ribbonData.map((item, index) => {
                            return (
                                <span key={index} className="mx-28">
                                    {item.label}
                                </span>
                            );
                        })}
                    </Marquee>
                </div>
            )}
            <div className="flex items-center justify-center h-[790.68px] bg-400 pt-2 lg:px-[95px]">
                <div className="text-white text-center sm:w-3/4 md:w-8/12 mt-20">
                    <div
                        className="flex justify-center mt-10 sm:flex sm:justify-center sm:mt-10 md:flex md:justify-center md:mt-10 lg:flex lg:justify-center lg:mt-10 logo"
                        ref={logoRef}
                    >
                        <Image
                            loading="eager"
                            src="https://res.cloudinary.com/deels6aft/image/upload/v1720017397/logo_2_ivnkog.png"
                            alt="Logo"
                            height={100}
                            width={100}
                            className="image-animation"
                        />
                    </div>
                    <h1 className="md:text-[3.25rem] font-extrabold text-[48px] leading-[4.4rem] uppercase heading-animation">
                        SUSTAINOLOGY
                    </h1>
                    <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-center sm:gap-10 md:flex md:flex-row md:justify-center md:gap-10 lg:flex lg:flex-row lg:gap-10 lg:justify-center mt-16">
                        <Link
                            href="/for-individual"
                            className="flex group items-center justify-center mb-4 gap-3 cursor-pointer mt-auto bg-white w-52 h-[52px] rounded-lg border border-white hover:bg-[#F8F8F842] transition-all text-[#2F5738] hover:text-white pb-[2px]"
                        >
                            <span className="text-xl font-semibold">
                                Individual
                            </span>
                            <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="group-hover:stroke-white stroke-[#2F5738] transition-all"
                            >
                                <path
                                    d="M3.01562 10L16.3341 10"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M10.5 4.16602L16.3333 9.99935L10.5 15.8327"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </Link>
                        <Link
                            href="/for-business"
                            className="flex group items-center justify-center mb-4 gap-3 cursor-pointer mt-auto bg-white w-52 h-[52px] rounded-lg border border-white hover:bg-[#F8F8F842] transition-all text-[#2F5738] hover:text-white pb-[2px]"
                        >
                            <span className="text-xl font-semibold">
                                Business
                            </span>
                            <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="group-hover:stroke-white stroke-[#2F5738] transition-all"
                            >
                                <path
                                    d="M3.01562 10L16.3341 10"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M10.5 4.16602L16.3333 9.99935L10.5 15.8327"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <span ref={bannerRef}></span>
        </section>
    );
};

export default Banner;
