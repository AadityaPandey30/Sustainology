import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Unlocking = ({ sectionRefs }) => {
    return (
        <section className="lg:px-[95px] px-3 md:px-10 md:pt-28 pt-12 pb-[3.5rem] lg:pb-[9.5rem] unlocking-container">
            <div id="bu-3" ref={(el) => (sectionRefs.current[2] = el)}></div>
            <div className="">
                <div className="col-span-4">
                    <h3 className="max-md:text-center  font-bold text-4xl md:text-5xl lg:text-[52px] text-[#FFFFFF] md:mr-20">
                        Unlocking Stability: Carbon Offtake Agreements for
                        Sustainable Supply Chains
                    </h3>

                    <p className="max-md:text-center mt-8 md:text-2xl md:leading-7 text-18px font-semibold text-[#FFFFFF]">
                        Carbon offtake agreements are your pathway to ensure a
                        consistent supply of carbon credits, shielding your
                        business from price fluctuations in carbon markets.
                        Tailoring projects to your sustainability values right
                        from initiation, and impacting climate, community, and
                        biodiversity, our offtake agreement service ensures a
                        stable carbon credit supply, allowing confident planning
                        of sustainability efforts with predictable costs. Get a
                        steady flow of credits and offset your emissions now!
                    </p>
                    <div className="flex items-center mt-14 mb-4 gap-3 cursor-pointer">
                        <Link
                            href="/projects"
                            className="flex gap-x-4 items-center"
                        >
                            <span className="text-[#FFFFFF]  font-semibold">
                                Secure Your Supply
                            </span>
                            <Image
                                loading="lazy"
                                src="/left-arrow.svg"
                                alt=""
                                height={20}
                                width={20}
                                className="rotate-180"
                            />
                        </Link>
                    </div>
                    <Link href="/contact-us">
                        <button className="  font-extrabold   text-xl leading-[1.375rem] lg:font-semibold  py-2 hover:text-[#ffffff] w-full md:w-[25rem] text-[#2F5738] rounded hover:bg-[#2F5738] border border-[#ffffff] hover:border-[#2F5738] bg-[#ffffff]">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Unlocking;
