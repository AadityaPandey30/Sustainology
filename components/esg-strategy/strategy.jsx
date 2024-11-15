import React, { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const EsgStartegy = ({ sectionRefs }) => {
    const router = useRouter();

    const container = useRef();
    useGSAP(
        () => {
            const consultancyTimeln = gsap.timeline({
                scrollTrigger: {
                    trigger: '.consultancies',
                    pin: true,
                    pinSpacing: true,
                    start: 'left-=80px left',
                    end: '+=2000',
                    scrub: 1,
                    marker: true,
                },
            });

            // label 1
            consultancyTimeln.addLabel('consultancy1');
            gsap.set('.consultancy-1', {
                clipPath: 'none',
            });
            consultancyTimeln.to('.consultancy-1', {
                clipPath: 'none',
            });

            // label 2
            consultancyTimeln.addLabel('consultancy2');
            gsap.set('.consultancy-2', {
                clipPath: 'circle(0% at 88% 20%)',
            });
            consultancyTimeln.to('.consultancy-2', {
                clipPath: 'circle(100% at 50% 50%)',
            });

            // label 3
            consultancyTimeln.addLabel('consultancy3');
            gsap.set('.consultancy-3', {
                clipPath: 'circle(0% at 88% 20%)',
            });
            consultancyTimeln.to('.consultancy-3', {
                clipPath: 'circle(100% at 50% 50%)',
            });

            // label 4
            consultancyTimeln.addLabel('consultancy4');
            gsap.set('.consultancy-4', {
                clipPath: 'circle(0% at 88% 20%)',
            });
            consultancyTimeln.to('.consultancy-4', {
                clipPath: 'circle(100% at 50% 50%)',
            });
        },
        { scope: container }
    );
    return (
        <>
            <section className="consultancies-section -mt-24 " ref={container}>
                <div className="flex justify-center pt-12">
                    <div className=" w-full h-full bg-[#E0EBD4] px-10 md:px-10">
                        <div className="flex items-center justify-between  md:flex md:justify-between ">
                            <p className="py-8 text-[32px] text-[#2A3C5B] font-bold leading-8 ">
                                ESG strategy and transformation
                            </p>
                            <Image
                                loading="lazy"
                                src="/insta.png"
                                width={150}
                                height={150}
                                alt=""
                            ></Image>
                        </div>
                        <p className="py-4 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Navigating Your ESG Landscape -
                            </span>{' '}
                            Learn about ESG standards, trends, and how they
                            affect your business. See where you stand compared
                            to competitors and ESG leaders to focus your efforts
                            effectively.
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Materiality Analysis -
                            </span>{' '}
                            Pinpoint and prioritize ESG matters crucial to your
                            stakeholders and business sustainability, guiding
                            your strategic focus.
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                ESG Strategy Development -
                            </span>{' '}
                            Crafting a forward-thinking ESG agenda that carves
                            out long-term value and a competitive edge by
                            tackling key risks and seizing opportunities.
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Adopting circular economy practices and
                                decarbonisation strategies-
                            </span>{' '}
                            Revamp your processes and supply chain to embrace
                            circularity, driving waste, water reduction, and
                            cost efficiency while bolstering sustainability.
                        </p>
                        <p className="py-4 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Sustainable Procurement Transformation -
                            </span>{' '}
                            Embed sustainability in your supply chain, enhancing
                            value creation and resilience through responsible
                            sourcing and practices.
                        </p>

                        <button
                            className="ml-2 mb-6 mt-3 w-[233px] h-[44px] text-[white] text-[20px] rounded-lg bg-[#2F5738]"
                            onClick={() => router.push('/contact-us')}
                        >
                            Request Consultation
                        </button>
                    </div>
                </div>
            </section>

            <section className="consultancies-section -mt-24" ref={container}>
                <div className="flex justify-center pt-12">
                    <div className=" w-full h-full bg-[#E8F1F6]  px-10">
                        <div className="flex items-center justify-between md:flex md:justify-between">
                            <p className="py-8 text-[32px] text-[#2A3C5B] font-bold leading-8 ">
                                ESG Reporting and Data
                            </p>
                            <Image
                                loading="lazy"
                                src="/bulb.png"
                                width={100}
                                height={100}
                                alt=""
                            ></Image>
                        </div>
                        <p className="py-4 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Sustainability strategy and reporting -
                            </span>{' '}
                            We enhance your reporting capabilities by
                            establishing effective performance monitoring,
                            governance models, and data collection processes for
                            transparent sustainability insights..
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                ESG Data Reporting -
                            </span>{' '}
                            Our expertise ensures your ESG data reporting is
                            comprehensive, reflecting your sustainable impact
                            and governance practices with clarity and precision.
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Access to high-quality ESG data -
                            </span>{' '}
                            Gain access to reliable ESG data to inform strategic
                            decisions, benchmark performance, and drive your
                            sustainability agenda forward
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Strategic Finance Solution -
                            </span>{' '}
                            Partner with us for strategic financial guidance
                            tailored to navigate complex regulatory landscapes,
                            optimize processes, and leverage ESG for financial
                            resilience.
                        </p>

                        <button
                            className="ml-2 mb-6 mt-3  w-[233px] h-[44px] text-[white] text-[20px] rounded-lg bg-[#2F5738]"
                            onClick={() => router.push('/contact-us')}
                        >
                            Request Consultation
                        </button>
                    </div>
                </div>
            </section>

            <section className="consultancies-section -mt-24" ref={container}>
                <div className="flex justify-center pt-12">
                    <div className=" w-full h-full bg-[#F2EFDE] px-10">
                        <div className="flex items-center justify-between  md:flex md:justify-between ">
                            <p className="py-8 text-[32px] text-[#2A3C5B] font-bold leading-8 ">
                                Risk And Opportunity Assesment
                            </p>
                            <Image
                                loading="lazy"
                                src="/risk.png"
                                width={200}
                                height={200}
                                alt=""
                            ></Image>
                        </div>
                        <p className="py-4 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Climate Risk Assessment-
                            </span>{' '}
                            Evaluating and preparing businesses for
                            climate-related risks to foster resilience amidst
                            environmental shifts
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                ESG Risk And Opportunity Assessment -
                            </span>{' '}
                            Comprehensive analysis to pinpoint ESG risks and
                            reveal sustainable opportunities for business
                            resilience and growth
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                ESG Due Diligence -
                            </span>{' '}
                            Thorough due diligence navigates ESG complexities in
                            transactions and partnerships, safeguarding
                            interests and ensuring compliance
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Supply Chain Risk Assessment -
                            </span>{' '}
                            Delving into your supply chains to highlight ESG
                            risks, providing insights and strategies for
                            mitigating impacts and enhancing sustainability.
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Identufying human rights risks and due diligence
                            </span>{' '}
                            Identifying and managing human rights risks within
                            operations and value chains to ensure ethical
                            practices and compliance.
                        </p>

                        <button
                            className="ml-2 mb-6 mt-3  w-[233px] h-[44px] text-[white] text-[20px] rounded-lg bg-[#2F5738]"
                            onClick={() => router.push('/contact-us')}
                        >
                            Request Consultation
                        </button>
                    </div>
                </div>
            </section>

            <section
                className="min-h-[90vh] -mt-24 max-md:pb-8"
                ref={container}
            >
                <div className="flex justify-center pt-12">
                    <div className=" w-full h-full bg-[#ECF8EF] px-10">
                        <div className="flex items-center justify-between  md:flex md:justify-between">
                            <p className="py-8 text-[32px] text-[#2A3C5B] font-bold leading-8 ">
                                Economic, Social Development & Governance
                            </p>
                            <Image
                                loading="lazy"
                                src="/certified.png"
                                width={200}
                                height={200}
                                alt=""
                            ></Image>
                        </div>
                        <p className="py-4 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Economic Planning and Infrastructure Policy
                                Advisory-
                            </span>{' '}
                            Guiding sustainable economic growth and
                            infrastructure development with strategic planning
                            and policy formulation
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Human Rights and Social Impact Analysis -
                            </span>{' '}
                            Assessing and addressing the human rights
                            implications and social impacts of business
                            operations.
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Inclusion, Diversity, and Equity (IDE) Strategy-
                            </span>{' '}
                            Advancing IDE through comprehensive diagnostics, pay
                            gap analysis, benchmarking, and modeling, to
                            cultivate an inclusive culture and drive equitable
                            opportunities.
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                Governance Maturity Assessment -
                            </span>{' '}
                            Evaluating governance structures and practices
                            against benchmarks, offering insights to enhance
                            transparency, accountability, and ESG alignment.
                        </p>
                        <p className="py-2 px-2 text-[18px] font-medium">
                            <span className="font-bold text-[20px]">
                                ESG Goverance Due Dilligence
                            </span>{' '}
                            Performing thorough governance due diligence to
                            ensure robust ESG integration, safeguarding against
                            risks and reinforcing stakeholder trust.
                        </p>

                        <button
                            className="ml-2 mb-6 mt-3  w-[233px] h-[44px] text-[white] text-[20px] rounded-lg bg-[#2F5738]"
                            onClick={() => router.push('/contact-us')}
                        >
                            Request Consultation
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EsgStartegy;
