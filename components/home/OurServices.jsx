import React from 'react';
import Image from 'next/image';

const OurServices = () => {
    return (
        <div className="m-4 mb-[30%] md:mb-[9%]">
            <h2 className="text-4xl md:text-6xl text-[#2A3C5B] font-bold text-center mb-12 mt-8">
                Our Services
            </h2>
            <div className="md:flex">
                <div className="rounded-lg p-5 bg-[#f6f5ec] shadow-md m-3 basis-3/5 relative">
                    <p className="text-2xl md:text-3xl text-[#2A3C5B] mb-2">
                        Decarbonisation Services
                    </p>
                    <p className="text-[#747279] my-3 text-lg md:text-xl">
                        Unlock the potential of carbon projects with our expert
                        consultation. Sustainology guides you through every
                        stage— from project design to validation and credit
                        issuance. Whether you're focused on reforestation, clean
                        cookstoves, or renewable energy, we ensure your project
                        aligns with global standards and maximizes carbon credit
                        potential, helping you make a lasting environmental
                        impact while driving financial returns.
                    </p>

                    <Image
                        src="/images/home/OurServeImage.png"
                        alt="Background"
                        width={600}
                        height={400}
                        layout="responsive"
                        className="w-full md:h-[28vh] md:mt-7"
                    />
                </div>
                <div className="rounded-lg p-5 bg-[#e6faff] shadow-md m-3 basis-2/5">
                    <p className="text-2xl md:text-3xl text-[#2A3C5B] mb-2">
                        Carbon Project Consultancy
                    </p>
                    <p className="text-[#747279] my-3 text-lg md:text-xl">
                        Unlock the potential of carbon projects with our expert
                        consultation. Our end to end services range from project
                        design to validation and credit issuance. We ensure your
                        project aligns with global standards and maximizes
                        carbon credit potential, helping you make a lasting
                        environmental impact while driving financial returns.
                    </p>
                    <Image
                        src="/images/home/OurServeImage2.png"
                        alt="Background"
                        width={800}
                        height={400}
                        layout="responsive"
                        className="w-full md:h-[30vh]"
                    />
                </div>
            </div>

            <div className="md:flex">
                <div className="rounded-lg p-5 bg-[#e6faff] shadow-md m-3 basis-2/5">
                    <p className="text-2xl md:text-3xl text-[#2A3C5B] mb-2">
                        ESG Consultancy
                    </p>
                    <p className="text-[#747279] my-3 text-lg md:text-xl">
                        Achieve sustainability with comprehensive ESG strategies
                        tailored to your business. We offer a clear roadmap to
                        meet compliance, reduce environmental impact, and
                        improve social governance. Lead with purpose while
                        staying ahead in today’s eco-conscious market.
                    </p>
                    <Image
                        src="/images/home/OurServeImage2.png"
                        alt="Background"
                        width={800}
                        height={400}
                        layout="responsive"
                        className="w-full md:h-full"
                    />
                </div>
                <div className="rounded-lg p-5 bg-[#f6f5ec] shadow-md m-3 basis-3/5">
                    <p className="text-2xl md:text-3xl text-[#2A3C5B] mb-2">
                        Carbon Credit Marketplace
                    </p>
                    <p className="text-[#747279] my-3 text-lg md:text-xl">
                        Buy and sell verified carbon credits easily through
                        Sustainology’s transparent marketplace. Connect with
                        certified emission-reduction projects to offset your
                        carbon footprint. Whether investing or trading, our
                        platform offers a seamless, reliable solution to meet
                        your sustainability goals.
                    </p>
                    <Image
                        src="/images/home/OurServeImage.png"
                        alt="Background"
                        width={800}
                        height={400}
                        layout="responsive"
                        className="w-full md:h-full md:mt-7"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurServices;
