import React from 'react';
import Image from 'next/image';

const DecarbonApproachMobile = ({ sectionRefs }) => {
    return (
        <>
            {/* start for mobile view */}
            <section className="mob-section sm:hidden" id="our-approach">
                <div className="approach-bg md:pb-28 ">
                    <div className="lg:pl-[132px] lg:pr-[197px] px-5 py-10 flex justify-center place-items-center h-full flex-col text-center">
                        <div className="font-extrabold md:text-[3.25rem] md:leading-[4.40rem] text-4xl text-center text-[#33496F]">
                            <h2>Our Approach</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 sm:gap-14 gap-5 mt-10 text-center">
                            <div className="min-h-[13.875rem] rounded-lg py-2 px-5 backdrop-blur-3xl bg-[#ffffff91] hover:bg-[#ffffff6b] border-card">
                                <h3 className="font-bold sm:text-[2rem] text-2xl leading-[2rem] text-[#4C4C4C] text-center break-words">
                                    Transition Planning for NetZero
                                </h3>
                                <Image
                                    loading="lazy"
                                    className="m-auto my-5"
                                    src="/images/business/app1.png"
                                    alt=""
                                    width={108}
                                    height={60}
                                />
                                <p className="font-semibold sm:text-xl leading-[1.625rem] text-[#808080] text-center mt-7">
                                    Drawing on our experience with blue carbon,
                                    soil carbon, and other carbon removal
                                    projects and government partnerships, we
                                    craft strategic roadmaps to navigate
                                    businesses towards a NetZero future,
                                    aligning with global sustainability
                                    standards and your carbon-neutral
                                    objectives.
                                </p>
                            </div>
                            <div className="min-h-[13.875rem] rounded-lg py-2 px-5 backdrop-blur-3xl bg-[#ffffff91] hover:bg-[#ffffff6b] border-card">
                                <h3 className="font-bold sm:text-[2rem] text-2xl leading-[2rem] text-[#4C4C4C] text-center break-words">
                                    Decarbonisation Solutions :
                                </h3>
                                <Image
                                    loading="lazy"
                                    className="m-auto my-5"
                                    src="/images/business/app2.png"
                                    alt=""
                                    width={108}
                                    height={60}
                                />
                                <p className="font-semibold sm:text-xl leading-[1.625rem] text-[#808080] text-center mt-7">
                                    Utilising insights from our international
                                    carbon removal initiatives, we offer
                                    decarbonization strategies that minimize
                                    carbon footprints and promote eco-friendly
                                    innovations.
                                </p>
                            </div>
                            <div className="min-h-[13.875rem] rounded-lg py-2 px-5 backdrop-blur-3xl bg-[#ffffff91] hover:bg-[#ffffff6b] border-card">
                                <h3 className="font-bold sm:text-[2rem] text-2xl leading-[2rem] text-[#4C4C4C] text-center break-words">
                                    Nature and Biodiversity Strategic
                                    Investments :
                                </h3>
                                <Image
                                    loading="lazy"
                                    className="m-auto my-5"
                                    src="/images/business/app3.png"
                                    alt=""
                                    width={108}
                                    height={60}
                                />
                                <p className="font-semibold sm:text-xl leading-[1.625rem] text-[#808080] text-center mt-7">
                                    Leveraging our expertise in carbon
                                    ecosystems, we guide strategic investments
                                    in biodiversity and nature conservation,
                                    enhancing ecological resilience and carbon
                                    sequestration.
                                </p>
                            </div>
                            <div className="min-h-[13.875rem] rounded-lg py-2 px-5 backdrop-blur-3xl bg-[#ffffff91] hover:bg-[#ffffff6b] border-card">
                                <h3 className="font-bold sm:text-[2rem] text-2xl leading-[2rem] text-[#4C4C4C] text-center break-words">
                                    Supply Chain Decarbonisation :
                                </h3>
                                <Image
                                    loading="lazy"
                                    className="m-auto my-5"
                                    src="/images/business/app4.png"
                                    alt=""
                                    width={108}
                                    height={60}
                                />
                                <p className="font-semibold leading-[1.625rem] text-[#808080] sm:text-xl text-center mt-7">
                                    Building on our experience developing blue
                                    carbon projects across borders, we
                                    accelerate supply chain decarbonization,
                                    implementing practices that reduce emissions
                                    and foster a sustainable economy
                                </p>
                            </div>
                            <div className="min-h-[13.875rem] rounded-lg py-5 px-5 backdrop-blur-3xl bg-[#ffffff91] hover:bg-[#ffffff6b] border-card">
                                <h3 className="font-bold sm:text-[2rem] text-2xl leading-[2rem] text-[#4C4C4C] text-center break-words">
                                    Renewables, Desalination, and Water
                                    Management Projects
                                </h3>
                                <Image
                                    loading="lazy"
                                    className="m-auto my-5"
                                    src="/images/business/app5.png"
                                    alt=""
                                    width={108}
                                    height={60}
                                />
                                <p className="font-semibold sm:text-xl leading-[1.625rem] text-[#808080] text-center mt-7">
                                    With Sustainology’s background in water,
                                    desalination & renewable energy projects, we
                                    develop solutions that conserve resources
                                    and support environmental sustainability,
                                    environmental stewardship, and resource
                                    efficiency within your organization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end for mobile view */}
        </>
    );
};

export default DecarbonApproachMobile;
