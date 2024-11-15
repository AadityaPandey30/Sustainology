import React from 'react';

const OurApproach = ({ sectionRefs }) => {
    return (
        <section id="our-approach" ref={(el) => (sectionRefs.current[0] = el)}>
            <div className="approach-bg md:pb-28 pb-12">
                <div className="lg:pl-[132px] lg:pr-[197px] px-10 py-10 md:py-20 flex justify-center place-items-center h-full flex-col">
                    <div className="font-extrabold md:text-[3.25rem] md:leading-[4.40rem] text-4xl text-center text-[#33496F]">
                        <h2>Our Approach</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-14 mt-10">
                        <div className="min-h-[13.875rem] rounded-lg py-5 px-10 backdrop-blur-3xl bg-[#ffffff91] hover:bg-[#ffffff6b] border-card">
                            <h3 className="font-bold text-[2rem] leading-[2rem] text-[#4C4C4C] text-center break-words">
                                Strategic <br /> Integration
                            </h3>
                            <p className="font-semibold text-xl leading-[1.625rem] text-[#808080] text-center mt-7">
                                Position sustainability at the core of your
                                strategy to future-proof your business and tap
                                into the abundant opportunities it presents
                            </p>
                        </div>
                        <div className="min-h-[13.875rem] rounded-lg py-5 px-10 backdrop-blur-3xl bg-[#ffffff91] hover:bg-[#ffffff6b] border-card">
                            <h3 className="font-bold text-[2rem] leading-[2rem] text-[#4C4C4C] text-center">
                                Operational <br /> Sustainability
                            </h3>
                            <p className="font-semibold text-xl leading-[1.625rem] text-[#808080] text-center mt-7">
                                Boost your operational sustainability to improve
                                efficiency and address crucial risk management
                                issues
                            </p>
                        </div>
                        <div className="min-h-[13.875rem] rounded-lg py-5 px-10 backdrop-blur-3xl bg-[#ffffff91] hover:bg-[#ffffff6b] border-card">
                            <h3 className="font-bold text-[2rem] leading-[2rem] text-[#4C4C4C] text-center">
                                Customer-Centric <br /> Solutions
                            </h3>
                            <p className="font-semibold text-xl leading-[1.625rem] text-[#808080] text-center mt-7">
                                Utilize sustainability to craft distinctive
                                offerings that resonate with your customers.
                            </p>
                        </div>
                        <div className="min-h-[13.875rem] rounded-lg py-5 px-10 backdrop-blur-3xl bg-[#ffffff91] hover:bg-[#ffffff6b] border-card">
                            <h3 className="font-bold text-[2rem] leading-[2rem] text-[#4C4C4C] text-center">
                                Achieving Real <br /> Transformation
                            </h3>
                            <p className="font-semibold text-xl leading-[1.625rem] text-[#808080] text-center mt-7">
                                With only 4% of companies meeting their
                                sustainability goals, we&apos;re here to help
                                you overcome challenges and strategically
                                organise for success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
