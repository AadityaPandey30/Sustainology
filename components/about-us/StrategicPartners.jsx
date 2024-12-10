import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useFetch } from '@/hook/getDataOnLoad';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Marquee from 'react-fast-marquee';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const StrategicPartners = ({ sectionRefs }) => {
    const cleanSeoScript = `{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Sustainology",
    "item": "https://sustainology.life/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "About Us",
    "item": "https://sustainology.life/about-us"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Partners",
    "item": "https://sustainology.life/about-us#partners"  
  }]
}`;

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = cleanSeoScript;
        document.head.appendChild(script);

        return () => {
            if (script.parentNode) {
                document.head.removeChild(script);
            }
        };
    }, []);

    const accreditationResponse = useFetch({
        url: '/accreditations/get-all-active',
    });

    const partnersResponse = useFetch({ url: '/partner/get-all-active' });
    const partnersData = partnersResponse?.data?.response || [];
    const accreditations = accreditationResponse?.data?.response || [];
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contentRef.current.classList.add('animate-slide-up');
                }
            });
        });

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer?.unobserve(contentRef.current);
            }
        };
    }, []);

    return (
        <selection
            className="relative"
            id="partners"
            ref={(el) => (sectionRefs.current[4] = el)}
        >
            <div className="absolute  -z-10 h-full w-full ">
                <div className=" absolute h-[936px] -top-28  right-0 ">
                    <Image
                        loading="lazy"
                        src="/patner-right-vector.png"
                        alt="right-vector"
                        height={936}
                        width={300}
                        sizes="100vw"
                        className="h-full  w-full"
                    />
                </div>
                <div className=" absolute h-[801.37px] -bottom-64  left-0 ">
                    <Image
                        loading="lazy"
                        src="/left-patners-vector.png"
                        alt="right-vector"
                        height={801.37}
                        width={300}
                        sizes="100vw"
                        className="h-full  w-full"
                    />
                </div>
                <div className=" absolute -top-56 h-full w-full">
                    <Image
                        loading="lazy"
                        src="/patner-mid-vector.png"
                        alt="right-vector"
                        height={1429.33}
                        width={1876.5}
                        sizes="100vw"
                        className="h-ful  w-full"
                    />
                </div>
            </div>
            <div className="lg:px-[95px] px-10 ">
                <div className=" relative backdrop-blur-5xl  lg:h-[700px] rounded-[20px] border gradient-our-value border-white w-full  flex justify-center items-center ">
                    <div ref={contentRef} className="px-4 w-full">
                        <div className="">
                            <h3 className="text-center font-bold text-[34px] md:text-[52px] leading-[70.51px] text-[#2A3C5B]">
                                Strategic partners
                            </h3>
                        </div>
                        <div className=" mt-10 ">
                            {/* <Carousel
                                    responsive={responsive}
                                    autoPlaySpeed={1000}
                                    keyBoardControl={true}
                                    centerMode={true}
                                    // customTransition="all .5 ease-in-out"
                                    transitionDuration={500}
                                    swipeable={false}
                                    draggable={false}
                                    removeArrowOnDeviceType={['laptop']}
                                    slidesToSlide={1}
                                > */}
                            <Marquee speed={100} autoFill>
                                {partnersData.map((partner) => {
                                    return (
                                        <div
                                            className=" h-20 mx-10"
                                            key={partner?._id}
                                            style={{
                                                mixBlendMode: 'multiply',
                                            }}
                                        >
                                            <Image
                                                loading="lazy"
                                                src={partner?.image}
                                                width={80}
                                                height={80}
                                                sizes="100vw"
                                                alt="strategic logo"
                                                className="h-full w-full object-contain"
                                                style={{
                                                    mixBlendMode: 'multiply',
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </Marquee>
                            {/* </Carousel> */}
                            {/* <Image loading="lazy"
                                    src={'/stratigic-logo-1.png'}
                                    width={308}
                                    height={100}
                                    sizes="100vh"
                                    alt="strategic logo"
                                    className="w-full h-full`"
                                />
                                <Image loading="lazy"
                                    src={'/stratigic-logo-1.png'}
                                    width={308}
                                    height={100}
                                    sizes="100vh"
                                    alt="strategic logo"
                                    className="w-full h-full`"
                                />
                                <Image loading="lazy"
                                    src={'/stratigic-logo-1.png'}
                                    width={308}
                                    height={100}
                                    sizes="100vh"
                                    alt="strategic logo"
                                    className="w-full h-full`"
                                /> */}
                        </div>
                        <div className="md:mt-32 mt-12"></div>
                        <div className="flex justify-center">
                            <h3 className="font-bold text-[34px] md:text-[52px] leading-[70.51px] text-[#2A3C5B] capitalize">
                                accreditations
                            </h3>
                        </div>
                        <div
                            className=" mt-10 w-full"
                            // style={{ aspectRatio: '1/1' }}
                        >
                            {/* <Carousel
                                    responsive={responsive}
                                    autoPlaySpeed={1000}
                                    keyBoardControl={true}
                                    centerMode={true}
                                    // customTransition="all .5 ease-in-out"
                                    transitionDuration={1000}
                                    swipeable={false}
                                    draggable={false}
                                    removeArrowOnDeviceType={['laptop']}
                                > */}
                            <Marquee speed={100} autoFill>
                                {accreditations?.map((accrediation) => {
                                    return (
                                        <div
                                            className=" h-20 mx-10"
                                            key={accrediation._id}
                                        >
                                            <Image
                                                loading="lazy"
                                                key={accrediation._id}
                                                src={accrediation?.image}
                                                width={80}
                                                height={80}
                                                // sizes="100vh"
                                                alt="strategic logo"
                                                className=" h-full w-full object-contain"
                                                style={{
                                                    mixBlendMode: 'multiply',
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </Marquee>
                            {/* </Carousel> */}
                        </div>
                    </div>
                </div>
            </div>
        </selection>
    );
};

export default StrategicPartners;
