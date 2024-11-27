import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

const Founders = ({
    data,
    title,
    setOpenDetail,
    setModalData,
    id,
    sectionRefs,
    refIndex,
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section id={id} ref={(el) => (sectionRefs.current[refIndex] = el)}>
            <Image
                loading="lazy"
                src="/founder-vector-2.svg"
                alt="vector-1"
                height={425.43}
                width={613.5}
                className="absolute -z-10"
            />
            <Image
                loading="lazy"
                src="/founder-vector-1.svg"
                alt="vector-1"
                height={491.32}
                width={584.82}
                className="absolute -left-10 -z-10 mt-48 -rotate-12 "
            />
            <div className="mt-10 lg:px-[95px] px-10">
                <h2 className="font-bold md:text-[52px] md:leading-[70.51px] text-[#2A3C5B] text-center capitalize text-4xl">
                    {title}
                </h2>
                <div className="mt-10">
                    {/* <div className="py-5 px-7 rounded-xl flex flex-col  items-center hover:shadow-xl hover:border hover:border-white hover:bg-[#DDDDDD] group/founder"

                        >
                            <div className="h-24 w-24 overflow-hidden  rounded-full ">
                                <Image loading="lazy"
                                    src="/founder-1.png"
                                    height={100}
                                    width={100}
                                    className="object-cover"
                                    alt="founder"
                                />
                            </div>
                            <div className="mt-7">
                                <p className="font-semibold text-[28px] leading-[37.97px] text-center text-[#60718F] group-hover/founder:text-[#33496F]">
                                    Ansh Kumar
                                </p>
                                <p className="font-medium text-2xl text-center text-[#60718F]  group-hover/founder:text-[#4C4C4C]">
                                    Founder
                                </p>
                            </div>
                        </div> */}
                    <Carousel
                        responsive={responsive}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        transitionDuration={500}
                        swipeable={false}
                        autoPlay={true}
                        infinite={isMobile || title !== 'Founders'}
                        draggable={false}
                        arrows={isMobile || title === 'Founders'}
                    >
                        {data?.map((info, index) => {
                            return (
                                <div
                                    key={info?._id || index}
                                    className={`py-5 ml-3 px-7 rounded-xl flex flex-col  items-center  ${title === 'Founders' && 'hover:border hover:border-white hover:bg-[#dddddd3d] group/founder '} mb-10`}
                                    onClick={() => {
                                        setOpenDetail(true);
                                        setModalData(info);
                                    }}
                                >
                                    <div
                                        className={` overflow-hidden rounded-full h-[100px] w-[100px] `}
                                    >
                                        <Image
                                            loading="lazy"
                                            src={info?.image}
                                            height={100}
                                            width={100}
                                            sizes="100vw"
                                            className=" h-full w-full object-cover object-top"
                                            alt={info?.name}
                                            style={{
                                                mixBlendMode: 'multiply',
                                            }}
                                        />
                                    </div>
                                    <div className="mt-7">
                                        <p className="font-bold uppercase text-[21px] leading-[37.97px] text-center text-[#60718F] group-hover/founder:text-[#33496F] whitespace-nowrap">
                                            {info?.name}
                                        </p>
                                        <p className="font-medium text-2xl text-center text-[#60718F]  group-hover/founder:text-[#4C4C4C] capitalize">
                                            {info?.title}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Founders;
