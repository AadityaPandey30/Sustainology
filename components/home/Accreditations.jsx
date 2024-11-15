import React from 'react';
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
const Accreditations = () => {
    const accreditationResponse = useFetch({
        url: '/accreditations/get-all-active',
    });

    const accreditations = accreditationResponse?.data?.response || [];
    return (
        // <section className="accreditations-section mx-auto px-[132px] -mt-36 pt-40 pb-40">
        //     <div className="border-[3px] border-b-0 border-white py-6 px-8 accreditations-bg rounded-[20px]">
        //         <div className="container mx-auto  font-bold text-[52px] leading-[60px] mb-6">
        //             <h2 className="text-[#33496F] flex justify-center">
        //                 Accreditations
        //             </h2>
        //         </div>
        //         <div className="p-6 space-x-7 ">
        //             <Marquee speed={100} autoFill className="h-[100px]">
        //                 {accreditations.map((accrediation) => {
        //                     return (
        //                         <div
        //                             key={accrediation._id}
        //                             className="h-[100px] w-[102px] mx-10"
        //                         >
        //                             <Image loading="lazy"
        //                                 {100}
        //                                 key={accrediation._id}
        //                                 src={accrediation?.image}
        //                                 sizes="100vw"
        //                                 className="h-full w-full object-contain"
        //                                 alt="Article Image"
        //                                 width={102}
        //                                 height={100}
        //                             />
        //                         </div>
        //                     );
        //                 })}
        //             </Marquee>
        //         </div>
        //     </div>
        // </section>

        <section className="accreditations-section mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32  -mt-44 sm:-mt-32 pt-20 sm:pt-32 sm:pb-32">
            <div className="border-[3px]  border-white py-4 sm:py-6 px-4 sm:px-8 accreditations-bg rounded-[20px]">
                <div className="container mx-auto font-bold text-4xl px-10 md:flex md:justify-center lg:flex lg:justify-center md:text-[52px] text-[#33496F]d:text-4xl lg:text-5xl leading-[48px] mb-4 sm:mb-6">
                    <h2 className="text-[#33496F] flex justify-center">
                        Accreditations
                    </h2>
                </div>
                <div className="p-2 sm:p-4 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
                    <div className="overflow-x-auto">
                        <div className="flex mt-10">
                            <Marquee speed={100} autoFill className="h-[100px]">
                                {accreditations.map((accreditation) => {
                                    return (
                                        <div
                                            key={accreditation._id}
                                            className="h-[100px] w-[102px] mx-10"
                                        >
                                            <Image
                                                loading="lazy"
                                                src={accreditation?.image}
                                                sizes="100vw"
                                                className="h-full w-full object-contain"
                                                alt="Accreditation Image"
                                                width={102}
                                                height={100}
                                            />
                                        </div>
                                    );
                                })}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accreditations;
