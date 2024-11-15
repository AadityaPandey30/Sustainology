import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom arrow components positioned around the center slide
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                position: 'absolute',
                top: '30%',
                transform: 'translate(0, -30%)',
                right: '10%',
            }}
            onClick={onClick}
        >
            <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.47266 16.1016H26.1393"
                    stroke="#808080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M16.8047 6.76953L26.138 16.1029L16.8047 25.4362"
                    stroke="#808080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                position: 'absolute',
                top: '30%',
                transform: 'translate(0, -30%)',
                left: '10%',
            }}
            onClick={onClick}
        >
            <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M26.1393 16.1016H7.47266"
                    stroke="#808080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M16.806 25.4362L7.47266 16.1029L16.806 6.76953"
                    stroke="#808080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    );
}

const Customers = ({ testimonials, isAbout }) => {
    const slides = testimonials?.getAllTestimonials || [];
    const [centerIndex, setCenterIndex] = useState(0); // Start with the first slide as the center
    const [fade, setFade] = useState({ in: true });
    const slideCount = slides?.length;

    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0', // No padding as it should show only 5 slides at a time
        beforeChange: (current, next) => {
            setFade({ in: false });
            setTimeout(() => {
                setCenterIndex(next);
                setFade({ in: true }); // Fade in the new slide
            }, settings.speed / 2);
        },
        // Assuming slideCount is known and is the total number of unique slides
        slideCount: slideCount,
        responsive: [
            {
                breakpoint: 1024, // adjust this for your needs
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    // fade: false,
                },
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    fade: false,
                },
            },
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section
            className={`customer-section mx-auto lg:px-[95px] sm:px-[100px] ${
                isAbout ? 'lg:pt-16 pt-12' : 'lg:p-6 pt-0 '
            } ${isAbout ? 'lg:pb-40 pb-20' : 'lg:p-6 pb-0'}`}
        >
            <div className="border gradient-our-value border-white py-6 rounded-[20px]">
                <div className="container mx-auto text-center  font-bold md:text-[52px] md:leading-[60px] text-4xl mb-6">
                    <h2 className="text-[#33496F]">What Our Clients Say</h2>
                </div>
                <div className="grid lg:grid-cols-7  grid-cols-1">
                    <div className=" hidden  col-span-2 lg:flex flex-col gap-[14px] pr-20 mt-28">
                        <div
                            className={`justify-end flex transition-opacity duration-${
                                settings.speed
                            } ${fade.in ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="relative max-w-[120px]  rounded-full overflow-hidden">
                                <Image
                                    loading="lazy"
                                    src={
                                        slides[
                                            (centerIndex - 1 + slides.length) %
                                                slides.length
                                        ]?.image
                                    }
                                    alt="Article Image"
                                    sizes="100vw"
                                    height={120}
                                    width={120}
                                    className=" h-full w-full object-cover object-center "
                                />
                            </div>
                        </div>
                        <div
                            className={`justify-start flex transition-opacity duration-${
                                settings.speed
                            } ${fade.in ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="relative max-w-[100px] rounded-full overflow-hidden">
                                <Image
                                    loading="lazy"
                                    src={
                                        slides[
                                            (centerIndex - 2 + slides.length) %
                                                slides.length
                                        ]?.image
                                    }
                                    alt="Article Image"
                                    sizes="100vw"
                                    height={100}
                                    width={100}
                                    className="object-center object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <Slider {...settings}>
                            {slides?.map((slide, idx) => (
                                <div
                                    key={idx}
                                    className={`p-6 justify-center flex transition-all`}
                                >
                                    <div className="w-3/4 mx-auto text-center">
                                        <div className="p-6 justify-center flex">
                                            <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden">
                                                <Image
                                                    loading="lazy"
                                                    src={slide?.image}
                                                    alt="Article Image"
                                                    sizes="100vw"
                                                    height={180}
                                                    width={180}
                                                    className="h-full w-full  object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:w-[288px] w-full mx-auto">
                                            <h4 className="text-[#33496F] text-xl font-semibold">
                                                {slide?.name} ({slide?.title})
                                            </h4>
                                            <p className="mt-5 text-[#666666] font-semibold text-sm">
                                                {slide?.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="hidden col-span-2 lg:flex flex-col gap-[14px] pl-20 mt-28">
                        <div
                            className={`justify-start flex transition-opacity duration-${
                                settings.speed
                            } ${fade.in ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                                <Image
                                    loading="lazy"
                                    src={
                                        slides[
                                            (centerIndex + 1) % slides.length
                                        ]?.image
                                    }
                                    alt="Article"
                                    sizes="100vw"
                                    height={120}
                                    width={120}
                                    className=" object-cover object-center h-full w-full"
                                />
                            </div>
                        </div>
                        <div
                            className={`justify-end flex transition-opacity duration-${
                                settings.speed
                            } ${fade.in ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
                                <Image
                                    loading="lazy"
                                    src={
                                        slides[
                                            (centerIndex + 2) % slides.length
                                        ]?.image
                                    }
                                    alt="Article Image"
                                    sizes="100vw"
                                    height={100}
                                    width={100}
                                    className=" object-cover object-center h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Customers;
