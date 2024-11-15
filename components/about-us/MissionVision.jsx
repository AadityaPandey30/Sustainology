import React, { useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const MissionVision = ({ sectionRefs }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handelVision = () => {
        gsap.to('.vision-btn', {
            duration: 1,
            background: '#5D7C64',
            color: 'white',
        });
        gsap.to('.mission-btn', {
            duration: 1,
            background: 'white',
            color: '#5D7C64',
            border: '1px solid #5D7C64',
        });
        setIsVisible(true);
        gsap.to('.vision-img', {
            duration: 1,
            width: '212px',
            height: '212px',
        });
        gsap.to('.mission-img', {
            duration: 1,
            width: '140px',
            height: '140px',
        });
    };

    const handelMission = () => {
        gsap.to('.mission-btn', {
            duration: 1,
            background: '#5D7C64',
            color: 'white',
        });
        gsap.to('.vision-btn', {
            duration: 1,
            background: 'white',
            color: '#5D7C64',
            border: '1px solid #5D7C64',
        });
        setIsVisible(false);
        gsap.to('.vision-img', {
            duration: 1,
            width: '140px',
            height: '140px',
        });
        gsap.to('.mission-img', {
            duration: 1,
            width: '212px',
            height: '212px',
        });
    };
    return (
        <section
            id="mission-vision"
            ref={(el) => (sectionRefs.current[0] = el)}
        >
            <div className="lg:px-[95px] px-10 lg:flex mt-12">
                <div className=" lg:w-1/4">
                    <div className="flex justify-end ">
                        <div className="  max-lg:hidden h-[212px] w-[212px] rounded-full flex items-center justify-center object-cover overflow-hidden vision-img">
                            <Image
                                loading="lazy"
                                src="/mission-vision1.png"
                                alt="mission-vision"
                                sizes="100vw"
                                className="w-[212px] h-[212px] vision-img"
                                width={212}
                                height={212}
                            />
                        </div>
                    </div>
                    <div className=" max-lg:hidden w-[140px] h-[140px]     rounded-full object-cover overflow-hidden mission-img">
                        <Image
                            loading="lazy"
                            src="/mission-vision2.png"
                            alt="mission-vision "
                            sizes="100vw"
                            className="w-[140px] h-[140px] mission-img"
                            width={212}
                            height={212}
                        />
                    </div>
                </div>
                <div className=" md:px-20 px-7 py-7 lg:w-3/4">
                    <div className=" flex md:gap-3 max-md:justify-between sm:space-x-10  ">
                        <button
                            className="font-semibold text-2xl pt-[10px] pb-[14px] px-[25px]  bg-[#5D7C64]  text-white   rounded-[50px] vision-btn "
                            onClick={handelVision}
                        >
                            Vision
                        </button>
                        <button
                            className=" font-semibold text-2xl pt-[10px] pb-[14px] px-[20px]  bg-white border text-[#5D7C64] border-[#5D7C64]  rounded-[50px]  mission-btn"
                            onClick={handelMission}
                        >
                            Mission
                        </button>
                    </div>
                    <div className="mt-12 ">
                        {isVisible ? (
                            <p className="font-medium  text-lg md:text-[1.75rem] md:leading-[37.97px] text-[#4C4C4C] vision-txt ">
                                To revolutionize the global carbon credit market
                                through our innovative and proprietary platform
                                providing seamless carbon credit related
                                economic benefits contributing to a sustainable
                                future for all stakeholders.
                            </p>
                        ) : (
                            <p className="font-medium text-lg md:text-[1.75rem] md:leading-[37.97px] text-[#4C4C4C] mission-txt  max-sm:text-center ">
                                To facilitate the transition to a low-carbon
                                world, verify the authenticity of carbon
                                reduction measures, and foster a sustainable
                                global economy, all in efforts to safeguard our
                                planet.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
