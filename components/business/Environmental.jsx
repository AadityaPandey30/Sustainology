import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Environmental = ({ setShowModal }) => {
    const container = useRef();

    useGSAP(
        () => {
            let envrionmentTimeln = gsap.timeline({
                scrollTrigger: {
                    trigger: '.environmentals',
                    pin: true,
                    pinSpacing: true,
                    start: 'left-=80px left',
                    end: '+=2000',
                    scrub: 1,
                    marker: true,
                },
            });

            envrionmentTimeln.addLabel('environmental1');
            envrionmentTimeln.to('.environmental-1', {
                yPercent: 0,
                opacity: 1,
            });

            envrionmentTimeln.from('.environmental-2', {
                yPercent: 75,
                opacity: 0,
            });
            envrionmentTimeln.addLabel('environmental2');

            envrionmentTimeln.to(
                '.environmental-1',
                {
                    yPercent: -0.5,
                    opacity: 0.5,
                },
                '-=0.3'
            );

            envrionmentTimeln.to('.environmental-2', {
                yPercent: 0,
                opacity: 1,
            });

            envrionmentTimeln.from('.environmental-3', {
                yPercent: 75,
                opacity: 0,
            });
        },
        { scope: container }
    );
    return (
        <section
            className="lg:px-[95px] mt-[1.63rem] mb-[8.42rem] environmentals-section environmentals-bg overflow-hidden hidden sm:block"
            ref={container}
        >
            <div className="environmentals">
                <div className="environmental environmental-1 bg-[#E0EBD44D] rounded-[1.75rem] md:p-3  border border-[#FCFDFA] z-30">
                    <div className="envblur rounded-[1.25rem] lg:px-[4.5rem] md:py-12 border-[#E0EBD4] border h-full pl-2  md:px-5">
                        <h3 className="font-bold text-[1.25rem] sm:text-[20px] md:leading-[48px] md:text-4xl lg:text-[44px] lg:leading-[62px] sm:leading-[42px] text-[#ffffff] pl-2 mt-2">
                            Environmental Product Declarations, Life cycle
                            analysis & Product Environmental Footprint (PEF)
                        </h3>
                        <p className="md:mt-8 mt-5 md:text-[24px]  lg:text-[20px]  font-medium text-[#ffffff] pl-2 ">
                            We are delivering expert PEF assessments to quantify
                            and reduce the environmental footprint of products,
                            following the European Commission's methodology for
                            standardized environmental performance comparison.
                        </p>
                        <ul className="md:mt-8 mt-2 flex flex-col lg:gap-6 md:gap-10 md:text-[24px] lg:text-[20px] md:leading-[29px] font-medium text-[#ffffff] custom-icons text-[0.875rem] gap-2">
                            <li>
                                <strong>Product Category Rule (PCR) : </strong>
                                Establishing PCRs to set specific rules for
                                environmental product declarations, ensuring
                                standardization and comparability.
                            </li>
                            <li>
                                <strong>
                                    Life Cycle Analysis (LCA) Study :{' '}
                                </strong>
                                Conducting comprehensive LCAs to assess the
                                environmental impacts of products throughout
                                their lifecycle, from cradle to grave.
                            </li>
                            <li>
                                <strong>
                                    Environmental Product Declaration (EPD) :
                                </strong>
                                Creating EPDs to transparently communicate the
                                environmental impact of products, facilitating
                                informed decision-making.
                            </li>
                            <li>
                                <strong>
                                    EPDs following EN 15804 Standards :{' '}
                                </strong>
                                Developing EPDs in compliance with EN 15804
                                standards for the construction sector, ensuring
                                industry-specific relevance.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="environmental environmental-2 bg-[#E0EBD44D] rounded-[1.75rem] md:p-3 border border-[#FCFDFA] z-30">
                    <div className="envblur rounded-[1.25rem] lg:px-[4.5rem] md:py-12 border-[#E0EBD4] border h-full pl-2 md:px-5">
                        {/* <h3 className="font-bold text-[44px] leading-[62px] text-[#ffffff]">
                            Environmental Product Declarations, Life cycle
                            analysis & Product Environmental Footprint (PEF)
                        </h3>
                        <p className="mt-8 text-[24px] leading-[29px] font-medium text-[#ffffff]">
                            We are delivering expert PEF assessments to quantify
                            and reduce the environmental footprint of products,
                            following the European Commission's methodology for
                            standardized environmental performance comparison.
                        </p> */}
                        <ul className="md:mt-8 mt-2 flex flex-col  lg:gap-6 md:gap-10 md:text-[24px] lg:text-[20px] md:leading-[29px] font-medium text-[#ffffff] custom-icons gap-2">
                            <li>
                                <strong>
                                    Environmental Product Information (MRPI®) :
                                </strong>
                                Providing detailed environmental product
                                information to support sustainable procurement
                                and design choices.
                            </li>
                            <li>
                                <strong>
                                    Product and Process Innovation :{' '}
                                </strong>
                                Innovating for sustainability, integrating
                                eco-friendly materials and processes to reduce
                                environmental footprints.
                            </li>
                            <li>
                                <strong>
                                    LCA Studies according to ISO14040/44 :{' '}
                                </strong>
                                Executing certified LCA studies to international
                                standards, ensuring credibility and reliability.
                            </li>
                            <li>
                                <strong>LCA for EPDs and Eco-labeling :</strong>
                                Applying LCA insights to support EPDs,
                                eco-labeling, and product claims, enhancing
                                product sustainability credentials.
                            </li>
                            <li>
                                <strong>
                                    Eco-efficiency for Sustainable Business
                                    Models :{' '}
                                </strong>
                                Leveraging eco-efficiency results to guide the
                                development of sustainable business strategies
                                and models.
                            </li>
                            <li>
                                <strong>Eco-design consultancy :</strong>
                                Empowering product development with Ecodesign by
                                embedding environmental considerations into
                                design processes.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Environmental;
