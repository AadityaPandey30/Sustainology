import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';

const Circular = ({ sectionRefs }) => {
    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1500,
        cssEase: 'linear',
    };

    const router = useRouter();
    return (
        <section
            className="circulr-container"
            id="busi-4"
            ref={(el) => (sectionRefs.current[3] = el)}
        >
            <div className="lg:px-[95px] px-10 md:pt-28 pt-12">
                <h3 className="text-center font-extrabold md:text-[44px] text-4xl md:leading-[62px] text-[#2A3C5B]">
                    Circular economy services
                </h3>

                <div className="sm:grid sm:grid-cols-3 gap-11 items-center">
                    <div className="col-span-2">
                        <ul className="mt-8 flex flex-col gap-2 text-lg leading-[1.56rem] font-medium text-[#666666] custom-icons icon-dark">
                            <li>
                                <strong className="text-[#333333]">
                                    Circular Economy Vision Development :{' '}
                                </strong>
                                Crafting a visionary circular economy framework
                                tailored to your business, setting the stage for
                                sustainable growth and innovation.
                            </li>
                            <li>
                                <strong className="text-[#333333]">
                                    Opportunity Identification :
                                </strong>{' '}
                                Uncovering circular economy opportunities that
                                align with your business model, driving
                                efficiency and reducing waste.
                            </li>
                            <li>
                                <strong className="text-[#333333]">
                                    Strategy Development and Implementation :
                                </strong>
                                Formulating and executing strategic plans based
                                on your circular economy vision, transforming
                                principles into practice for tangible impact.
                            </li>
                            <li>
                                <strong className="text-[#333333]">
                                    Case Studies and Innovation :{' '}
                                </strong>
                                Generating insightful case studies from
                                successful circular projects, fostering a
                                culture of innovation and continuous
                                improvement.
                            </li>
                            <li>
                                <strong className="text-[#333333]">
                                    Capacity Building and Training Workshops :
                                </strong>
                                Empowering teams with knowledge through
                                Sustainology-led workshops, building expertise
                                in circular economy principles and practices.
                            </li>
                        </ul>
                    </div>
                    <div className="hidden sm:block">
                        <Slider {...settings}>
                            {[1, 3].map((e) => (
                                <div
                                    className="flex justify-center items-center relative w-[576.11px] rounded-full overflow-hidden"
                                    key={e}
                                >
                                    <Image
                                        loading="lazy"
                                        src={`/images/business/cir${e}.png`}
                                        alt="Article Image"
                                        sizes="100vw"
                                        height={576.11}
                                        width={576.11}
                                        className="h-full sm:w-full  object-cover"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className=" mt-12 items-center">
                    <button
                        className="max-sm:w-full text-xl leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] text-white rounded hover:bg-[#FCFDFA] border  outline-none border-[#2F5738]  bg-[#2F5738] px-12"
                        onClick={() => router.push('contact-us')}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="lg:px-[95px] md:py-44 py-24 flex flex-col items-center gap-[60px]">
                <h3 className="font-extrabold text-center text-4xl max-md:px-10 md:text-[44px] md:leading-[62px] text-[#2A3C5B]">
                    Explore Our Decarbonisation Services
                </h3>
                <Link
                    href="/business-decarbon"
                    className="md:w-1/3 w-full max-md:px-10"
                >
                    <button className="text-xl leading-[1.375rem] font-semibold py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]">
                        Explore Now
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Circular;
