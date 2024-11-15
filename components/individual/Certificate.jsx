import React from 'react';
import Image from 'next/image';

const Certificate = () => {
    return (
        <section className="md:mt-40 mt-12 relative lg:px-[95px] px-2">
            <div className="absolute right-0  -z-10">
                <Image
                    loading="lazy"
                    src="/Vector6.svg"
                    alt="shade1"
                    height={452.43}
                    width={613.5}
                />
                <Image
                    loading="lazy"
                    src="/Vector5.svg"
                    className="w-full"
                    alt="shade2"
                    height={491.32}
                    width={584.82}
                />
            </div>
            <div className="lg:w-3/4 ">
                <div>
                    <h3 className="font-bold md:text-5xl md:leading-[3.625rem] text-4xl text-[#2A3C5B] max-sm:text-center">
                        Join the Eco-Elite: <br /> Showcase Your Commitment with
                        Our Green Certificate
                    </h3>
                </div>
                <div className="grid xl:grid-cols-2 grid-row-2 md:gap-12 gap-8 gap-x-20">
                    <div className="">
                        <p className="mt-3 text-[#666666] font-medium text-xl md:text-2xl md:leading-[1.56rem] max-sm:text-center">
                            By participating in carbon offsetting, you're taking
                            a proactive step towards a healthier planet—but your
                            impact doesn't have to stop there. With every carbon
                            credit you purchase, we’ll issue you a personalised
                            certificate that not only symbolises your commitment
                            but also serves as a powerful tool to inspire
                            others.
                        </p>
                    </div>
                    <div>
                        <Image
                            loading="lazy"
                            src="/cretificate.png"
                            alt=""
                            sizes="100vw"
                            height={249}
                            width={441}
                            className="h-full w-full transition-all duration-300 ease-in-out shadow hover:shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certificate;
