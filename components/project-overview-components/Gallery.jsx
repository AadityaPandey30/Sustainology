import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaChevronRight } from 'react-icons/fa6';
import { FaChevronLeft } from 'react-icons/fa6';
// import Image from 'next/image';

const Gallery = ({ projectDetails, sectionRefs }) => {
    return (
        <section
            className="pt-2 lg:px-[95px] px-10 md:mt-20 mt-12"
            id="gallery"
            ref={(el) => (sectionRefs.current[3] = el)}
        >
            <h3 className="font-bold text-[3.25rem] leading-[4.40rem] text-[#2A3C5B]">
                Gallery
            </h3>
            <div className="mt-10">
                <Carousel
                    showThumbs={false}
                    showIndicators={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    renderArrowPrev={(clickHandler, hasPrev) => {
                        return (
                            <button
                                className={`absolute bottom-11 lg:left-12  md:left-8 sm:left-[1.9rem] left-3  flex justify-center items-center p-3  opacity-100 cursor-pointer z-[9] bg-white rounded-full hidden sm:block`}
                                onClick={clickHandler}
                            >
                                <FaChevronLeft
                                    className={`${
                                        hasPrev
                                            ? 'text-[#2F5738]'
                                            : 'text-[#DCE2DD]'
                                    }`}
                                />
                            </button>
                        );
                    }}
                    renderArrowNext={(clickHandler, hasNext) => {
                        return (
                            <button
                                className={`absolute  bottom-11 lg:right-12  md:right-8 sm:right-[1.9rem] right-3 flex justify-center items-center p-3  opacity-100 cursor-pointer  bg-white rounded-full hidden sm:block`}
                                onClick={clickHandler}
                            >
                                <FaChevronRight
                                    className={`${
                                        hasNext
                                            ? 'text-[#2F5738]'
                                            : 'text-[#DCE2DD]'
                                    } font-medium`}
                                />
                            </button>
                        );
                    }}
                >
                    {projectDetails?.images?.length > 0 &&
                        projectDetails?.images?.map((image, index) => {
                            return (
                                <div key={index} className="">
                                    <img
                                        src={image.image}
                                        className="rounded-xl carousel-image"
                                        alt="gallery-image"
                                        width={612}
                                        height={816}
                                    />
                                    <p className="legend text-center hidden sm:block truncate">
                                        {image.label}
                                    </p>
                                </div>
                            );
                        })}
                </Carousel>
            </div>
        </section>
    );
};

export default Gallery;
