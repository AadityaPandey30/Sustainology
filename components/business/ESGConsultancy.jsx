import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ESGConsultancy = ({ sectionRefs }) => {
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
        <section className="consultancies-section -mt-24" ref={container}>
            <div id="busi-2" ref={(el) => (sectionRefs.current[1] = el)}></div>
            <div className="mb-10">
                <h3 className="font-bold text-[2.5rem] leading-[3.4rem] text-[#33496F] text-center">
                    Here is how we can assist
                </h3>
            </div>
            <div className="consultancies">
                <div className="consultancy consultancy-1">
                    <div className="py-[84px] px-[98px] h-full relative">
                        <div className="grid lg:grid-cols-8 h-full">
                            <div className="lg:col-span-6 flex flex-col justify-between">
                                <div>
                                    <h4 className="font-bold text-4xl text-[#2A3C5B]">
                                        ESG strategy and transformation
                                    </h4>
                                    <p className="mt-8 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Navigating Your ESG Landscape -
                                        </strong>{' '}
                                        Learn about ESG standards, trends, and
                                        how they affect your business. See where
                                        you stand compared to competitors and
                                        ESG leaders to focus your efforts
                                        effectively.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Materiality Analysis -
                                        </strong>{' '}
                                        Pinpoint and prioritize ESG matters
                                        crucial to your stakeholders and
                                        business sustainability, guiding your
                                        strategic focus.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            ESG Strategy Development -
                                        </strong>{' '}
                                        Crafting a forward-thinking ESG agenda
                                        that carves out long-term value and a
                                        competitive edge by tackling key risks
                                        and seizing opportunities.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Adopting circular economy practices
                                            and decarbonisation strategies -
                                        </strong>{' '}
                                        Revamp your processes and supply chain
                                        to embrace circularity, driving waste,
                                        water reduction, and cost efficiency
                                        while bolstering sustainability.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Sustainable Procurement
                                            Transformation -
                                        </strong>{' '}
                                        Embed sustainability in your supply
                                        chain, enhancing value creation and
                                        resilience through responsible sourcing
                                        and practices.
                                    </p>
                                </div>

                                <div className="mt-5 mr-28 mb-5">
                                    <Link
                                        href="contact-us"
                                        class=" px-5 text-xl leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-1/2 text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]"
                                    >
                                        Request Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consultancy consultancy-2">
                    <div className="py-[84px] px-[98px] h-full relative">
                        <div className="grid lg:grid-cols-8 h-full">
                            <div className="lg:col-span-6 flex flex-col justify-between">
                                <div>
                                    <h4 className="font-bold text-4xl text-[#2A3C5B]">
                                        ESG Reporting and Data
                                    </h4>
                                    <p className="mt-8 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Sustainability strategy and
                                            reporting -
                                        </strong>{' '}
                                        We enhance your reporting capabilities
                                        by establishing effective performance
                                        monitoring, governance models, and data
                                        collection processes for transparent
                                        sustainability insights.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            ESG Data Reporting -
                                        </strong>{' '}
                                        Our expertise ensures your ESG data
                                        reporting is comprehensive, reflecting
                                        your sustainable impact and governance
                                        practices with clarity and precision.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Access to high-quality ESG data -
                                        </strong>{' '}
                                        Gain access to reliable ESG data to
                                        inform strategic decisions, benchmark
                                        performance, and drive your
                                        sustainability agenda forward.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Strategic Finance Solutions -
                                        </strong>{' '}
                                        Partner with us for strategic financial
                                        guidance tailored to navigate complex
                                        regulatory landscapes, optimize
                                        processes, and leverage ESG for
                                        financial resilience.
                                    </p>
                                </div>

                                <div className="mt-5 mb-5">
                                    <Link
                                        href="contact-us"
                                        class="px-5 text-xl leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-1/2 text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]"
                                    >
                                        Request Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consultancy consultancy-3">
                    <div className="py-[84px] px-[98px] h-full relative">
                        <div className="grid lg:grid-cols-8 h-full">
                            <div className="lg:col-span-6 flex flex-col justify-between">
                                <div>
                                    <h4 className="font-bold text-4xl text-[#2A3C5B]">
                                        Risk And Opportunity Assessment
                                    </h4>
                                    <p className="mt-8 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Climate Risk Assessment -
                                        </strong>{' '}
                                        Evaluating and preparing businesses for
                                        climate-related risks to foster
                                        resilience amidst environmental shifts.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            ESG Risk And Opportunity Assessment
                                            -
                                        </strong>{' '}
                                        Comprehensive analysis to pinpoint ESG
                                        risks and reveal sustainable
                                        opportunities for business resilience
                                        and growth.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            ESG Due Diligence -
                                        </strong>{' '}
                                        Thorough due diligence navigates ESG
                                        complexities in transactions and
                                        partnerships, safeguarding interests and
                                        ensuring compliance.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Supply Chain Risk Assessment -
                                        </strong>{' '}
                                        Delving into your supply chains to
                                        highlight ESG risks, providing insights
                                        and strategies for mitigating impacts
                                        and enhancing sustainability.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Identify human rights risks and due
                                            diligence -
                                        </strong>{' '}
                                        Identifying and managing human rights
                                        risks within operations and value chains
                                        to ensure ethical practices and
                                        compliance.
                                    </p>
                                </div>

                                <div className="mt-5 mb-5">
                                    <Link
                                        href="contact-us"
                                        class="px-5 text-xl leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-1/2 text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]"
                                    >
                                        Request Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="consultancy consultancy-4">
                    <div className="py-[84px] px-[98px] h-full relative">
                        <div className="grid lg:grid-cols-8 h-full">
                            <div className="lg:col-span-6 flex flex-col justify-between">
                                <div>
                                    <h4 className="font-bold text-4xl text-[#2A3C5B]">
                                        Economic, Social Development &
                                        Governance
                                    </h4>
                                    <p className="mt-8 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Economic Planning and Infrastructure
                                            Policy Advisory-
                                        </strong>{' '}
                                        Guiding sustainable economic growth and
                                        infrastructure development with
                                        strategic planning and policy
                                        formulation.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Human Rights and Social Impact
                                            Analysis -
                                        </strong>{' '}
                                        Assessing and addressing the human
                                        rights implications and social impacts
                                        of business operations.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Inclusion, Diversity, and Equity
                                            (IDE) Strategy -
                                        </strong>{' '}
                                        Advancing IDE through comprehensive
                                        diagnostics, pay gap analysis,
                                        benchmarking, and modeling, to cultivate
                                        an inclusive culture and drive equitable
                                        opportunities.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            Governance Maturity Assessment -
                                        </strong>{' '}
                                        Evaluating governance structures and
                                        practices against benchmarks, offering
                                        insights to enhance transparency,
                                        accountability, and ESG alignment.
                                    </p>
                                    <p className="mt-3 text-lg leading-[1.56rem] font-medium text-[#666666]">
                                        <strong className="text-[#333333]">
                                            ESG Governance Due Diligence -
                                        </strong>{' '}
                                        Performing thorough governance due
                                        diligence to ensure robust ESG
                                        integration, safeguarding against risks
                                        and reinforcing stakeholder trust.
                                    </p>
                                </div>

                                <div className="mt-5 mb-5">
                                    <Link
                                        href="contact-us"
                                        class="px-5 text-xl leading-[1.375rem] font-semibold  py-2 hover:text-[#2F5738] w-1/2 text-white rounded hover:bg-[#FCFDFA] border border-[#2F5738]  bg-[#2F5738]"
                                    >
                                        Request Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ESGConsultancy;
