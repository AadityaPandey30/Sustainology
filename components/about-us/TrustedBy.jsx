import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useFetch } from '@/hook/getDataOnLoad';

const TrustedBy = () => {
    const clientsResponse = useFetch({ url: '/clients/get-all-active' });

    const clientsData = clientsResponse?.data?.response || [];

    return (
        <div className="">
            <h2 className="font-bold md:text-[52px] md:leading-[70.51px] text-center text-[#2A3C5B] text-4xl">
                Trusted By
            </h2>
            <div className="flex flex-col w-full lg:px-[95px] sm:px-[100px]    items-center ">
                <div className=" bg-white  flex   rounded-t-[17.59px] w-full  mx-4  mt-6 px-2 pb-4 ">
                    <div className="w-full  overflow-hidden ">
                        <Marquee speed={100} autoFill>
                            <div className="flex gap-16">
                                {clientsData?.map((advisor, index) => {
                                    return (
                                        <div
                                            key={advisor.id}
                                            className="h-[72px] mt-3 mx-10"
                                        >
                                            <Image
                                                loading="lazy"
                                                src={advisor.image}
                                                alt="Article Image"
                                                style={{
                                                    mixBlendMode: 'multiply',
                                                }}
                                                sizes="100vw"
                                                className={`h-full w-full object-contain ${index === clientsData.length - 1 && ' '}`}
                                                height={72}
                                                width={225}
                                            />
                                        </div>
                                    );
                                })}

                                {/* <Image loading="lazy"
                                    src="/images/home/com_2.png"
                                    alt="Article Image"
                                    height={72}
                                    width={114}
                                />
                                <Image loading="lazy"

                                    src="/images/home/com_3.png"
                                    alt="Article Image"
                                    height={72}
                                    width={192}
                                />
                                <Image loading="lazy"
                                    {100}
                                    src="/images/home/com_4.png"
                                    alt="Article Image"
                                    height={72}
                                    width={57}
                                />
                                <Image loading="lazy"
                                    {100}
                                    src="/images/home/com_5.png"
                                    alt="Article Image"
                                    height={72}
                                    width={214}
                                />
                                <Image loading="lazy"
                                    {100}
                                    src="/images/home/com_6.png"
                                    alt="Article Image"
                                    height={72}
                                    width={223}
                                />
                                <Image loading="lazy"
                                    {100}
                                    src="/images/home/com_7.png"
                                    alt="Article Image"
                                    height={72}
                                    width={139}
                                /> */}
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
