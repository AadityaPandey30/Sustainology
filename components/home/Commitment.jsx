import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { useFetch } from '@/hook/getDataOnLoad';

const Commitment = () => {
    const clientsResponse = useFetch({ url: '/clients/get-all-active' });

    const clientsData = clientsResponse?.data?.response || [];
    return (
        <section className="bg-[#F7F6EC] md:py-20 py-5">
            <div className="mx-auto px-10 md:px-[132px]">
                <div className="container mx-auto text-center font-bold text-[52px] md:leading-[60px] leading-[52px] mb-6">
                    <h2 className=" text-4xl px-10 md:flex md:justify-center lg:flex lg:justify-center md:text-[52px] text-[#33496F]">
                        Your Trust, Our Commitment
                    </h2>
                </div>
                <p className="text-[#808080] md:text-[22px] md:leading-7 text-lg font-semibold text-center flex justify-center">
                    We take pride in being the preferred sustainability and
                    carbon credit solutions partner for our esteemed
                    clients.These represent not just partnerships but shared
                    journeys towards environmental stewardship. Join us in this
                    collective commitment to a sustainable future and see why
                    trust and excellence define our path.
                </p>
            </div>
            <div className="relative mt-20 pb-2 px-9">
                <Marquee speed={100} autoFill>
                    {clientsData?.map((advisor) => {
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
                                    className={`h-full w-full object-contain `}
                                    height={72}
                                    width={225}
                                />
                            </div>
                        );
                    })}
                </Marquee>
            </div>
        </section>
    );
};

export default Commitment;
