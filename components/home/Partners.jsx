import React from 'react';
import Image from 'next/image';
import { useFetch } from '@/hook/getDataOnLoad';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
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
const Partners = () => {
    const partnersResponse = useFetch({ url: '/partner/get-all-active' });
    const partnersData = partnersResponse?.data?.response || [];

    return (
        <section className="accreditations-section mx-auto px-10 lg:px-[95px]  pt-12 lg:pt-40 pb-20 md:pb-40">
            <div className="border-[3px] h-[330.3px]  border-white py-6 px-8 accreditations-bg bg-cover rounded-[20px]">
                <div className="container mx-auto flex justify-center text-center font-bold md:text-[52px] md:leading-[60px] text-4xl mb-6">
                    <h2 className="text-[#33496F]">Strategic Partners</h2>
                </div>
                <div className="p-2">
                    <Marquee speed={100} autoFill className="h-[174px]">
                        {partnersData.map((partner) => {
                            return (
                                <div
                                    key={partner.id}
                                    className="h-[174px] w-[150px]  mx-10"
                                >
                                    <Image
                                        loading="lazy"
                                        src={partner.image}
                                        alt="Article Image"
                                        sizes="100vw"
                                        className="h-full w-full object-contain"
                                        width={174}
                                        height={100}
                                    />
                                </div>
                            );
                        })}
                    </Marquee>
                </div>
            </div>
        </section>
        // <section className="accreditations-section mx-auto px-6 md:px-10 lg:px-20 xl:px-32 pt-12 md:pt-20 pb-24 md:pb-32 lg:pb-40">
        //     <div className="border-[3px]  border-white py-4 md:py-8 lg:py-12 xl:py-16 px-4 md:px-8 lg:px-12 xl:px-16 accreditations-bg bg-cover rounded-[20px]">
        //         <div className="container mx-auto flex justify-center text-center font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[36px] md:leading-[48px] mb-4 md:mb-6">
        //             <h2 className="text-[#33496F]">Strategic Partners</h2>
        //         </div>
        //         <div className="p-2 md:p-4 lg:p-6 xl:p-8">
        //             <div className="overflow-x-auto">
        //                 <div className="flex"></div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Partners;
