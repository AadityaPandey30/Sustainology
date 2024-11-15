import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

const SatelliteImage = ({ projectDetails, sectionRefs }) => {
    return (
        <section
            className="md:mt-20 mt-12"
            id="satellite-image"
            ref={(el) => (sectionRefs.current[2] = el)}
        >
            <p className="pt-2 lg:px-[95px] px-10 font-bold md:text-[3.25rem] md:leading-[4.40rem] text-4xl text-[#2A3C5B]">
                Satellite Image
            </p>
            <div className="satellite-image-container md:mt-8 mt-4 ">
                <Carousel
                    showThumbs={false}
                    showIndicators={true}
                    autoPlay={true}
                >
                    {projectDetails?.satelliteImage?.map((image, index) => {
                        return (
                            <Image
                                loading="lazy"
                                src={image}
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                }}
                                alt="satellite image"
                                width={500}
                                height={300}
                                key={index}
                            />
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default SatelliteImage;
