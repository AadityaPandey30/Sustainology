import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const SDGGoals = ({ projectDetails, sectionRefs }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 9,
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

    return (
        <section
            className="pt-2 lg:px-[95px] px-10 md:mt-32 mt-12 mb-10 md:mb-3 "
            id="sdg-goals"
            ref={(el) => (sectionRefs.current[4] = el)}
        >
            <h2 className="font-bold md:text-[3.25rem] md:leading-[4.40rem] text-4xl text-[#2A3C5B]">
                SDG Goals Associated
            </h2>
            <div className="mt-10">
                {projectDetails?.sdgGoals?.length > 0 ? (
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        // customTransition="all .5"
                        transitionDuration={1000}
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        centerMode={true}
                        itemClass="react-multi-item"
                        removeArrowOnDeviceType={['mobile', 'laptop', 'tablet']}
                    >
                        {projectDetails?.sdgGoals?.map((sdg, index) => {
                            return (
                                <div className="h-[100px] " key={sdg?._id}>
                                    <Image
                                        loading="lazy"
                                        key={sdg?._id}
                                        src={
                                            sdg?.image ||
                                            '/ImagePlaceholder.png'
                                        }
                                        height={100}
                                        className="rounded object-cover"
                                        width={100}
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </Carousel>
                ) : (
                    <div className="flex justify-center text-[#4c4c4c] leading-[2.373rem] font-semibold text-[1.75rem]">
                        No SDG Goals Found
                    </div>
                )}
                {/* <div className="flex justify-center items-center border px-6 py-6 rounded bg-[#E9E9E9]">
                    <Image loading="lazy"
                                                    {100}

                        src="/ImagePlaceholder.png"
                        height={30.81}
                        width={49.43}
                    />
                </div>
                <div className="flex justify-center items-center border px-6 py-6 rounded bg-[#E9E9E9]">
                    <Image loading="lazy"
                                                    {100}

                        src="/ImagePlaceholder.png"
                        height={30.81}
                        width={49.43}
                    />
                </div>
                <div className="flex justify-center items-center border px-6 py-6 rounded bg-[#E9E9E9]">
                    <Image loading="lazy"
                                                    {100}

                        src="/ImagePlaceholder.png"
                        height={30.81}
                        width={49.43}
                    />
                </div>
                <div className="flex justify-center items-center border px-6 py-6 rounded bg-[#E9E9E9]">
                    <Image loading="lazy"
                                                    {100}

                        src="/ImagePlaceholder.png"
                        height={30.81}
                        width={49.43}
                    />
                </div> */}
                {/* <div className="flex justify-center items-center border px-6 py-6 rounded bg-[#E9E9E9]">
                    <Image loading="lazy"
                                                    {100}

                        src="/ImagePlaceholder.png"
                        height={30.81}
                        width={49.43}
                    />
                </div> */}
            </div>
        </section>
    );
};

export default SDGGoals;
