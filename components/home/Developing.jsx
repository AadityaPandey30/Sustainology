import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Developing = () => {
    return (
        // <div className="relative">
        //     <div className="absolute -z-10 right-0  h-full w-1/2 ">
        //         {' '}
        //         <Image loading="lazy"
        //             src="/images/home/green-vector-top-right.png"
        //             alt="vector-right-top"
        //             sizes="100vw"
        //             className="absolute right-0 -top-28  "
        //             height={603.75}
        //             width={736.98}
        //         />
        //         <Image loading="lazy"
        //             src="/images/home/green-right-botton.png"
        //             alt="vector-right-bottom"
        //             sizes="100vw"
        //             className="absolute right-0 -bottom-20  "
        //             height={603.75}
        //             width={795.56}
        //         />
        //     </div>
        //     <div className="absolute -z-10 left-0 h-full w-1/2">
        //         <Image loading="lazy"
        //             src="/images/home/green-left-top.png"
        //             alt="vector-left-top"
        //             sizes="100vw"
        //             className="absolute left-0 -top-28  "
        //             height={603.75}
        //             width={736.98}
        //         />
        //         <Image loading="lazy"
        //             src="/images/home/green-left-bottom.png"
        //             alt="vector-left-bottom"
        //             sizes="100vw"
        //             className="absolute left-0 -bottom-20  "
        //             height={603.75}
        //             width={795.56}
        //         />
        //     </div>
        //     <div className="lg:px-[95px]">
        //         <div className="grid lg:grid-cols-2 py-32 gap-24">
        //             <div className="lg:col-span-1">
        //                 <div className="relative w-full h-full rounded-xl overflow-hidden">
        //                     <Image loading="lazy"
        //                         src="/images/home/Sustainability.png"
        //                         alt=""
        //                         {100}
        //                         className="h-full w-full object-cover "
        //                         fill
        //                         // height={432.69}
        //                         // width={500}
        //                         sizes="100vw"
        //                     />
        //                 </div>
        //             </div>
        //             <div className="lg:col-span-1 flex flex-col justify-between">
        //                 <div>
        //                     <h3 className="font-extrabold text-[52px] leading-[56px] text-[#33496F]">
        //                         Developing Green Projects? Partner with Us
        //                     </h3>
        //                     <p className="mt-8 text-[22px] leading-[30px] font-medium text-[#808080]">
        //                         Our platform offers a direct avenue to connect
        //                         with a global audience, ensuring your valuable
        //                         environmental contributions are recognized and
        //                         rewarded. Whether you're a Project Developer or
        //                         a business involved in reforestation, adopting
        //                         sustainable practices, combating deforestation,
        //                         or utilizing eco-friendly manufacturing methods,
        //                         you can register your project with us. Unlock
        //                         the potential of your sustainability projects by
        //                         registering with us to seamlessly sell your
        //                         carbon credits across a widespread audience.
        //                     </p>
        //                 </div>
        //                 <div className="mr-28 mt-20">
        //                     <Link
        //                         href="/contact-us"
        //                         className=" text-xl leading-[1.375rem] font-semibold flex justify-center py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738] pb-[12px]"
        //                     >
        //                         Contact Us
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="relative">
            {/* Right Vector Images */}
            <div className="absolute -z-10 right-0 h-full w-1/2">
                <Image
                    loading="lazy"
                    src="/images/home/green-vector-top-right.png"
                    alt="vector-right-top"
                    sizes="100vw"
                    className="absolute right-0 -top-28"
                    height={603.75}
                    width={736.98}
                />
                <Image
                    loading="lazy"
                    src="/images/home/green-right-botton.png"
                    alt="vector-right-bottom"
                    sizes="100vw"
                    className="absolute right-0 -bottom-20"
                    height={603.75}
                    width={795.56}
                />
            </div>

            {/* Left Vector Images */}
            <div className="absolute -z-10 left-0 h-full w-1/2">
                <Image
                    loading="lazy"
                    src="/images/home/green-left-top.png"
                    alt="vector-left-top"
                    sizes="100vw"
                    className="absolute left-0 -top-28"
                    height={603.75}
                    width={736.98}
                />
                <Image
                    loading="lazy"
                    src="/images/home/green-left-bottom.png"
                    alt="vector-left-bottom"
                    sizes="100vw"
                    className="absolute left-0 -bottom-20"
                    height={603.75}
                    width={795.56}
                />
            </div>

            {/* Content */}
            <div className="lg:px-8">
                <div className="grid lg:grid-cols-2 py-10 lg:py-32 gap-6 lg:gap-24">
                    <div className="lg:col-span-1">
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                            <Image
                                loading="lazy"
                                src="/images/home/Sustainability.png"
                                alt=""
                                className="h-full w-full object-cover"
                                sizes="100vw"
                                height={432.69}
                                width={500}
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-1 flex flex-col justify-between">
                        <div>
                            <h3 className="px-10 max-md:text-center font-extrabold  md:text-[52px] md:leading-[56px] text-4xl text-[#33496F]">
                                Developing Green Projects? Partner with Us
                            </h3>
                            <p className="px-10 max-md:text-center mt-8 md:text-[22px] md:leading-[30px] font-medium text-[#808080] text-lg">
                                Our platform offers a direct avenue to connect
                                with a global audience, ensuring your valuable
                                environmental contributions are recognized and
                                rewarded. Whether you're a Project Developer or
                                a business involved in reforestation, adopting
                                sustainable practices, combating deforestation,
                                or utilizing eco-friendly manufacturing methods,
                                you can register your project with us. Unlock
                                the potential of your sustainability projects by
                                registering with us to seamlessly sell your
                                carbon credits across a widespread audience.
                            </p>
                        </div>
                        <div className="mr-4 ml-5 sm:ml-5 md:ml-5 lg:mr-28 mt-4 lg:mt-20">
                            <Link
                                href="/contact-us"
                                className="text-base lg:text-xl leading-[1.375rem] font-semibold flex justify-center py-2 hover:text-[#2F5738] w-full text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738] bg-[#2F5738] pb-[12px]"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Developing;
